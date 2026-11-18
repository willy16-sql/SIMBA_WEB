# SIMBA (Sistem Informasi Bencana Gunung Berapi Indonesia) - Fase 1 (MVP)

**Mata Kuliah:** Sistem Informasi Manajemen Bencana  
**Tim Pengembang:** Kelompok 2 SI-B  
**Versi:** 1.0 (MVP)  
**Status Data:** Tahun 2000 – 2026 (Update Resmi PVMBG / MAGMA Indonesia & BNPB DIBI)

---

## 🌋 Gambaran Proyek

SIMBA adalah website geoportal dan informasi kebencanaan gunung api Indonesia yang dirancang dengan antarmuka modern bertema vulkanik (*Obsidian Dark Mode* berpadu aksen magma menyala). Platform ini menggabungkan visualisasi letusan interaktif, pemetaan sebaran gunung api berbasis Leaflet.js, serta materi edukasi kebencanaan yang diadopsi dari presentasi PPT Kelompok 2.

---

## ✨ Fitur Utama (Fase 1 MVP)

1. **Welcome Screen & Canvas Eruption Engine**:
   - Animasi partikel letusan kawah gunung api (*lava sparks, ash plume, radial ambient magma glow*) menggunakan HTML5 Canvas 2D Physics Engine (< 8 KB, 60 FPS, memuat < 1 detik).
   - *Lifecycle Management*: Otomatis menghentikan loop canvas saat masuk ke peta agar performa GPU/CPU 100% dialokasikan untuk Leaflet.
2. **Peta Interaktif Indonesia (Leaflet.js + MarkerCluster)**:
   - Basemap default *CartoDB Dark Matter* (tema gelap selaras dengan visual magma).
   - Layer control switcher: Peta Gelap, Citra Satelit (Esri), dan OpenStreetMap Standard.
   - Marker gunung dengan indikator warna status vulkanik (Level IV Awas merah berkedip, Level III Siaga oranye, Level II Waspada kuning, Level I Normal hijau).
   - Pengelompokan titik gunung (*clustering*) saat zoom out.
   - Filter cepat status di bilah kontrol atas (Semua, Awas, Siaga, Waspada, Normal) dan *Live Search Autocomplete*.
3. **Custom Popup & Slide-Over Detail Drawer (Panel Samping)**:
   - Klik marker menampilkan popup modern dengan tombol direct action *"Lihat Detail Gunung"*.
   - Detail gunung meluncur mulus dari sisi kanan layar (*right drawer*) tanpa reload halaman, menyajikan:
     - Identitas lengkap, elevasi mdpl, koordinat, tipe A/B.
     - Potensi bahaya & zonasi Kawasan Rawan Bencana (KRB I, II, III).
     - **Riwayat letusan tercatat (2000–2026)**: Korban jiwa, korban luka, pengungsi, kerusakan rumah/fasilitas, dan ringkasan peristiwa (termasuk Erupsi Merapi 2010, Semeru, Kelud, Sinabung, Lewotobi Laki-laki 2024-2026).
     - **Panduan Mitigasi**: Sebelum, saat, dan sesudah erupsi.
     - **Checklist Interaktif Tas Siaga Bencana**: Barang penting yang dapat dicentang langsung oleh pengguna.
     - Kontak pos pengamatan PVMBG dan BPBD wilayah setempat.
4. **Interactive Digital Slides (Edukasi Vulkanologi)**:
   - Diadaptasi lengkap dari materi presentasi PPT Kelompok 2 SI-B.
   - 7 Slide digital: Pendahuluan (Ring of Fire), Definisi Bencana, 4 Penyebab Erupsi, Dampak Negatif & Positif, 5 Langkah Penanggulangan, Mitigasi Struktural & Non-Struktural, dan Studi Kasus Era Modern (2000–2026).
   - Kontrol navigasi: Tombol Next/Prev, indikator dots & progress bar, tombol panah keyboard ($\leftarrow$ / $\rightarrow$), serta *touch swipe* di smartphone.
5. **Akses Cepat Panggilan Darurat (SOS Dial - F11 PRD)**:
   - Tombol mengambang (*floating SOS*) yang dapat diakses dari seluruh halaman.
   - Membuka modal panggilan darurat langsung ke BASARNAS (115), BNPB (117), PVMBG, Polisi/Medis (112), dan BPBD provinsi dalam waktu < 10 detik.

---

## 📁 Struktur Direktori & File

```
c:\xampp\htdocs\SIMBA_WEB\
├── index.html                    # Single entry point / Container aplikasi
├── README.md                     # Panduan pengujian lokal
├── assets\
│   ├── css\
│   │   └── custom.css            # Custom animations, volcanic glow, leaflet dark theme overrides
│   ├── images\
│   │   └── logo-simba.svg        # Logo vektor gunung berapi & magma SIMBA
│   └── js\
│       ├── app.js                # Core controller, navbar routing & SPA view switcher
│       ├── canvas-eruption.js    # Canvas 2D volcanic particle animation engine
│       ├── map.js                # Leaflet map instance, tiles, clustering, & popup handlers
│       ├── detail.js             # Slide-over drawer generator (KRB, Mitigasi, Riwayat 2000-2026)
│       ├── slides.js             # Interactive Digital Slides Engine (Swipe/keyboard/controls)
│       ├── emergency.js          # Quick floating emergency contacts modal & click-to-call
│       └── data\
│           ├── volcanoes.js          # Dataset lengkap gunung api (koordinat, status 2026, riwayat 2000-2026)
│           ├── slides-content.js     # Konten materi edukasi lengkap dari PPT Kelompok 2
│           └── emergency-contacts.js # Dataset kontak darurat (BASARNAS, BNPB, BPBD, PVMBG)
```

---

## 🗄️ Cara Import Database ke XAMPP phpMyAdmin

File database SQL telah disediakan di folder:
👉 **`database/simba_db.sql`**

Langkah-langkah import:
1. Buka **XAMPP Control Panel**, lalu pastikan **Apache** dan **MySQL** telah di-**Start**.
2. Buka browser dan buka phpMyAdmin di alamat:
   ```
   http://localhost/phpmyadmin/
   ```
3. Klik tab **Import** pada menu bar atas.
4. Klik tombol **Choose File** (Pilih Berkas), lalu pilih file:
   ```
   C:\xampp\htdocs\SIMBA_WEB\database\simba_db.sql
   ```
5. Gulir ke bawah dan klik tombol **Import** (atau **Kirim**).
6. Database `simba_db` beserta tabel `gunung_api`, `riwayat_letusan`, `kontak_darurat`, dan `materi_edukasi` akan otomatis terbuat dan terisi data lengkap status resmi 2026 dan riwayat erupsi 2000–2026.
7. Aplikasi web SIMBA akan secara otomatis mendeteksi dan mengambil data langsung dari MySQL via endpoint `api/get_volcanoes.php`!

---

## 🚀 Cara Menjalankan Website

### Opsi 1: Melalui Apache XAMPP (Direkomendasikan)
1. Buka **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **Apache**.
3. Buka browser web (Google Chrome, Edge, Firefox), lalu akses alamat:
   ```
   http://localhost/SIMBA_WEB/
   ```

### Opsi 2: Buka Langsung File HTML
Karena arsitektur frontend menggunakan client-side modular JavaScript tanpa dependensi build tools yang rumit, Anda juga dapat membuka langsung:
```
c:\xampp\htdocs\SIMBA_WEB\index.html
```
di browser mana pun.

---

## 📚 Sumber Data & Referensi
- **PVMBG (Pusat Vulkanologi dan Mitigasi Bencana Geologi)** / MAGMA Indonesia: Data pemantauan dan status resmi gunung api.
- **BNPB (Badan Nasional Penanggulangan Bencana)** / DIBI (Data Informasi Bencana Indonesia): Data korban, pengungsi, dan kerusakan bencana letusan 2000–2026.
- **Materi PPT Kelompok 2 SI-B**: Materi pendahuluan, penyebab erupsi, penanggulangan 5 langkah, mitigasi struktural/non-struktural, dan studi kasus Merapi.
