/**
 * SIMBA - NEWS & DOCUMENTATION ENGINE (BERITA BENCANA 2026)
 * Menampilkan Warta Bencana Erupsi Terkini 2026, Kronologi Kasus,
 * Dokumentasi Lapangan, Data Dampak Kerusakan & Korban, serta Integrasi Peta
 * Layout: Full-Width Horizontal Cards (Gambar di Kiri, Data & Ulasan di Kanan)
 */

class SimbaNewsEngine {
  constructor(containerId, modalId) {
    this.container = document.getElementById(containerId);
    this.modal = document.getElementById(modalId);
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.newsList = window.SIMBA_NEWS_2026 || [];

    this.init();
  }

  init() {
    this.newsList = window.SIMBA_NEWS_2026 || [];
    this.renderHeaderAndFilters();
    this.renderNewsGrid();
    this.bindEvents();
  }

  renderHeaderAndFilters() {
    const headerEl = document.getElementById('news-header-container');
    if (!headerEl) return;

    headerEl.innerHTML = `
      <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        
        <!-- Badge & Title -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-800/80">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-alert-pulse"></span>
              <span>Warta Kebencanaan Terverifikasi • Era 2026</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Kilas Bencana Erupsi <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Tahun 2026</span>
            </h1>
            <p class="text-xs sm:text-sm text-zinc-400 mt-1 max-w-3xl">
              Laporan terverifikasi aktivitas vulkanik, kronologi letusan paroksismal, galeri dokumentasi visual lapangan, serta data penanganan darurat resmi PVMBG, BNPB, dan BPBD.
            </p>
          </div>

          <!-- Total Counter Badge -->
          <div class="sm:text-right shrink-0">
            <span class="px-4 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-orange-400 font-bold inline-block shadow-md">
              ${this.newsList.length} Kasus Bencana Terdokumentasi
            </span>
          </div>
        </div>

        <!-- Filter & Search Bar -->
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-zinc-950/80 backdrop-blur-md p-2.5 rounded-2xl border border-zinc-800/80 shadow-xl">
          
          <!-- Category Filter Pills -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button data-cat="all" class="news-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-orange-500 text-white border border-orange-500 shadow-[0_0_15px_rgba(255,87,34,0.35)] whitespace-nowrap transition">
              Semua Kasus (2026)
            </button>
            <button data-cat="Erupsi Eksplosif" class="news-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 whitespace-nowrap transition">
              🌋 Eksplosif
            </button>
            <button data-cat="Awan Panas" class="news-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 whitespace-nowrap transition">
              💨 Awan Panas
            </button>
            <button data-cat="Lahar Hujan" class="news-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 whitespace-nowrap transition">
              🌊 Lahar Hujan
            </button>
            <button data-cat="Relokasi" class="news-filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 whitespace-nowrap transition">
              ⛺ Relokasi &amp; Darurat
            </button>
          </div>

          <!-- Live Search Input -->
          <div class="relative w-full md:w-80">
            <input id="news-search-input" type="text" placeholder="Cari kasus / gunung api / daerah..." class="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-4 pr-9 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition">
            <span class="absolute right-3 top-2.5 text-zinc-500 pointer-events-none">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
          </div>

        </div>

      </div>
    `;
  }

  renderNewsGrid() {
    const gridEl = document.getElementById('news-cards-grid');
    if (!gridEl) return;

    let items = this.newsList;

    // Filter Kategori
    if (this.activeCategory !== 'all') {
      items = items.filter(n => n.kategori.toLowerCase().includes(this.activeCategory.toLowerCase()));
    }

    // Filter Search
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(n => 
        n.judul.toLowerCase().includes(q) ||
        n.gunung_nama.toLowerCase().includes(q) ||
        n.lokasi.toLowerCase().includes(q) ||
        n.ringkasan.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      gridEl.innerHTML = `
        <div class="w-full py-16 text-center text-zinc-400 bg-zinc-950/60 rounded-3xl border border-zinc-800/80 p-8 shadow-xl">
          <p class="text-base font-semibold text-white">Tidak ada berita atau laporan yang cocok dengan filter tersebut.</p>
          <p class="text-xs text-zinc-500 mt-1">Coba gunakan kata kunci pencarian lain atau klik tombol reset di bawah.</p>
          <button onclick="window.SIMBA_NEWS.resetFilter()" class="mt-4 px-5 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold shadow-lg hover:bg-orange-600 transition">
            Tampilkan Semua Kasus 2026
          </button>
        </div>
      `;
      return;
    }

    // Render Full-Width Horizontal Cards
    gridEl.innerHTML = items.map(n => {
      const statusBadge = n.status_level === 4 
        ? 'bg-red-500 text-white animate-alert-pulse' 
        : (n.status_level === 3 ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-zinc-900');

      const firstDoc = (n.dokumentasi && n.dokumentasi.length > 0) ? n.dokumentasi[0] : null;
      const coverImg = firstDoc ? firstDoc.url : 'assets/images/logo-simba.svg';
      const fallbackUrl = (firstDoc && firstDoc.fallback) ? firstDoc.fallback : (firstDoc && firstDoc.svg ? firstDoc.svg : 'assets/images/logo-simba.svg');
      const svgUrl = (firstDoc && firstDoc.svg) ? firstDoc.svg : 'assets/images/logo-simba.svg';

      return `
        <article class="w-full flex flex-col lg:flex-row bg-zinc-950/90 border border-zinc-800/90 hover:border-orange-500/60 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(255,87,34,0.18)] transition duration-300 group">
          
          <!-- SISI KIRI: Foto & Dokumentasi Visual (Landscape Horizontal) -->
          <div class="relative w-full lg:w-[380px] xl:w-[420px] h-60 lg:h-auto shrink-0 overflow-hidden bg-zinc-900 flex items-center justify-center">
            <img src="${coverImg}" alt="${n.judul}" onerror="if(this.src!=='${fallbackUrl}'){this.src='${fallbackUrl}';}else if(this.src!=='${svgUrl}'){this.src='${svgUrl}';}else{this.src='assets/images/logo-simba.svg';}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent"></div>
            
            <!-- Badges di atas gambar -->
            <div class="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider shadow-xl ${statusBadge}">
                Level ${n.status_level}: ${n.status_label}
              </span>
              <span class="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-zinc-950/80 text-zinc-200 border border-zinc-700/80 backdrop-blur-md shadow-md">
                ${n.kategori}
              </span>
            </div>

            <!-- Foto Count Pill -->
            <div class="absolute bottom-4 left-4 px-3 py-1 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5 shadow-md">
              <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>${n.dokumentasi.length} Foto Bukti Kejadian</span>
            </div>
          </div>

          <!-- SISI KANAN: Konten Berita, Data Dampak, & Aksi -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <!-- Meta Tanggal & Wilayah -->
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 mb-2.5">
                <span class="flex items-center gap-1.5 text-orange-400 font-bold">
                  <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  ${n.tanggal} • ${n.waktu}
                </span>
                <span class="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium flex items-center gap-1">
                  📍 ${n.lokasi}
                </span>
              </div>

              <!-- Judul Utama -->
              <h3 class="text-lg sm:text-xl font-black text-white group-hover:text-orange-400 transition leading-snug font-heading mb-2.5">
                ${n.judul}
              </h3>

              <!-- Ringkasan Situasi -->
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                ${n.ringkasan}
              </p>
            </div>

            <!-- Bar Statistik Dampak (Horizontal 4 Kolom) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/90 text-center">
              <div class="p-1">
                <span class="text-[10px] text-zinc-400 block uppercase font-medium">Korban Jiwa</span>
                <span class="text-sm sm:text-base font-black text-red-400">${n.dampak.meninggal} Jiwa</span>
              </div>
              <div class="p-1 border-l border-zinc-800">
                <span class="text-[10px] text-zinc-400 block uppercase font-medium">Korban Luka</span>
                <span class="text-sm sm:text-base font-black text-amber-400">${n.dampak.luka} Orang</span>
              </div>
              <div class="p-1 border-l border-zinc-800">
                <span class="text-[10px] text-zinc-400 block uppercase font-medium">Pengungsi</span>
                <span class="text-sm sm:text-base font-black text-yellow-400">${n.dampak.mengungsi.toLocaleString('id-ID')}</span>
              </div>
              <div class="p-1 border-l border-zinc-800">
                <span class="text-[10px] text-zinc-400 block uppercase font-medium">Rumah Rusak</span>
                <span class="text-sm sm:text-base font-black text-zinc-200">${n.dampak.rumah_rusak.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex items-center gap-3 pt-1">
              <button onclick="window.SIMBA_NEWS.openArticleModal('${n.id}')" class="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,87,34,0.3)]">
                <span>Baca Kronologi &amp; Galeri Dokumentasi</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <button onclick="window.SIMBA_APP.selectSearchResult('${n.gunung_id}')" title="Lihat Lokasi Gunung di Peta" class="py-3 px-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold">
                <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span class="hidden sm:inline">Peta</span>
              </button>
            </div>

          </div>

        </article>
      `;
    }).join('');
  }

  bindEvents() {
    // Filter Category Buttons
    document.querySelectorAll('.news-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-cat');
        this.activeCategory = cat;

        document.querySelectorAll('.news-filter-btn').forEach(b => {
          b.classList.remove('bg-orange-500', 'text-white', 'border-orange-500', 'shadow-[0_0_15px_rgba(255,87,34,0.35)]');
          b.classList.add('bg-zinc-900/90', 'text-zinc-400', 'border-zinc-800');
        });

        e.currentTarget.classList.remove('bg-zinc-900/90', 'text-zinc-400', 'border-zinc-800');
        e.currentTarget.classList.add('bg-orange-500', 'text-white', 'border-orange-500', 'shadow-[0_0_15px_rgba(255,87,34,0.35)]');

        this.renderNewsGrid();
      });
    });

    // Search Input
    const searchInput = document.getElementById('news-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderNewsGrid();
      });
    }

    // Modal Close button
    const closeBtn = document.getElementById('news-modal-close-btn');
    const backdrop = document.getElementById('news-modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
    if (backdrop) backdrop.addEventListener('click', () => this.closeModal());
  }

  resetFilter() {
    this.activeCategory = 'all';
    this.searchQuery = '';
    const searchInput = document.getElementById('news-search-input');
    if (searchInput) searchInput.value = '';
    this.renderHeaderAndFilters();
    this.renderNewsGrid();
    this.bindEvents();
  }

  openArticleModal(newsId) {
    const item = this.newsList.find(n => n.id === newsId);
    if (!item) return;

    const modalContent = document.getElementById('news-modal-content');
    const modalWrapper = document.getElementById('news-modal-wrapper');
    const backdrop = document.getElementById('news-modal-backdrop');

    if (!modalContent || !modalWrapper || !backdrop) return;

    // Gallery Photos HTML
    const galleryHtml = item.dokumentasi.map((d) => {
      const fallbackUrl = d.fallback || d.svg || 'assets/images/logo-simba.svg';
      const svgUrl = d.svg || 'assets/images/logo-simba.svg';
      return `
      <div class="rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 space-y-2">
        <div class="h-52 sm:h-60 overflow-hidden bg-zinc-900">
          <img src="${d.url}" alt="${d.caption}" onerror="if(this.src!=='${fallbackUrl}'){this.src='${fallbackUrl}';}else if(this.src!=='${svgUrl}'){this.src='${svgUrl}';}else{this.src='assets/images/logo-simba.svg';}" class="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer" onclick="window.open(this.src, '_blank')">
        </div>
        <div class="p-3.5">
          <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">${d.tipe}</span>
          <p class="text-xs text-zinc-300 mt-1.5 leading-relaxed">${d.caption}</p>
        </div>
      </div>
      `;
    }).join('');

    // Timeline Chronology HTML
    const chronoHtml = item.kronologi.map(k => `
      <li class="relative pl-6 pb-4 border-l-2 border-orange-500/40 last:border-l-0 last:pb-0">
        <span class="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-orange-500 border-2 border-zinc-950"></span>
        <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">${k}</p>
      </li>
    `).join('');

    modalContent.innerHTML = `
      <!-- Modal Header -->
      <div class="mb-5 pb-4 border-b border-zinc-800">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded text-xs font-bold ${item.status_level === 4 ? 'bg-red-500 text-white animate-alert-pulse' : 'bg-orange-500 text-white'}">
            Level ${item.status_level}: ${item.status_label}
          </span>
          <span class="text-xs text-zinc-400 font-medium">${item.kategori}</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white font-heading leading-tight">${item.judul}</h2>
        <div class="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-2">
          <span>📅 ${item.tanggal} (${item.waktu})</span>
          <span>📍 ${item.lokasi}</span>
          <span>📢 ${item.sumber}</span>
        </div>
      </div>

      <!-- Impact Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-center mb-6">
        <div>
          <span class="text-[10px] text-zinc-400 block uppercase">Korban Jiwa</span>
          <span class="text-lg font-black text-red-400">${item.dampak.meninggal} Jiwa</span>
        </div>
        <div>
          <span class="text-[10px] text-zinc-400 block uppercase">Luka-Luka</span>
          <span class="text-lg font-black text-amber-400">${item.dampak.luka} Orang</span>
        </div>
        <div>
          <span class="text-[10px] text-zinc-400 block uppercase">Pengungsi</span>
          <span class="text-lg font-black text-yellow-400">${item.dampak.mengungsi.toLocaleString('id-ID')}</span>
        </div>
        <div>
          <span class="text-[10px] text-zinc-400 block uppercase">Rumah Rusak</span>
          <span class="text-lg font-black text-zinc-200">${item.dampak.rumah_rusak.toLocaleString('id-ID')}</span>
        </div>
      </div>

      <!-- Ringkasan & Posko -->
      <div class="mb-6 space-y-3">
        <h4 class="text-sm font-bold text-white font-heading uppercase tracking-wider text-orange-400">Ringkasan Situasi Lapangan</h4>
        <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/80">
          ${item.ringkasan}
        </p>
        <p class="text-xs text-zinc-400 flex items-center gap-1.5">
          <span class="font-bold text-zinc-300">Posko Pengungsian Utama:</span>
          <span>${item.dampak.posko_utama}</span>
        </p>
      </div>

      <!-- Kronologi Kejadian -->
      <div class="mb-6">
        <h4 class="text-sm font-bold text-white font-heading uppercase tracking-wider text-orange-400 mb-3">Kronologi Penanganan &amp; Letusan</h4>
        <ul class="space-y-1">
          ${chronoHtml}
        </ul>
      </div>

      <!-- Galeri Dokumentasi Foto Lapangan -->
      <div class="mb-6">
        <h4 class="text-sm font-bold text-white font-heading uppercase tracking-wider text-orange-400 mb-3">Dokumentasi Foto Visual Lapangan</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${galleryHtml}
        </div>
      </div>

      <!-- Pernyataan Resmi PVMBG / BNPB -->
      <div class="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs text-zinc-200 space-y-1.5 mb-6">
        <span class="font-bold text-orange-400 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Himbauan &amp; Rekomendasi Resmi:
        </span>
        <p class="italic leading-relaxed">"${item.pernyataan_resmi}"</p>
      </div>

      <!-- Footer Action -->
      <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
        <span class="text-xs text-zinc-500">Sumber: ${item.sumber}</span>
        <button onclick="window.SIMBA_APP.selectSearchResult('${item.gunung_id}'); window.SIMBA_NEWS.closeModal();" class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg">
          <span>Lihat ${item.gunung_nama} di Peta</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;

    backdrop.classList.remove('hidden');
    modalWrapper.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modalWrapper = document.getElementById('news-modal-wrapper');
    const backdrop = document.getElementById('news-modal-backdrop');
    if (modalWrapper) modalWrapper.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

window.SimbaNewsEngine = SimbaNewsEngine;
