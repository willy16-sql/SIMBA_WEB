/**
 * SIMBA - INTERACTIVE DIGITAL SLIDES ENGINE
 * Menampilkan materi presentasi PPT Kelompok 2 SI-B secara interaktif
 * Mendukung tombol navigasi Next/Prev, indikator nomor, keyboard panah, dan swipe di smartphone
 */

class SimbaSlidesEngine {
  constructor(containerId) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.slides = window.SIMBA_SLIDES_CONTENT || [];
    this.touchStartX = 0;
    this.touchEndX = 0;

    window.SIMBA_SLIDES = this;

    this.init();
  }

  init() {
    this.container = document.getElementById(this.containerId);
    if (!this.slides || this.slides.length === 0) {
      this.slides = window.SIMBA_SLIDES_CONTENT || [];
    }
    if (!this.container || !this.slides || this.slides.length === 0) return;

    this.renderSkeleton();
    this.bindEvents();
    this.goToSlide(this.currentIndex || 0);
  }

  renderSkeleton() {
    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto w-full px-4 py-8">
        <!-- Slide Card Container -->
        <div class="relative bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden min-h-[540px] flex flex-col justify-between">
          
          <!-- Top Progress Bar & Header -->
          <div>
            <div class="w-full bg-zinc-900 h-1.5">
              <div id="slide-progress-bar" class="bg-gradient-to-r from-orange-500 to-red-600 h-1.5 transition-all duration-300" style="width: 14%;"></div>
            </div>
            <div class="p-4 sm:p-6 border-b border-zinc-800/80 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span id="slide-badge-category" class="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-wider">
                  Pendahuluan
                </span>
                <span class="text-xs text-zinc-500">Materi Edukasi Vulkanologi</span>
              </div>
              <div class="font-mono text-xs sm:text-sm font-bold text-zinc-400">
                <span id="slide-number-active" class="text-white text-base">01</span> / <span id="slide-number-total">07</span>
              </div>
            </div>
          </div>

          <!-- Main Slide Dynamic Body Content -->
          <div id="slide-dynamic-content" class="p-6 sm:p-8 flex-1 flex flex-col justify-center view-fade-in">
            <!-- Rendered dynamically -->
          </div>

          <!-- Bottom Navigation Controls Bar -->
          <div class="p-4 sm:p-6 border-t border-zinc-800/80 bg-zinc-900/50 flex items-center justify-between">
            <button id="btn-slide-prev" class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs sm:text-sm transition flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              <span>Sebelumnya</span>
            </button>

            <!-- Slide Dots Indicators -->
            <div id="slide-dots-container" class="hidden sm:flex items-center gap-2">
              <!-- Dots rendered dynamically -->
            </div>

            <button id="btn-slide-next" class="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2 shadow-[0_0_15px_rgba(255,87,34,0.3)] disabled:opacity-30 disabled:cursor-not-allowed">
              <span>Selanjutnya</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <!-- Help Key Tips -->
        <div class="text-center text-xs text-zinc-500 mt-4 flex items-center justify-center gap-4">
          <span class="hidden sm:inline">Gunakan tombol panah keyboard ◄ ► untuk berpindah slide</span>
          <span class="sm:hidden">Geser (swipe) layar ke kiri/kanan untuk berpindah</span>
        </div>
      </div>
    `;

    // Render Dots
    const dotsContainer = document.getElementById('slide-dots-container');
    if (dotsContainer) {
      dotsContainer.innerHTML = this.slides.map((_, i) => `
        <button onclick="if(window.SIMBA_SLIDES) window.SIMBA_SLIDES.goToSlide(${i})" class="w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === 0 ? 'bg-orange-500 w-6' : 'bg-zinc-700 hover:bg-zinc-500'}" title="Slide ${i + 1}"></button>
      `).join('');
    }

    const totalEl = document.getElementById('slide-number-total');
    if (totalEl) totalEl.innerText = String(this.slides.length).padStart(2, '0');
  }

  bindEvents() {
    const prevBtn = document.getElementById('btn-slide-prev');
    const nextBtn = document.getElementById('btn-slide-next');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());

    // Keyboard listener
    document.addEventListener('keydown', (e) => {
      const eduView = document.getElementById('view-education');
      if (eduView && eduView.classList.contains('active')) {
        if (e.key === 'ArrowRight') this.next();
        else if (e.key === 'ArrowLeft') this.prev();
      }
    });

    // Touch Swipe listener untuk Mobile
    const cardEl = this.container ? this.container.querySelector('.relative') : null;
    if (cardEl) {
      cardEl.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      cardEl.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleGesture();
      }, { passive: true });
    }
  }

  handleGesture() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) this.next();
      else this.prev();
    }
  }

  goToSlide(index) {
    if (!this.slides || index < 0 || index >= this.slides.length) return;
    this.currentIndex = index;

    const current = this.slides[index];
    const bodyEl = document.getElementById('slide-dynamic-content');
    const badgeEl = document.getElementById('slide-badge-category');
    const numEl = document.getElementById('slide-number-active');
    const barEl = document.getElementById('slide-progress-bar');
    const prevBtn = document.getElementById('btn-slide-prev');
    const nextBtn = document.getElementById('btn-slide-next');

    if (badgeEl) badgeEl.innerText = current.kategori;
    if (numEl) numEl.innerText = current.nomor;
    if (barEl) {
      const percentage = ((index + 1) / this.slides.length) * 100;
      barEl.style.width = `${percentage}%`;
    }

    if (prevBtn) prevBtn.disabled = (index === 0);
    if (nextBtn) nextBtn.disabled = (index === this.slides.length - 1);

    if (bodyEl) {
      bodyEl.classList.remove('view-fade-in');
      void bodyEl.offsetWidth;
      bodyEl.classList.add('view-fade-in');

      bodyEl.innerHTML = `
        <div class="mb-4">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">${current.judul}</h2>
          <p class="text-xs sm:text-sm text-orange-400 mt-1">${current.tagline}</p>
        </div>
        <div>
          ${current.konten_html}
        </div>
      `;
    }

    const dots = document.querySelectorAll('#slide-dots-container button');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.className = 'w-6 h-2.5 rounded-full bg-orange-500 transition-all duration-200';
      } else {
        dot.className = 'w-2.5 h-2.5 rounded-full bg-zinc-700 hover:bg-zinc-500 transition-all duration-200';
      }
    });
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }
}

window.SimbaSlidesEngine = SimbaSlidesEngine;
