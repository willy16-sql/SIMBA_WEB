/**
 * SIMBA - DETAIL DRAWER CONTROLLER
 * Slide-over Drawer Panel Samping Kanan untuk Profil Lengkap Gunung Api
 * Menampilkan: Identitas, KRB, Riwayat Erupsi 2000-2026, 5 Langkah Penanggulangan, Mitigasi, dan Kontak
 */

class DetailDrawer {
  constructor(drawerId, backdropId) {
    this.drawer = document.getElementById(drawerId);
    this.backdrop = document.getElementById(backdropId);
    this.contentEl = document.getElementById('drawer-content');
    this.closeBtn = document.getElementById('drawer-close-btn');

    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    // Keyboard ESC untuk menutup drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open(volcanoId) {
    const v = window.SIMBA_VOLCANOES.find(item => item.id === volcanoId);
    if (!v || !this.drawer || !this.contentEl) return;

    this.renderContent(v);

    this.backdrop.classList.remove('hidden');
    this.drawer.classList.remove('hidden');
    this.drawer.classList.remove('slide-out-right');
    this.drawer.classList.add('slide-in-right');

    document.body.style.overflow = 'hidden'; // Kunci scroll latar belakang
  }

  close() {
    if (!this.drawer || this.drawer.classList.contains('hidden')) return;

    this.drawer.classList.remove('slide-in-right');
    this.drawer.classList.add('slide-out-right');

    setTimeout(() => {
      this.drawer.classList.add('hidden');
      if (this.backdrop) this.backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }, 280);
  }

  renderContent(v) {
    const statusBg = v.status.level === 4 ? 'bg-red-500/20 text-red-400 border-red-500/40' :
                     v.status.level === 3 ? 'bg-orange-500/20 text-orange-400 border-orange-500/40' :
                     v.status.level === 2 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' :
                                            'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';

    // Format riwayat letusan 2000-2026
    const riwayatHtml = v.riwayat_letusan && v.riwayat_letusan.length > 0
      ? v.riwayat_letusan.map(r => `
          <div class="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/90 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs">
                Tahun ${r.tahun}
              </span>
              <span class="text-xs text-zinc-400">${r.tanggal}</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">${r.ringkasan}</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
              <div class="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <span class="text-[10px] text-zinc-400 block">Korban Jiwa</span>
                <span class="font-bold text-sm text-red-400">${r.meninggal.toLocaleString('id-ID')}</span>
              </div>
              <div class="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <span class="text-[10px] text-zinc-400 block">Luka-luka</span>
                <span class="font-bold text-sm text-amber-400">${r.luka.toLocaleString('id-ID')}</span>
              </div>
              <div class="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <span class="text-[10px] text-zinc-400 block">Pengungsi</span>
                <span class="font-bold text-sm text-yellow-400">${r.mengungsi.toLocaleString('id-ID')}</span>
              </div>
              <div class="p-2 rounded-lg bg-zinc-950 border border-zinc-800/80">
                <span class="text-[10px] text-zinc-400 block">Rumah Rusak</span>
                <span class="font-bold text-sm text-zinc-300">${r.rumah_rusak.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div class="text-[11px] text-zinc-400 pt-1 border-t border-zinc-800/60 flex items-center justify-between">
              <span>Sumber: ${r.sumber}</span>
              <span class="text-zinc-400">Periode 2000-2026</span>
            </div>
          </div>
        `).join('')
      : `<p class="text-xs text-zinc-400 italic">Belum ada catatan letusan signifikan dalam kurun waktu 2000–2026.</p>`;

    // Format Ancaman
    const ancamanHtml = v.ancaman_bahaya.map(a => `
      <li class="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
        <span class="text-red-400 font-bold shrink-0">⚠️</span>
        <span>${a}</span>
      </li>
    `).join('');

    this.contentEl.innerHTML = `
      <!-- Header Profil Gunung -->
      <div class="p-6 border-b border-zinc-800 bg-gradient-to-b from-orange-950/20 to-transparent">
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${statusBg}">
            Level ${v.status.level}: Status ${v.status.label}
          </span>
          <span class="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs font-mono">Tipe ${v.tipe}</span>
          <span class="text-xs text-zinc-400">Pembaruan: ${v.status.tanggal_update}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-white font-heading">${v.nama}</h2>
        <p class="text-xs sm:text-sm text-zinc-400 mt-1 flex items-center gap-1.5">
          <svg class="w-4 h-4 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${v.lokasi.kabupaten}, ${v.lokasi.provinsi}
        </p>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="p-6 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-900/40 border-b border-zinc-800">
        <div class="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
          <span class="text-[10px] text-zinc-400 block uppercase font-medium">Elevasi</span>
          <span class="text-base font-bold text-white">${v.ketinggian_mdpl.toLocaleString('id-ID')} <span class="text-xs font-normal text-zinc-400">mdpl</span></span>
        </div>
        <div class="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
          <span class="text-[10px] text-zinc-400 block uppercase font-medium">Total Erupsi</span>
          <span class="text-base font-bold text-orange-400">${v.total_erupsi_tercatat}x</span>
        </div>
        <div class="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 col-span-2">
          <span class="text-[10px] text-zinc-400 block uppercase font-medium">Koordinat Geografis</span>
          <span class="text-xs font-mono font-semibold text-zinc-300 truncate block">${v.koordinat.lat}° S, ${v.koordinat.lng}° E</span>
        </div>
      </div>

      <!-- Tab Content Sections -->
      <div class="p-6 space-y-6">
        <!-- 1. Potensi Ancaman Bahaya & KRB -->
        <section class="space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2 font-heading">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            Potensi Bahaya & Kawasan Rawan Bencana (KRB)
          </h3>
          <ul class="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            ${ancamanHtml}
          </ul>
          <div class="grid grid-cols-1 gap-2 pt-1">
            <div class="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs">
              <span class="font-bold text-red-400 block mb-0.5">KRB III (Zona Sangat Berbahaya):</span>
              <p class="text-zinc-300">${v.kawasan_rawan_bencana.krb3}</p>
            </div>
            <div class="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs">
              <span class="font-bold text-amber-400 block mb-0.5">KRB II (Zona Waspada Menengah):</span>
              <p class="text-zinc-300">${v.kawasan_rawan_bencana.krb2}</p>
            </div>
            <div class="p-3 rounded-lg bg-yellow-950/20 border border-yellow-900/40 text-xs">
              <span class="font-bold text-yellow-400 block mb-0.5">KRB I (Zona Waspada Aliran Lahar):</span>
              <p class="text-zinc-300">${v.kawasan_rawan_bencana.krb1}</p>
            </div>
          </div>
        </section>

        <!-- 2. Riwayat Letusan 2000 - 2026 -->
        <section class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-white flex items-center gap-2 font-heading">
              <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              Riwayat Letusan Tercatat (2000 – 2026)
            </h3>
            <span class="text-[11px] text-zinc-400">BNPB / PVMBG</span>
          </div>
          <div class="space-y-3">
            ${riwayatHtml}
          </div>
        </section>

        <!-- 3. Panduan Mitigasi Khusus Warga Sekitar -->
        <section class="space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2 font-heading">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            Langkah Mitigasi & Kesiapsiagaan
          </h3>
          <div class="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-3 text-xs sm:text-sm text-zinc-300">
            <div>
              <h5 class="font-bold text-orange-400 mb-1">Sebelum Terjadi Erupsi:</h5>
              <p class="text-xs text-zinc-400">• Ketahui jalur evakuasi dan titik kumpul terdekat di desa Anda.<br>• Siapkan Tas Siaga Bencana di dekat pintu keluar rumah.<br>• Ikuti arahan resmi pos pengamatan PVMBG dan abaikan kabar hoaks.</p>
            </div>
            <div>
              <h5 class="font-bold text-red-400 mb-1">Saat Terjadi Erupsi:</h5>
              <p class="text-xs text-zinc-400">• Segera menjauhi radius bahaya yang telah ditetapkan pemerintah daerah.<br>• Gunakan masker penutup hidung & kacamata pelindung dari hujan abu vulkanik.<br>• Hindari lembah sungai dan lereng curam yang rawan awan panas dan lahar.</p>
            </div>
            <div>
              <h5 class="font-bold text-emerald-400 mb-1">Sesudah Erupsi:</h5>
              <p class="text-xs text-zinc-400">• Bersihkan atap rumah dari timbunan abu vulkanik yang tebal agar tidak runtuh.<br>• Tetap waspada terhadap banjir lahar dingin sekunder saat hujan lebat di puncak.</p>
            </div>
          </div>
        </section>

        <!-- 4. Checklist Tas Siaga Bencana Interaktif -->
        <section class="space-y-3">
          <h3 class="text-base font-bold text-white flex items-center gap-2 font-heading">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            Tas Siaga Bencana (Checklist Interaktif)
          </h3>
          <div class="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 space-y-2 text-xs text-zinc-300">
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Masker N95 / Masker bedah (minimal 3 buah per orang)</span>
            </label>
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Senter kecil + baterai cadangan</span>
            </label>
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Kotak P3K & obat-obatan pribadi rutin</span>
            </label>
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Dokumen penting terbungkus plastik kedap air (KTP, KK, Ijazah)</span>
            </label>
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Air minum kemasan & makanan siap saji bertahan 3 hari</span>
            </label>
            <label class="flex items-center gap-2.5 cursor-pointer hover:text-white">
              <input type="checkbox" class="rounded bg-zinc-800 border-zinc-700 text-orange-500 focus:ring-0">
              <span>Peluit darurat & power bank cadangan</span>
            </label>
          </div>
        </section>

        <!-- 5. Kontak Darurat Terkait Wilayah Ini -->
        <section class="space-y-3 pt-2">
          <h3 class="text-base font-bold text-white flex items-center gap-2 font-heading">
            <span class="w-2.5 h-2.5 rounded-full bg-red-600"></span>
            Kontak Posko & Darurat Terdekat
          </h3>
          <div class="p-4 rounded-xl bg-red-950/20 border border-red-900/50 space-y-3 text-xs">
            <div>
              <span class="text-[10px] text-zinc-400 block uppercase">Pos Pengamatan PVMBG:</span>
              <span class="font-semibold text-zinc-200 block">${v.kontak_lokal.pos_pengamatan}</span>
            </div>
            <div>
              <span class="text-[10px] text-zinc-400 block uppercase">BPBD Wilayah:</span>
              <span class="font-semibold text-zinc-200 block">${v.kontak_lokal.bpbd_terdekat}</span>
            </div>
            <div class="flex gap-2 pt-2">
              <a href="tel:115" class="flex-1 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-center transition flex items-center justify-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Call BASARNAS 115</span>
              </a>
              <a href="tel:117" class="flex-1 py-2 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-center transition flex items-center justify-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>Call BNPB 117</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}

window.DetailDrawer = DetailDrawer;
