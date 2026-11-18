/**
 * SIMBA - CORE APPLICATION CONTROLLER
 * Menghubungkan seluruh modul: Routing, View Switcher, Canvas Lifecycle, Map, Drawer, dan Slides
 */

class SimbaApp {
  constructor() {
    this.currentView = 'welcome';
    this.canvasEngine = null;
    this.mapController = null;
    this.drawerController = null;
    this.slidesEngine = null;
    this.emergencyModal = null;

    this.init();
  }

  init() {
    // 1. Inisialisasi Modul Canvas Letusan Sinematik
    this.canvasEngine = new VolcanicEruptionEngine('volcano-canvas');
    this.initCinematicIntro();

    // 2. Inisialisasi Modul Peta Leaflet
    this.mapController = new SimbaMap('leaflet-map');

    // 3. Inisialisasi Modul Detail Drawer
    this.drawerController = new DetailDrawer('volcano-drawer', 'drawer-backdrop');

    // 4. Inisialisasi Modul Slides Edukasi
    this.slidesEngine = new SimbaSlidesEngine('education-slides-wrapper');

    // 5. Inisialisasi Modul Berita & Dokumentasi 2026
    if (typeof SimbaNewsEngine === 'function') {
      this.newsEngine = new SimbaNewsEngine('news-cards-grid', 'news-modal-wrapper');
      window.SIMBA_NEWS = this.newsEngine;
    }

    // 6. Inisialisasi Modal Kontak Darurat
    this.emergencyModal = new EmergencyModal('emergency-modal', 'emergency-backdrop');

    // 7. Pasang Event Listeners Navigasi
    this.bindNavigationEvents();
    this.bindSearchAndFilterEvents();

    // 8. Dengarkan Hash URL & Inisialisasi Tampilan Awal
    window.addEventListener('hashchange', () => this.handleHashChange());
    this.handleHashChange();

    // 9. Integrasi Database MySQL Dinamis (Opsional/Fallback)
    this.syncFromDatabaseAPI();
  }

  async syncFromDatabaseAPI() {
    try {
      const res = await fetch('api/get_volcanoes.php');
      if (res.ok) {
        const json = await res.json();
        if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
          // Hanya timpa jika data dari database MySQL lebih banyak atau sama lengkapnya
          const currentCount = (window.SIMBA_VOLCANOES || []).length;
          if (json.data.length >= currentCount) {
            window.SIMBA_VOLCANOES = json.data;
            if (this.mapController) {
              this.mapController.renderVolcanoMarkers();
            }
            console.log('[SIMBA] Terhubung & sinkron dengan database MySQL simba_db (' + json.total + ' gunung api)');
          } else {
            console.log(`[SIMBA] Database MySQL saat ini berisi ${json.data.length} gunung api. Mempertahankan ${currentCount} data gunung api lengkap SIMBA.`);
          }
        }
      }
    } catch (e) {
      console.log('[SIMBA] Menggunakan dataset lokal mandiri (fallback: 103 gunung api)');
    }
  }

  initCinematicIntro() {
    if (!this.canvasEngine) return;

    const badge = document.getElementById('volcano-cinematic-badge');
    const badgeText = document.getElementById('cinematic-phase-text');
    const badgeDot = document.getElementById('cinematic-phase-dot');
    const heroContent = document.getElementById('welcome-hero-content');
    const skipBtn = document.getElementById('btn-skip-intro');
    const replayBtn = document.getElementById('btn-replay-eruption');

    // Callback perubahan fase letusan (Diam -> Berasap -> Memerah -> Meledak)
    this.canvasEngine.onStateChange = (phase) => {
      if (badge && badgeText && badgeDot) {
        if (phase.key === 'active') {
          badge.classList.add('opacity-0', 'pointer-events-none');
        } else {
          badge.classList.remove('opacity-0', 'pointer-events-none');
          badgeText.textContent = phase.label;
          badgeDot.style.backgroundColor = phase.color;
        }
      }
    };

    // Callback saat ledakan dahsyat memuncak: Munculkan teks WELCOME TO SIMBA
    this.canvasEngine.onHeroReveal = () => {
      if (heroContent) {
        heroContent.classList.remove('welcome-hero-hidden');
        heroContent.classList.add('welcome-hero-visible');
      }
      if (badge) {
        badge.classList.add('opacity-0', 'pointer-events-none');
      }
      if (skipBtn) {
        skipBtn.classList.add('hidden');
      }
      if (replayBtn) {
        replayBtn.classList.remove('hidden');
      }
    };

    // Tombol Lewati Intro: Langsung ke teks & erupsi aktif
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.canvasEngine.skipToActive();
      });
    }

    // Tombol Putar Ulang Letusan: Reset ke gunung diam lalu meledak kembali
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        if (heroContent) {
          heroContent.classList.remove('welcome-hero-visible');
          heroContent.classList.add('welcome-hero-hidden');
        }
        if (replayBtn) replayBtn.classList.add('hidden');
        if (skipBtn) skipBtn.classList.remove('hidden');
        if (badge) badge.classList.remove('opacity-0', 'pointer-events-none');

        this.canvasEngine.restartSequence();
      });
    }
  }

  bindNavigationEvents() {
    // Navigasi Link Desktop & Mobile
    document.querySelectorAll('.nav-link, #mobile-nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetView = link.getAttribute('data-view');
        if (targetView) {
          e.preventDefault();
          const targetHash = targetView === 'welcome' ? '#home' : (targetView === 'map' ? '#peta' : (targetView === 'news' ? '#berita' : '#edukasi'));
          window.location.hash = targetHash;
          this.navigateTo(targetView);
        }
      });
    });

    // Tombol Masuk ke Peta dari Welcome Screen
    const enterMapBtn = document.getElementById('btn-enter-map');
    if (enterMapBtn) {
      enterMapBtn.addEventListener('click', () => {
        window.location.hash = '#peta';
        this.navigateTo('map');
      });
    }

    // Tombol CTA Edukasi dari Welcome Screen
    const learnBtn = document.getElementById('btn-learn-ppt');
    if (learnBtn) {
      learnBtn.addEventListener('click', () => {
        window.location.hash = '#edukasi';
        this.navigateTo('education');
      });
    }

    // Tombol Floating SOS Darurat
    const floatingSos = document.getElementById('btn-floating-sos');
    if (floatingSos) {
      floatingSos.addEventListener('click', () => {
        this.openEmergency();
      });
    }

    // Tombol Nav SOS di Navbar
    const navSos = document.getElementById('nav-emergency-btn');
    if (navSos) {
      navSos.addEventListener('click', () => {
        this.openEmergency();
      });
    }

    // Mobile Navbar Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });
    }
  }

  bindSearchAndFilterEvents() {
    // Filter Status Buttons
    const filterButtons = document.querySelectorAll('.filter-status-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const status = e.currentTarget.getAttribute('data-status');
        
        filterButtons.forEach(b => {
          b.classList.remove('bg-orange-500', 'text-white', 'border-orange-500', 'shadow-[0_0_12px_rgba(255,87,34,0.4)]');
          b.classList.add('bg-zinc-900/80', 'text-zinc-300', 'border-zinc-800');
        });

        e.currentTarget.classList.remove('bg-zinc-900/80', 'text-zinc-300', 'border-zinc-800');
        e.currentTarget.classList.add('bg-orange-500', 'text-white', 'border-orange-500', 'shadow-[0_0_12px_rgba(255,87,34,0.4)]');

        if (this.mapController) {
          this.mapController.setFilter(status);
        }
      });
    });

    // Filter Type Buttons (Semua / Aktif / Dorman)
    const typeButtons = document.querySelectorAll('.filter-type-btn');
    typeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        
        typeButtons.forEach(b => {
          b.classList.remove('bg-zinc-800', 'text-white', 'border-zinc-700');
          b.classList.add('bg-zinc-900/90', 'text-zinc-400', 'border-zinc-800');
        });

        e.currentTarget.classList.remove('bg-zinc-900/90', 'text-zinc-400', 'border-zinc-800');
        e.currentTarget.classList.add('bg-zinc-800', 'text-white', 'border-zinc-700');

        if (this.mapController) {
          this.mapController.setTypeFilter(type);
        }
      });
    });

    // Live Search Gunung Api
    const searchInput = document.getElementById('volcano-search-input');
    const searchDropdown = document.getElementById('volcano-search-results');

    if (searchInput && searchDropdown) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        if (q.length < 2) {
          searchDropdown.classList.add('hidden');
          return;
        }

        const filtered = (window.SIMBA_VOLCANOES || []).filter(v => 
          v.nama.toLowerCase().includes(q) || 
          v.lokasi.kabupaten.toLowerCase().includes(q) || 
          v.lokasi.provinsi.toLowerCase().includes(q)
        );

        if (filtered.length > 0) {
          searchDropdown.innerHTML = filtered.map(v => `
            <div onclick="window.SIMBA_APP.selectSearchResult('${v.id}')" class="p-2.5 hover:bg-zinc-800/90 cursor-pointer border-b border-zinc-800 last:border-b-0 flex items-center justify-between text-xs">
              <div>
                <span class="font-bold text-white block">${v.nama}</span>
                <span class="text-[10px] text-zinc-400">${v.lokasi.provinsi} • ${v.ketinggian_mdpl} mdpl</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${v.status.level === 4 ? 'bg-red-500/20 text-red-400' : (v.status.level === 3 ? 'bg-orange-500/20 text-orange-400' : (v.status.level === 2 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-emerald-500/20 text-emerald-400'))}">
                ${v.status.label}
              </span>
            </div>
          `).join('');
          searchDropdown.classList.remove('hidden');
        } else {
          searchDropdown.innerHTML = `<div class="p-3 text-xs text-zinc-400 text-center">Gunung tidak ditemukan</div>`;
          searchDropdown.classList.remove('hidden');
        }
      });

      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
          searchDropdown.classList.add('hidden');
        }
      });
    }
  }

  selectSearchResult(id) {
    const searchDropdown = document.getElementById('volcano-search-results');
    const searchInput = document.getElementById('volcano-search-input');
    if (searchDropdown) searchDropdown.classList.add('hidden');
    if (searchInput) searchInput.value = '';

    if (this.currentView !== 'map') {
      window.location.hash = `#peta`;
      this.navigateTo('map');
      setTimeout(() => {
        if (this.mapController) this.mapController.focusVolcano(id);
      }, 300);
    } else {
      if (this.mapController) this.mapController.focusVolcano(id);
    }
  }

  handleHashChange() {
    const hash = window.location.hash || '#home';

    if (hash === '#peta') {
      this.navigateTo('map');
    } else if (hash === '#berita') {
      this.navigateTo('news');
    } else if (hash === '#edukasi') {
      this.navigateTo('education');
    } else if (hash.startsWith('#gunung/')) {
      const id = hash.replace('#gunung/', '');
      this.navigateTo('map');
      setTimeout(() => {
        this.openDetail(id);
      }, 400);
    } else {
      this.navigateTo('welcome');
    }
  }

  navigateTo(viewName) {
    this.currentView = viewName;

    // Sembunyikan semua section view
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    // Tampilkan section view yang aktif
    const activeSection = document.getElementById('view-' + viewName);
    if (activeSection) {
      activeSection.classList.add('active');
    }

    // Update styling nav link aktif
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-view');
      if (target === viewName) {
        link.classList.remove('text-zinc-400');
        link.classList.add('text-orange-500', 'font-bold');
      } else {
        link.classList.remove('text-orange-500', 'font-bold');
        link.classList.add('text-zinc-400');
      }
    });

    // Tutup mobile nav jika terbuka
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && !mobileNav.classList.contains('hidden')) {
      mobileNav.classList.add('hidden');
    }

    // Lifecycle Manajemen Modul
    if (viewName === 'welcome') {
      if (this.canvasEngine) this.canvasEngine.start();
    } else if (viewName === 'map') {
      if (this.canvasEngine) this.canvasEngine.stop();
      if (this.mapController) {
        this.mapController.invalidateSize();
      }
    } else if (viewName === 'news') {
      if (this.canvasEngine) this.canvasEngine.stop();
      if (this.newsEngine) {
        this.newsEngine.init();
      }
    } else if (viewName === 'education') {
      if (this.canvasEngine) this.canvasEngine.stop();
      if (this.slidesEngine) {
        this.slidesEngine.init();
      }
    }
  }

  openDetail(volcanoId) {
    if (this.drawerController) {
      this.drawerController.open(volcanoId);
    }
  }

  openEmergency() {
    if (this.emergencyModal) {
      this.emergencyModal.open();
    }
  }
}

// Inisialisasi Global setelah DOM Siap
document.addEventListener('DOMContentLoaded', () => {
  window.SIMBA_APP = new SimbaApp();
});
