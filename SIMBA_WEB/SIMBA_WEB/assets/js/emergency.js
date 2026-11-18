/**
 * SIMBA - EMERGENCY CONTACTS MODAL CONTROLLER
 * Menampilkan jendela panggilan darurat terpadu (BASARNAS, BNPB, PVMBG, BPBD)
 */

class EmergencyModal {
  constructor(modalId, backdropId) {
    this.modal = document.getElementById(modalId);
    this.backdrop = document.getElementById(backdropId);
    this.container = document.getElementById('emergency-modal-content');

    this.init();
  }

  init() {
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    const closeBtn = document.getElementById('emergency-modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });

    this.renderContacts();
  }

  renderContacts() {
    if (!this.container || !window.SIMBA_EMERGENCY_CONTACTS) return;

    this.container.innerHTML = window.SIMBA_EMERGENCY_CONTACTS.map(group => `
      <div class="space-y-3">
        <h4 class="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-orange-500"></span>
          ${group.kategori}
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${group.daftar.map(c => `
            <div class="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition">
              <div>
                <div class="flex items-start justify-between gap-2 mb-1">
                  <h5 class="font-bold text-white text-xs sm:text-sm">${c.nama}</h5>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">${c.singkatan}</span>
                </div>
                <p class="text-[11px] text-zinc-400 mb-3">${c.lingkup}</p>
              </div>
              <div class="flex items-center gap-2">
                <a href="tel:${c.telepon.replace(/[^0-9+]/g, '')}" class="flex-1 py-2 px-3 rounded-lg bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>${c.telepon}</span>
                </a>
                <span class="text-[10px] text-zinc-400 block">${c.layanan}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('<hr class="border-zinc-800/80 my-2">');
  }

  open() {
    if (!this.modal || !this.backdrop) return;
    this.backdrop.classList.remove('hidden');
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal || !this.backdrop) return;
    this.modal.classList.add('hidden');
    this.backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

window.EmergencyModal = EmergencyModal;
