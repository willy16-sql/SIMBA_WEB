/**
 * KONTEN MATERI EDUKASI DIGITAL SLIDES
 * Sumber: Materi Presentasi PPT Kelompok 2 SI-B - Bencana Gunung Berapi
 * Mata Kuliah Sistem Informasi Manajemen Bencana
 */

window.SIMBA_SLIDES_CONTENT = [
  {
    nomor: "01",
    kategori: "Pendahuluan",
    judul: "Indonesia di Cincin Api (Ring of Fire)",
    tagline: "Pertemuan lempeng tektonik yang melahirkan ratusan gunung api aktif",
    konten_html: `
      <div class="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
        <p>
          Indonesia merupakan salah satu negara dengan intensitas aktivitas gunung api tertinggi di dunia. Posisi geografis kepulauan Indonesia berada tepat di atas zona subduksi tiga lempeng tektonik utama bumi: <span class="text-amber-400 font-semibold">Lempeng Indo-Australia</span>, <span class="text-orange-400 font-semibold">Lempeng Eurasia</span>, dan <span class="text-red-400 font-semibold">Lempeng Pasifik</span>.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
            <div class="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-2">1</div>
            <h4 class="font-bold text-white text-sm mb-1">Aktivitas Vulkanik Tinggi</h4>
            <p class="text-xs text-zinc-400">Terdapat lebih dari 127 gunung api aktif di Indonesia yang terus dipantau secara visual dan seismik oleh PVMBG.</p>
          </div>
          <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
            <div class="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold mb-2">2</div>
            <h4 class="font-bold text-white text-sm mb-1">Risiko Bencana Besar</h4>
            <p class="text-xs text-zinc-400">Jutaan penduduk tinggal di lereng gunung api subur, sehingga kesiapsiagaan darurat dan mitigasi menjadi krusial.</p>
          </div>
          <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-2">3</div>
            <h4 class="font-bold text-white text-sm mb-1">Sistem Informasi SIMBA</h4>
            <p class="text-xs text-zinc-400">Menjembatani data teknis vulkanologi ke bahasa visual yang mudah dipahami masyarakat awam.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    nomor: "02",
    kategori: "Definisi",
    judul: "Definisi Bencana Gunung Berapi",
    tagline: "Pemahaman fundamental fenomena vulkanik dan konsekuensinya",
    konten_html: `
      <div class="space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
        <blockquote class="p-4 bg-orange-950/30 border-l-4 border-orange-500 rounded-r-xl text-zinc-200 italic font-medium">
          "Bencana gunung berapi adalah peristiwa yang terjadi akibat aktivitas vulkanik, terutama erupsi, yang dapat menimbulkan korban jiwa, kerusakan lingkungan, kerugian ekonomi, serta mengganggu kehidupan masyarakat secara luas."
        </blockquote>
        <p>
          Aktivitas vulkanik merupakan proses keluarnya magma, gas, dan material padat dari dalam perut bumi menuju ke permukaan. Erupsi dapat berlangsung secara:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <span class="inline-block px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">Efusif (Lelehan)</span>
            <p class="text-xs sm:text-sm text-zinc-300">Magma bersifat encer dengan kandungan gas relatif rendah, keluar sebagai aliran lava pijar yang merayap menuruni lereng (contoh: kubah lava Merapi).</p>
          </div>
          <div class="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <span class="inline-block px-2.5 py-1 rounded bg-red-500/20 text-red-300 text-xs font-bold mb-2">Eksplosif (Ledakan)</span>
            <p class="text-xs sm:text-sm text-zinc-300">Magma kental dengan tekanan gas terperangkap yang sangat tinggi meletus secara dahsyat, membentuk kolom abu vertikal puluhan kilometer (contoh: Kelud 2014, Ruang 2024).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    nomor: "03",
    kategori: "Penyebab Erupsi",
    judul: "4 Penyebab Gunung Berapi Meletus",
    tagline: "Dinamika internal litosfer dan magma yang memicu letusan",
    konten_html: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-zinc-300">
        <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/90 hover:border-orange-500/50 transition">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-7 h-7 rounded-lg bg-orange-600/30 text-orange-400 flex items-center justify-center font-bold text-xs">01</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Pergerakan Lempeng</h4>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400">Pergerakan dan penunjaman lempeng samudera ke bawah lempeng benua (subduksi) melelehkan batuan dan membentuk dapur magma cair bertekanan tinggi.</p>
        </div>
        <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/90 hover:border-orange-500/50 transition">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-7 h-7 rounded-lg bg-red-600/30 text-red-400 flex items-center justify-center font-bold text-xs">02</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Gempa Vulkanik</h4>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400">Peningkatan kegempaan vulkanik dalam (VA) dan dangkal (VB) yang berulang terdeteksi oleh seismograf menjadi pertanda retakan batuan saat magma mendesak naik.</p>
        </div>
        <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/90 hover:border-orange-500/50 transition">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-7 h-7 rounded-lg bg-amber-600/30 text-amber-400 flex items-center justify-center font-bold text-xs">03</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Peningkatan Tekanan Gas</h4>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400">Gas terlarut (H2O, CO2, SO2) dalam magma tidak dapat keluar karena tersumbat pipa kepundan, mengakibatkan akumulasi daya ledak dahsyat hingga sumbat kawah hancur.</p>
        </div>
        <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/90 hover:border-orange-500/50 transition">
          <div class="flex items-center gap-3 mb-2">
            <span class="w-7 h-7 rounded-lg bg-yellow-600/30 text-yellow-400 flex items-center justify-center font-bold text-xs">04</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Suhu Kawah Meningkat</h4>
          </div>
          <p class="text-xs sm:text-sm text-zinc-400">Kenaikan suhu kawah, pemanasan solfatara, dan pengeringan air danau kawah secara signifikan mencerminkan magma telah mencapai kedalaman sangat dangkal.</p>
        </div>
      </div>
    `
  },
  {
    nomor: "04",
    kategori: "Dampak Kebencanaan",
    judul: "Dampak Negatif & Positif Erupsi",
    tagline: "Dua sisi mata uang dari aktivitas vulkanik di kepulauan Indonesia",
    konten_html: `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
        <div class="bg-red-950/20 border border-red-900/40 p-4 rounded-xl">
          <h4 class="font-bold text-red-400 flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-red-500"></span> Dampak Langsung
          </h4>
          <ul class="space-y-2 text-zinc-300">
            <li>• Korban jiwa dan cedera luka bakar/trauma</li>
            <li>• Luncuran Awan Panas piroklastik (suhu >600°C)</li>
            <li>• Lelehan lava pijar merusak vegetasi & hunian</li>
            <li>• Lontaran bom dan kerikil vulkanik</li>
            <li>• Lepasan gas beracun (CO, SO2, H2S)</li>
          </ul>
        </div>
        <div class="bg-amber-950/20 border border-amber-900/40 p-4 rounded-xl">
          <h4 class="font-bold text-amber-400 flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span> Dampak Tidak Langsung
          </h4>
          <ul class="space-y-2 text-zinc-300">
            <li>• Gangguan pernapasan kronis (ISPA) akibat abu</li>
            <li>• Trauma psikologis & pengungsian massal</li>
            <li>• Kelumpuhan lalu lintas penerbangan udara</li>
            <li>• Bahaya sekunder: Banjir lahar hujan/lahar dingin</li>
            <li>• Kerusakan ekonomi perkebunan & infrastruktur</li>
          </ul>
        </div>
        <div class="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl">
          <h4 class="font-bold text-emerald-400 flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Dampak Positif
          </h4>
          <ul class="space-y-2 text-zinc-300">
            <li>• Abu vulkanik kaya hara menyuburkan tanah pertanian</li>
            <li>• Penghasil deposit tambang pasir dan belerang</li>
            <li>• Potensi energi panas bumi (geothermal)</li>
            <li>• Destinasi wisata geologi dan lanskap alam</li>
            <li>• Penguatan modal sosial dan gotong royong warga</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    nomor: "05",
    kategori: "Penanggulangan",
    judul: "5 Langkah Penanggulangan Bencana",
    tagline: "Protokol komprehensif penanganan krisis erupsi gunung berapi",
    konten_html: `
      <div class="space-y-3 text-zinc-300 text-xs sm:text-sm">
        <div class="flex items-start gap-3 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
          <div class="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-bold text-xs shrink-0">01</div>
          <div>
            <h5 class="font-bold text-white">Pemantauan Aktivitas Gunung Berapi 24 Jam Non-stop</h5>
            <p class="text-zinc-400 text-xs mt-0.5">Pengamatan visual teropong, seismograf digital real-time, sensor deformasi GPS, dan analisis kimia gas solfatara oleh pos pengamatan PVMBG.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
          <div class="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400 font-bold text-xs shrink-0">02</div>
          <div>
            <h5 class="font-bold text-white">Penetapan Status Tanggap Darurat Resmi</h5>
            <p class="text-zinc-400 text-xs mt-0.5">Penetapan level status resmi (Normal, Waspada, Siaga, Awas) secara terpadu oleh Kepala PVMBG dan aktivasi komando tanggap darurat BNPB/BPBD.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
          <div class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 font-bold text-xs shrink-0">03</div>
          <div>
            <h5 class="font-bold text-white">Melakukan Pemetaan Kawasan Rawan Bencana (KRB)</h5>
            <p class="text-zinc-400 text-xs mt-0.5">Penyusunan peta zonasi bahaya KRB I, II, dan III untuk menentukan batas radius steril, jalur evakuasi aman, serta lokasi pos pengungsian darurat.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
          <div class="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xs shrink-0">04</div>
          <div>
            <h5 class="font-bold text-white">Penyelidikan Vulkanologi Ilmiah (Geologi, Geofisika, Geokimia)</h5>
            <p class="text-zinc-400 text-xs mt-0.5">Kajian ilmiah terhadap sampel magma purba dan gas magmatik guna memprediksi karakter erupsi (apakah efusif atau eksplosif paroksismal).</p>
          </div>
        </div>
        <div class="flex items-start gap-3 p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
          <div class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs shrink-0">05</div>
          <div>
            <h5 class="font-bold text-white">Sosialisasi Rutin & Edukasi Warga Sekitar Gunung</h5>
            <p class="text-zinc-400 text-xs mt-0.5">Edukasi berkelanjutan bahkan di masa normal mengenai rambu bahaya, penyiapan tas siaga bencana, dan simulasi jalur evakuasi bersama satgas desa.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    nomor: "06",
    kategori: "Mitigasi",
    judul: "Mitigasi Struktural & Non-Struktural",
    tagline: "Kombinasi rekayasa fisik infrastruktur dan kesiapan kapasitas sosial warga",
    konten_html: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
        <div class="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/90">
          <div class="flex items-center gap-2 mb-3">
            <span class="p-1.5 rounded-lg bg-orange-500/20 text-orange-400 font-bold text-xs">A</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Mitigasi Struktural (Fisik)</h4>
          </div>
          <ul class="space-y-2.5 text-zinc-300">
            <li class="flex items-start gap-2">
              <span class="text-orange-400 font-bold">•</span>
              <span><strong>Pembangunan Sabo Dam:</strong> Bendung penahan lahar di hulu sungai guna mengendalikan aliran debris batu dan pasir sebelum masuk ke perkampungan.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-400 font-bold">•</span>
              <span><strong>Pemasangan Alat Sensor Kawah:</strong> Seismograf broadband, tiltmeter, GPS vulkanik geodetik, dan kamera thermal CCTV kawah.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-400 font-bold">•</span>
              <span><strong>Infrastruktur Jalur Evakuasi:</strong> Pengerasan aspal jalan lintas evakuasi, jembatan bailey darurat, dan plang rambu titik kumpul.</span>
            </li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/90">
          <div class="flex items-center gap-2 mb-3">
            <span class="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs">B</span>
            <h4 class="font-bold text-white text-sm sm:text-base">Mitigasi Non-Struktural (Sosial)</h4>
          </div>
          <ul class="space-y-2.5 text-zinc-300">
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">•</span>
              <span><strong>Edukasi & Simulasi (Drill) Berkala:</strong> Pelatihan simulasi evakuasi mandiri untuk kelompok rentan (lansia, anak-anak, ibu hamil).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">•</span>
              <span><strong>Sistem Peringatan Dini (EWS):</strong> Integrasi sirine peringatan dini berbasis radio komunitas dan aplikasi resmi MAGMA Indonesia.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-400 font-bold">•</span>
              <span><strong>Tata Ruang Berbasis KRB:</strong> Penegakan larangan permukiman permanen di zona KRB III dan pembentukan Desa Tangguh Bencana (Destana).</span>
            </li>
          </ul>
        </div>
      </div>
    `
  },
  {
    nomor: "07",
    kategori: "Studi Kasus 2000-2026",
    judul: "Pembelajaran Erupsi Era Modern (2000 - 2026)",
    tagline: "Merapi 2010, Sinabung, Kelud, Krakatau, hingga Lewotobi Laki-laki 2024-2026",
    konten_html: `
      <div class="space-y-3 text-xs sm:text-sm text-zinc-300">
        <div class="p-3.5 bg-orange-950/20 rounded-xl border border-orange-900/40">
          <div class="flex justify-between items-center mb-1">
            <h5 class="font-bold text-orange-300">Erupsi Gunung Merapi 2010 (Studi Kasus Utama PPT)</h5>
            <span class="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-bold">VEI 4</span>
          </div>
          <p class="text-zinc-300 text-xs leading-relaxed">
            Letusan eksplosif paroksismal Merapi 2010 membuktikan pentingnya perluasan radius evakuasi dinamis (dari 10 km menjadi 15 km lalu 20 km), menyelamatkan lebih dari 350.000 jiwa warga lereng Merapi melalui koordinasi terpadu PVMBG, BNPB, dan relawan lokal.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
            <h6 class="font-bold text-white text-xs mb-1">Sinabung (2010-2021) & Kelud (2014)</h6>
            <p class="text-zinc-400 text-xs">Pentingnya relokasi permanen warga dari zona merah piroklastik dan kesiapsiagaan menghadapi sebaran abu vulkanik lintas provinsi.</p>
          </div>
          <div class="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
            <h6 class="font-bold text-white text-xs mb-1">Lewotobi & Ruang (2024 - 2026)</h6>
            <p class="text-zinc-400 text-xs">Pembuktian efektivitas penetapan status Awas kilat dalam mencegah jatuhnya korban massal pada letusan paroksismal malam hari.</p>
          </div>
        </div>
        <div class="pt-2 text-center">
          <button onclick="window.SIMBA_APP.navigateTo('map')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-xs sm:text-sm hover:from-orange-500 hover:to-red-500 transition shadow-[0_0_20px_rgba(255,87,34,0.35)]">
            <span>Jelajahi Gunung di Peta Interaktif</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `
  }
];
