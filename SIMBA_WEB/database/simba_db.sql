-- ============================================================================
-- DATABASE SIMBA: Sistem Informasi Bencana Gunung Berapi Indonesia
-- Versi: 1.0 (Fase 1 MVP)
-- Mata Kuliah: Sistem Informasi Manajemen Bencana (Kelompok 2 SI-B)
-- Kompatibel: MySQL 5.7+ / MariaDB (XAMPP phpMyAdmin)
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `simba_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `simba_db`;

-- ----------------------------------------------------------------------------
-- 1. TABEL: gunung_api
-- Menyimpan identitas, koordinat geografis, ketinggian, status PVMBG 2026, dan KRB
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `riwayat_letusan`;
DROP TABLE IF EXISTS `gunung_api`;

CREATE TABLE `gunung_api` (
  `id` VARCHAR(50) NOT NULL PRIMARY KEY,
  `nama` VARCHAR(100) NOT NULL,
  `nama_lain` VARCHAR(100) DEFAULT NULL,
  `tipe` CHAR(1) NOT NULL DEFAULT 'A',
  `kategori_aktif` TINYINT(1) NOT NULL DEFAULT 1,
  `ketinggian_mdpl` INT NOT NULL,
  `kabupaten` VARCHAR(150) NOT NULL,
  `provinsi` VARCHAR(100) NOT NULL,
  `pulau` VARCHAR(50) NOT NULL,
  `latitude` DECIMAL(10, 6) NOT NULL,
  `longitude` DECIMAL(10, 6) NOT NULL,
  `status_level` INT NOT NULL DEFAULT 1, -- 1: Normal, 2: Waspada, 3: Siaga, 4: Awas
  `status_label` VARCHAR(20) NOT NULL DEFAULT 'Normal',
  `status_badge_color` VARCHAR(20) NOT NULL DEFAULT 'emerald',
  `status_tanggal_update` VARCHAR(50) NOT NULL,
  `status_sumber` VARCHAR(100) NOT NULL DEFAULT 'PVMBG / MAGMA Indonesia',
  `erupsi_terakhir` VARCHAR(100) NOT NULL,
  `total_erupsi_tercatat` INT NOT NULL DEFAULT 0,
  `ancaman_bahaya` TEXT NOT NULL, -- Format JSON Array
  `krb3` TEXT NOT NULL,
  `krb2` TEXT NOT NULL,
  `krb1` TEXT NOT NULL,
  `kontak_pos_pengamatan` VARCHAR(255) DEFAULT NULL,
  `kontak_bpbd_terdekat` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 2. TABEL: riwayat_letusan
-- Rekam jejak bencana letusan era modern (Tahun 2000 - 2026)
-- ----------------------------------------------------------------------------
CREATE TABLE `riwayat_letusan` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `gunung_id` VARCHAR(50) NOT NULL,
  `tahun` INT NOT NULL,
  `tanggal` VARCHAR(100) NOT NULL,
  `meninggal` INT NOT NULL DEFAULT 0,
  `luka` INT NOT NULL DEFAULT 0,
  `mengungsi` INT NOT NULL DEFAULT 0,
  `rumah_rusak` INT NOT NULL DEFAULT 0,
  `fasilitas_rusak` INT NOT NULL DEFAULT 0,
  `ringkasan` TEXT NOT NULL,
  `sumber` VARCHAR(150) NOT NULL DEFAULT 'BNPB (DIBI) & PVMBG',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_riwayat_gunung` FOREIGN KEY (`gunung_id`) REFERENCES `gunung_api` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 3. TABEL: kontak_darurat
-- Kontak darurat respon cepat bencana nasional dan BPBD daerah
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `kontak_darurat`;

CREATE TABLE `kontak_darurat` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `kategori` VARCHAR(50) NOT NULL DEFAULT 'Nasional',
  `nama` VARCHAR(150) NOT NULL,
  `singkatan` VARCHAR(50) NOT NULL,
  `telepon` VARCHAR(50) NOT NULL,
  `telepon_alt` VARCHAR(50) DEFAULT NULL,
  `layanan` VARCHAR(150) NOT NULL,
  `lingkup` TEXT NOT NULL,
  `warna` VARCHAR(20) DEFAULT 'orange',
  `urutan` INT DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 4. TABEL: materi_edukasi
-- Materi presentasi edukasi vulkanologi dari PPT Kelompok 2 SI-B
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `materi_edukasi`;

CREATE TABLE `materi_edukasi` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nomor` VARCHAR(10) NOT NULL,
  `kategori` VARCHAR(50) NOT NULL,
  `judul` VARCHAR(150) NOT NULL,
  `tagline` VARCHAR(255) NOT NULL,
  `konten_html` MEDIUMTEXT NOT NULL,
  `urutan` INT NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- INSERT DATA: gunung_api (Status Resmi 2026)
-- ============================================================================

INSERT INTO `gunung_api` (`id`, `nama`, `nama_lain`, `tipe`, `kategori_aktif`, `ketinggian_mdpl`, `kabupaten`, `provinsi`, `pulau`, `latitude`, `longitude`, `status_level`, `status_label`, `status_badge_color`, `status_tanggal_update`, `status_sumber`, `erupsi_terakhir`, `total_erupsi_tercatat`, `ancaman_bahaya`, `krb3`, `krb2`, `krb1`, `kontak_pos_pengamatan`, `kontak_bpbd_terdekat`) VALUES
('merapi', 'Gunung Merapi', 'Mount Merapi', 'A', 1, 2968, 'Sleman, Magelang, Boyolali, Klaten', 'D.I. Yogyakarta & Jawa Tengah', 'Jawa', -7.540700, 110.445700, 3, 'Siaga', 'amber', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2024 - 2026 (Awan Panas Guguran Berkelanjutan)', 82, 
 '["Awan Panas Guguran (Wedhus Gembel)", "Lontaran Material Pijar", "Hujan Abu Vulkanik Lebat", "Lahar Hujan di Kali Gendol, Kali Woro, Kali Boyong, Kali Krasak"]',
 'Radius 3–7 km dari puncak: Kawasan yang selalu terancam awan panas, aliran lava, dan gas beracun. Dilarang dihuni.',
 'Radius 7–12 km: Berpotensi terlanda awan panas, lontaran batu pijar, dan lahar hujan saat letusan berskala besar.',
 'Radius bantaran sungai hilir: Berpotensi terlanda lahar hujan kiriman dari material vulkanik di lereng atas.',
 'Pos Pengamatan Gunung Merapi Kaliurang (0274-895123)', 'BPBD Kabupaten Sleman (0274-868551) / BPBD Jawa Tengah (024-7609300)'),

('semeru', 'Gunung Semeru', 'Mahameru', 'A', 1, 3676, 'Lumajang & Malang', 'Jawa Timur', 'Jawa', -8.107700, 112.922400, 3, 'Siaga', 'amber', '14 Januari 2026', 'PVMBG / MAGMA Indonesia', '2024 - 2026', 68,
 '["Awan Panas Guguran Besuk Kobokan", "Lontaran Bom Vulkanik Kawah Jonggring Saloko", "Aliran Lahar Dingin Sungai Leprak dan Kobokan", "Hujan Abu Lebat Sektor Tenggara"]',
 'Kawasan puncak hingga radius 5 km dan sektor tenggara sepanjang Besuk Kobokan sejauh 13 km dari puncak.',
 'Wilayah lereng tengah yang terancam lontaran batu dan aliran awan panas sekunder.',
 'Sepanjang daerah aliran sungai lahar dingin di hilir Kabupaten Lumajang.',
 'Pos Pengamatan Gunung Semeru Gunung Sawur, Candipuro (0334-881234)', 'BPBD Kabupaten Lumajang (0334-888117) / BPBD Jawa Timur (031-8550101)'),

('lewotobi', 'Gunung Lewotobi Laki-laki', 'Lewotobi', 'A', 1, 1584, 'Flores Timur', 'Nusa Tenggara Timur', 'Flores', -8.538600, 122.774500, 4, 'Awas', 'red', '16 Januari 2026', 'PVMBG / MAGMA Indonesia', '2024 - 2026', 29,
 '["Letusan Eksplosif Paroksismal", "Lontaran Batu Pijar Radius 7-9 km", "Hujan Abu Lebat Beracun", "Petir Vulkanik dan Aliran Lahar Hujan"]',
 'Radius 7–9 km dari kawah aktif: Zona evakuasi total tanpa aktivitas manusia.',
 'Radius 9–12 km: Wilayah terancam hujan abu lebat dan lontaran kerikil panas.',
 'Sungai-sungai yang berhulu di puncak Lewotobi rawan lahar hujan saat musim penghujan.',
 'Pos Pengamatan Lewotobi Desa Pululera, Wulanggitang', 'BPBD Flores Timur (0383-21444) / Satgas Posko Darurat NTT'),

('marapi', 'Gunung Marapi', 'Mount Marapi', 'A', 1, 2891, 'Agam & Tanah Datar', 'Sumatera Barat', 'Sumatera', -0.381100, 100.473600, 3, 'Siaga', 'amber', '12 Januari 2026', 'PVMBG / MAGMA Indonesia', '2023 - 2026', 54,
 '["Letusan Freatik dan Magmatik Mendadak", "Lontaran Material Pijar Kawah Verbeek", "Hujan Abu Vulkanik Pekat", "Banjir Lahar Dingin (Galodo) di Lembah Anai dan Bukittinggi"]',
 'Radius 4,5 km dari pusat kawah aktif Verbeek.',
 'Wilayah lembah dan pemukiman kaki gunung yang terancam hujan abu pekat.',
 'Daerah bantaran sungai yang dialiri material lahar dingin saat hujan lebat di puncak.',
 'Pos Pengamatan Gunung Marapi Bukittinggi (0752-32111)', 'BPBD Agam (0752-7627008) / BPBD Tanah Datar (0752-71000)'),

('sinabung', 'Gunung Sinabung', 'Mount Sinabung', 'A', 1, 2460, 'Karo', 'Sumatera Utara', 'Sumatera', 3.170000, 98.392000, 2, 'Waspada', 'yellow', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2021', 35,
 '["Kubah Lava Tak Stabil", "Awan Panas Guguran Sektor Timur-Tenggara", "Hujan Abu Silika Vulkanik", "Lahar Hujan Sungai Lau Borus"]',
 'Radius 3–5 km dari kawah puncak (Desa-desa zona merah telah direlokasi permanen).',
 'Radius 5–7 km yang terancam guguran awan panas berskala menengah.',
 'Bantaran sungai Lau Borus rawan lahar hujan.',
 'Pos Pengamatan Gunung Sinabung Simpang Empat, Karo', 'BPBD Kabupaten Karo (0628-20119) / Posko Tanggap Darurat Kabanjahe'),

('krakatau', 'Gunung Anak Krakatau', 'Anak Krakatau', 'A', 1, 157, 'Lampung Selatan', 'Lampung & Selat Sunda', 'Selat Sunda', -6.102100, 105.423000, 3, 'Siaga', 'amber', '15 Januari 2026', 'PVMBG / MAGMA Indonesia', '2023 - 2026', 60,
 '["Letusan Strombolian & Surtseyan", "Lontaran Material Pijar Radius 5 km", "Tsunami Akibat Longsoran Tubuh Gunung ke Laut (Flank Collapse)", "Gelombang Pasang di Pesisir Banten dan Lampung"]',
 'Seluruh pulau Anak Krakatau dan perairan dalam radius 5 km dilarang untuk didekati.',
 'Garis pantai Anyer, Carita, Labuan (Banten) dan Kalianda (Lampung) yang berisiko hempasan gelombang tsunami.',
 'Wilayah jalur pelayaran Selat Sunda.',
 'Pos Pengamatan Pasauran Anyer, Serang (0254-601444)', 'BPBD Banten (0254-8480300) / BPBD Lampung Selatan (0727-321113)'),

('kelud', 'Gunung Kelud', 'Mount Kelud', 'A', 1, 1731, 'Kediri, Blitar, Malang', 'Jawa Timur', 'Jawa', -7.930000, 112.308000, 1, 'Normal', 'emerald', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2014', 38,
 '["Letusan Eksplosif Plinian Cepat", "Hujan Abu Silika Lebat Menjangkau Ratusan Kilometer", "Lontaran Kerikil dan Bom Pijar", "Lahar Hujan di Sungai Brantas"]',
 'Radius 5 km dari danau kawah kawah aktif.',
 'Radius 5–10 km terancam lontaran batu dan hujan kerikil.',
 'Lembah aliran sungai Kali Bladak dan sekitarnya.',
 'Pos Pengamatan Kelud Sugihwaras, Ngancar, Kediri', 'BPBD Kabupaten Kediri (0354-689884) / BPBD Jawa Timur'),

('ruang', 'Gunung Ruang', 'Ruang Volcano', 'A', 1, 725, 'Kepulauan Siau Tagulandang Biaro (Sitaro)', 'Sulawesi Utara', 'Sulawesi', 2.301200, 125.370500, 3, 'Siaga', 'amber', '11 Januari 2026', 'PVMBG / MAGMA Indonesia', '2024', 21,
 '["Letusan Paroksismal Kolom Abu 19 km", "Petir Vulkanik Masif", "Potensi Tsunami Runtuhan Dinding Pulau ke Laut", "Hujan Batu Pijar Menghancurkan Rumah Pulau Tagulandang"]',
 'Seluruh pulau Gunung Ruang (radius 4 km) zona kosong evakuasi total.',
 'Pesisir barat Pulau Tagulandang yang terancam lontaran batu dan risiko tsunami.',
 'Area jalur transportasi laut kepulauan Sitaro.',
 'Pos Pengamatan Tagulandang, Sitaro', 'BPBD Kabupaten Sitaro (0432-21111) / BPBD Sulut (0431-862222)'),

('bromo', 'Gunung Bromo', 'Mount Bromo', 'A', 1, 2329, 'Probolinggo, Pasuruan, Malang, Lumajang', 'Jawa Timur', 'Jawa', -7.942500, 112.953000, 2, 'Waspada', 'yellow', '12 Januari 2026', 'PVMBG / MAGMA Indonesia', '2019', 56,
 '["Letusan Freatik dan Magmatik Berkala", "Lontaran Material Pijar dan Bom Vulkanik ke Lautan Pasir", "Hujan Abu Vulkanik Tajam Silikaan", "Gas Belerang Beracun (SO2) Konsentrasi Tinggi di Bibir Kawah"]',
 'Radius 1 km dari pusat kawah aktif (Lautan Pasir dekat tangga kawah).',
 'Kaldera Tengger yang terancam hujan abu vulkanik lebat.',
 'Desa-desa adat Tengger seperti Ngadisari, Cemoro Lawang, dan Tosari.',
 'Pos Pengamatan Gunung Bromo Ngadisari, Sukapura, Probolinggo', 'BPBD Kabupaten Probolinggo (0335-421113) / TNBTS Call Center'),

('agung', 'Gunung Agung', 'Mount Agung', 'A', 1, 3142, 'Karangasem', 'Bali', 'Bali', -8.343000, 115.508000, 1, 'Normal', 'emerald', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2019', 22,
 '["Awan Panas dan Lelehan Lava Kawah", "Lontaran Batu Pijar Radius 4-6 km", "Hujan Abu Menutup Ruang Udara Internasional", "Lahar Hujan Sungai Tukad Yeh Sah"]',
 'Radius 4 km dari kawah puncak Gunung Agung.',
 'Radius 4–6 km yang terancam hujan abu tebal dan lelehan lava.',
 'Aliran sungai yang berhulu di Gunung Agung (Tukad Yeh Sah, Tukad Belok).',
 'Pos Pengamatan Gunung Agung Rendang, Karangasem (0366-23111)', 'BPBD Kabupaten Karangasem (0363-22113) / BPBD Provinsi Bali (0361-245398)'),

('rinjani', 'Gunung Rinjani', 'Mount Rinjani & Barujari', 'A', 1, 3726, 'Lombok Utara, Lombok Timur, Lombok Tengah', 'Nusa Tenggara Barat', 'Lombok', -8.411000, 116.457000, 1, 'Normal', 'emerald', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2016', 18,
 '["Letusan Kerucut Gunung Barujari di Danau Segara Anak", "Limpasan Air Danau Kawah dan Banjir Lahar Panas", "Hujan Abu Vulkanik Mengganggu Wisata dan Penerbangan", "Longsor Dinding Kaldera"]',
 'Kawasan Danau Segara Anak dan kerucut aktif Anak Barujari dalam radius 1,5 km.',
 'Kaldera Rinjani dan jalur pendakian Senaru serta Sembalun.',
 'Daerah hilir Sungai Kokok Puteq.',
 'Pos Pengamatan Gunung Rinjani Sembalun, Lombok Timur', 'BPBD NTB (0370-631113) / Balai Taman Nasional Gunung Rinjani'),

('kerinci', 'Gunung Kerinci', 'Puncak Indrapura', 'A', 1, 3805, 'Kerinci & Solok Selatan', 'Jambi & Sumatera Barat', 'Sumatera', -1.697000, 101.264000, 2, 'Waspada', 'yellow', '14 Januari 2026', 'PVMBG / MAGMA Indonesia', '2023', 34,
 '["Letusan Abu dan Lontaran Bom Vulkanik Kawah Puncak", "Gas Beracun H2S dan SO2 di Bibir Kawah", "Hujan Abu Menyelimuti Perkebunan Teh Kayu Aro", "Lahar Hujan di Sungai-Sungai Hulu"]',
 'Radius 3 km dari kawah aktif puncak Kerinci (Dilarang ada aktivitas pendakian).',
 'Radius 3–5 km terancam hujan abu lebat.',
 'Area perkebunan Kayu Aro dan pemukiman kaki gunung.',
 'Pos Pengamatan Gunung Kerinci Kayu Aro, Kerinci (0748-357111)', 'BPBD Kabupaten Kerinci (0748-21010) / TNKS (Taman Nasional Kerinci Seblat)'),

('lokon', 'Gunung Lokon', 'Lokon-Empung', 'A', 1, 1580, 'Kota Tomohon', 'Sulawesi Utara', 'Sulawesi', 1.358000, 124.792000, 3, 'Siaga', 'amber', '12 Januari 2026', 'PVMBG / MAGMA Indonesia', '2023', 40,
 '["Letusan Eksplosif Kawah Tompaluan", "Lontaran Pijar dan Bom Vulkanik Radius 2,5 km", "Awan Panas Guguran Menuruni Lembah Sungai Pasah", "Hujan Abu Tajam Menyelimuti Kota Tomohon"]',
 'Radius 2,5 km dari kawah Tompaluan dilarang untuk beraktivitas.',
 'Lereng kaki gunung yang berbatasan langsung dengan pemukiman Kelurahan Kakaskasen.',
 'Area jalur jalan raya Tomohon-Manado.',
 'Pos Pengamatan Gunung Lokon Kakaskasen, Tomohon (0431-351111)', 'BPBD Kota Tomohon (0431-351000) / BPBD Sulawesi Utara'),

('gamalama', 'Gunung Gamalama', 'Puncak Ternate', 'A', 1, 1715, 'Kota Ternate', 'Maluku Utara', 'Ternate', 0.800000, 127.325000, 2, 'Waspada', 'yellow', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2018', 48,
 '["Letusan Freatik Kawah Utama", "Lontaran Abu Menyelimuti Seluruh Pulau Ternate", "Lahar Hujan (Banjir Bandang Material) Melalui Kali Tugurara", "Penutupan Bandara Sultan Babullah"]',
 'Radius 1,5 km dari kawah puncak Gamalama.',
 'Lereng pulau Ternate yang dihuni padat pemukiman.',
 'Sepanjang aliran sungai kering / kali mati yang berhulu di puncak.',
 'Pos Pengamatan Gunung Gamalama Sangaji, Ternate Utara (0921-312111)', 'BPBD Kota Ternate (0921-312112) / BPBD Maluku Utara'),

('tangkubanparahu', 'Gunung Tangkuban Parahu', 'Tangkuban Perahu', 'A', 1, 2084, 'Subang & Bandung Barat', 'Jawa Barat', 'Jawa', -6.759600, 107.609800, 1, 'Normal', 'emerald', '10 Januari 2026', 'PVMBG / MAGMA Indonesia', '2019', 26,
 '["Letusan Freatik Tiba-Tiba di Kawah Ratu", "Gas Beracun (H2S dan CO2) Terakumulasi di Dasar Kawah Upas dan Ratu", "Hujan Abu Vulkanik Menjangkau Objek Wisata", "Lumpur Panas"]',
 'Dasar dan bibir kawah aktif Kawah Ratu dan Kawah Upas dalam radius 500 meter.',
 'Kompleks objek wisata Tangkuban Parahu.',
 'Jalur jalan raya Subang-Lembang.',
 'Pos Pengamatan Tangkuban Parahu Cikole, Lembang (022-2786311)', 'BPBD Kabupaten Bandung Barat (022-82783111) / BPBD Jawa Barat');

-- ============================================================================
-- INSERT DATA: riwayat_letusan (Tahun 2000 - 2026)
-- ============================================================================

INSERT INTO `riwayat_letusan` (`gunung_id`, `tahun`, `tanggal`, `meninggal`, `luka`, `mengungsi`, `rumah_rusak`, `fasilitas_rusak`, `ringkasan`, `sumber`) VALUES
('merapi', 2024, 'Januari - Desember 2024', 0, 0, 450, 0, 0, 'Aktivitas vulkanik efusif tinggi dengan pembentukan kubah lava Barat Daya dan Tengah Kawah, memicu guguran awan panas sejauh 1,5–3 km ke arah Kali Bebeng dan Kali Krasak.', 'Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)'),
('merapi', 2023, '11 Maret 2023', 0, 0, 120, 0, 0, 'Runtuhnya sebagian kubah lava Barat Daya memicu rentetan awan panas guguran sejauh 4 km ke arah Kali Bebeng. Abu vulkanik menyelimuti wilayah Magelang dan sekitarnya.', 'BPPTKG / PVMBG'),
('merapi', 2010, '26 Oktober - November 2010', 353, 577, 350000, 3300, 86, 'Erupsi eksplosif paroksismal terbesar dalam satu abad terakhir. Kolom erupsi mencapai lebih dari 17 km, awan panas piroklastik meluncur sejauh 15 km menyusuri Sungai Gendol dan meluluhlantakkan Dusun Kinahrejo.', 'BNPB (DIBI) & PVMBG (Studi Kasus PPT Kelompok 2)'),
('merapi', 2006, 'Mei - Juni 2006', 2, 28, 22000, 45, 2, 'Aktivitas pembentukan kubah lava baru disusul awan panas guguran ke arah hulu Kali Gendol. Dua relawan gugur saat berlindung di bunker Kaliadem.', 'BPPTKG / BNPB'),

('semeru', 2022, '4 Desember 2022', 0, 14, 2489, 520, 12, 'Awan panas guguran meluncur sejauh 19 km dari puncak kawah Jonggring Saloko menyusuri Besuk Kobokan, bertepatan tepat satu tahun setelah erupsi besar 2021.', 'PVMBG & BNPB'),
('semeru', 2021, '4 Desember 2021', 51, 169, 10655, 1027, 34, 'Jebolnya kubah lava dipicu hujan intensitas ekstrem di puncak, menghasilkan awan panas guguran masif yang menimbun Dusun Curah Kobokan dan memutus Jembatan Gladak Perak.', 'BNPB (DIBI) & PVMBG'),
('semeru', 2020, '1 Desember 2020', 0, 3, 550, 12, 0, 'Guguran awan panas meluncur 11 km menuju Curah Kobokan diiringi lelehan lava pijar.', 'PVMBG'),

('lewotobi', 2024, '3 - 7 November 2024', 9, 63, 12900, 2384, 25, 'Erupsi eksplosif dahsyat pada tengah malam melontarkan bom batu vulkanik pijar sejauh 4 km yang menembus atap rumah warga di Desa Klatanlo dan Hokeng, membakar bangunan dan melumpuhkan bandara di Flores.', 'Badan Nasional Penanggulangan Bencana (BNPB) & PVMBG'),
('lewotobi', 2023, '23 Desember 2023', 0, 0, 1100, 0, 0, 'Peningkatan aktivitas freatik dan gempa vulkanik dalam memicu kepulan kolom abu setinggi 1.500 m di atas kawah.', 'PVMBG'),

('marapi', 2024, 'Mei 2024', 67, 102, 3400, 280, 18, 'Bencana banjir lahar dingin (galodo) menerjang Agam dan Tanah Datar dipicu endapan jutaan meter kubik material erupsi Marapi yang tersapu hujan ekstrem.', 'BNPB & Basarnas Padang'),
('marapi', 2023, '3 Desember 2023', 24, 12, 0, 0, 0, 'Erupsi eksplosif tiba-tiba tanpa sinyal seismik prekusor panjang melontarkan kolom abu setinggi 3.000 meter dan menghujani jalur pendakian dengan batu pijar.', 'PVMBG & BNPB'),
('marapi', 2014, 'Mei - Juni 2014', 0, 0, 0, 0, 0, 'Letusan abu vulkanik berkala mencapai ketinggian 1.000 meter di atas kawah.', 'PVMBG'),

('sinabung', 2021, 'Maret - Mei 2021', 0, 0, 2100, 45, 4, 'Rentetan kolom letusan abu setinggi 2.000–5.000 meter diiringi luncuran awan panas guguran sejauh 3.000 meter ke arah timur-tenggara.', 'PVMBG'),
('sinabung', 2014, '1 Februari 2014', 17, 3, 30117, 890, 22, 'Awan panas piroklastik meluncur cepat menerjang Desa Sukameriah di dalam zona bahaya 3 km yang menewaskan relawan dan wartawan.', 'BNPB (DIBI) & PVMBG'),
('sinabung', 2010, '27 Agustus 2010', 2, 18, 12000, 0, 0, 'Reaktivasi mendadak pertama kali setelah lebih dari 400 tahun tidur (dorman sejak 1600), memuntahkan kolom asap dan abu setinggi 1.500 m.', 'PVMBG / MAGMA Indonesia'),

('krakatau', 2023, 'November 2023', 0, 0, 0, 0, 0, 'Erupsi berkala melontarkan abu vulkanik setinggi 2.000 m di atas puncak, abu terbawa angin ke arah barat daya perairan Selat Sunda.', 'PVMBG'),
('krakatau', 2018, '22 Desember 2018', 437, 14059, 33719, 2752, 78, 'Kolapsnya lereng barat daya tubuh gunung (flank collapse seluas 64 hektar) ke dalam laut memicu gelombang tsunami vulkanik dahsyat setinggi 2–5 meter yang menerjang pesisir Banten dan Lampung tanpa peringatan gempa tektonik.', 'BMKG, BNPB, & PVMBG'),
('krakatau', 2012, 'September 2012', 0, 0, 0, 0, 0, 'Fase letusan strombolian berulang yang menambah ketinggian kerucut vulkanik pulau sebelum kolaps 2018.', 'PVMBG'),

('kelud', 2014, '13 Februari 2014', 7, 89, 100248, 19412, 145, 'Letusan eksplosif kolosal malam hari yang melontarkan 120-160 juta m³ material vulkanik setinggi 17 km. Hujan abu pekat menyelimuti Jawa Timur, Yogyakarta, Solo, hingga Bandung dan menutup 7 bandara internasional di Jawa.', 'BNPB (DIBI) & PVMBG'),
('kelud', 2007, 'November 2007', 0, 0, 35000, 0, 0, 'Erupsi efusif tenang non-eksplosif yang memunculkan kubah lava hitam besar (Anak Kelud) di tengah danau kawah, menggeser air danau kawah tanpa ledakan dahsyat.', 'PVMBG'),

('ruang', 2024, '17 - 30 April 2024', 0, 28, 12000, 3500, 42, 'Erupsi paroksismal eksplosif dengan pendaran lava dan petir vulkanik spektakuler. Kolom abu menembus ketinggian 19 km, memicu evakuasi darurat seluruh pulau Ruang dan penduduk Pulau Tagulandang serta penutupan Bandara Sam Ratulangi Manado.', 'PVMBG & BNPB'),
('ruang', 2002, '25 September 2002', 0, 0, 2500, 400, 6, 'Letusan eksplosif menghasilkan kolom abu setinggi 5.000 meter dan guguran piroklastik merusak vegetasi pulau.', 'PVMBG'),

('bromo', 2019, 'Februari - Maret 2019', 0, 0, 0, 0, 0, 'Erupsi abu vulkanik freatomagmatik mencapai ketinggian 1.200 meter dari kawah dan memicu gangguan penerbangan di Bandara Abdulrachman Saleh Malang.', 'PVMBG'),
('bromo', 2015, 'Desember 2015 - Januari 2016', 0, 0, 0, 0, 0, 'Aktivitas tremor menerus dengan hembusan abu vulkanik cokelat tebal yang berlangsung selama lebih dari 2 bulan.', 'PVMBG'),
('bromo', 2010, 'November 2010 - Januari 2011', 0, 0, 1200, 250, 8, 'Erupsi strombolian menyemburkan abu vulkanik ke lautan pasir, menutupi atap rumah warga Tengger dan menutup sementara Bandara Juanda Surabaya.', 'BNPB & PVMBG'),
('bromo', 2004, '8 Juni 2004', 2, 5, 0, 0, 0, 'Letusan freatik tiba-tiba di bibir kawah yang melontarkan batuan vulkanik dan menimpa wisatawan yang berada di dekat bibir kawah.', 'PVMBG'),

('agung', 2019, 'Maret - Mei 2019', 0, 0, 1800, 0, 0, 'Erupsi strombolian disertai lontaran lava pijar sejauh 2,5–3 km ke segala arah dan suara dentuman keras terdengar hingga Gianyar.', 'PVMBG'),
('agung', 2017, 'September - November 2017', 0, 0, 144389, 0, 0, 'Kenaikan status dramatis dari Normal ke Awas (Level IV) memicu evakuasi massal terbesar di Bali. Erupsi magmatik menghasilkan kolom abu setinggi 4.000 meter dan menutup Bandara Internasional I Gusti Ngurah Rai.', 'BNPB & PVMBG'),

('rinjani', 2016, '27 September 2016', 0, 0, 400, 0, 0, 'Erupsi anak kerucut Barujari melontarkan kolom abu setinggi 2.000 meter ke udara, memicu evakuasi ratusan pendaki mancanegara dari Danau Segara Anak.', 'PVMBG & BTNGR'),
('rinjani', 2015, 'Oktober - November 2015', 0, 0, 0, 0, 0, 'Aktivitas letusan abu menerus dari Barujari menutup Bandara Internasional Lombok dan Bandara Ngurah Rai Bali.', 'PVMBG'),
('rinjani', 2009, 'Mei 2009', 0, 0, 0, 0, 0, 'Erupsi efusif mengalirkan lava ke Danau Segara Anak dan menaikkan suhu air danau kawah.', 'PVMBG'),

('kerinci', 2023, 'Januari - Februari 2023', 0, 0, 0, 0, 0, 'Erupsi abu vulkanik kecokelatan tebal meluncur setinggi 1.200 meter di atas kawah, menaburkan abu ke Desa Pelompek dan Kayu Aro.', 'PVMBG'),
('kerinci', 2009, 'Maret - April 2009', 0, 0, 0, 0, 0, 'Peningkatan aktivitas freatik dengan semburan abu mencapai ketinggian 1.000 meter.', 'PVMBG'),

('lokon', 2023, 'November 2023', 0, 0, 0, 0, 0, 'Erupsi freatik melontarkan kolom abu setinggi 1.500 meter dari kawah Tompaluan disertai suara gemuruh keras.', 'PVMBG'),
('lokon', 2011, 'Juli 2011', 1, 4, 5200, 35, 2, 'Erupsi paroksismal memuntahkan lava pijar dan kolom abu setinggi 3.500 meter, memaksa evakuasi ribuan warga Kota Tomohon.', 'BNPB & PVMBG'),

('gamalama', 2018, '4 Oktober 2018', 0, 0, 350, 0, 0, 'Erupsi abu freatik setinggi 2.500 meter di atas kawah menaburi abu vulkanik ke wilayah Ternate Barat dan Utara.', 'PVMBG'),
('gamalama', 2011, '4 - 5 Desember 2011', 4, 19, 2100, 42, 3, 'Erupsi eksplosif malam hari disusul banjir lahar hujan di Kali Tugurara yang menerjang perumahan warga di Ternate.', 'BNPB (DIBI) & PVMBG'),

('tangkubanparahu', 2019, '26 Juli - September 2019', 0, 31, 0, 0, 12, 'Erupsi freatik mendadak melontarkan abu hitam setinggi 200 meter dari dasar Kawah Ratu saat banyak wisatawan berada di sekitar kawah. Objek wisata ditutup selama beberapa pekan.', 'PVMBG & BNPB'),
('tangkubanparahu', 2013, 'Februari - Oktober 2013', 0, 0, 0, 0, 0, 'Siklus erupsi freatik abu kecil dan peningkatan konsentrasi gas vulkanik di Kawah Ratu.', 'PVMBG');

-- ============================================================================
-- INSERT DATA: kontak_darurat
-- ============================================================================

INSERT INTO `kontak_darurat` (`kategori`, `nama`, `singkatan`, `telepon`, `telepon_alt`, `layanan`, `lingkup`, `warna`, `urutan`) VALUES
('Nasional', 'BASARNAS (Badan Nasional Pencarian & Pertolongan)', 'BASARNAS', '115', '(021) 65867510', '24 Jam Operasional', 'Evakuasi, Search and Rescue korban bencana', 'red', 1),
('Nasional', 'BNPB (Badan Nasional Penanggulangan Bencana)', 'BNPB', '117', '(021) 51010112', '24 Jam Call Center', 'Pusat Pengendalian Operasi (Pusdalops) Krisis Bencana', 'amber', 2),
('Nasional', 'PVMBG - Badan Geologi KESDM', 'PVMBG', '(022) 7272606', '0811-1400-117', 'Pusat Pemantauan Vulkanologi & Krisis Letusan', 'Layanan informasi status resmi gunung api MAGMA Indonesia', 'orange', 3),
('Nasional', 'Panggilan Darurat Terpadu Indonesia', 'Polisi / Medis', '112', '110', '24 Jam Bebas Pulsa', 'Bantuan kedaruratan umum, ambulans & kepolisian daerah', 'blue', 4),
('BPBD Daerah', 'BPBD D.I. Yogyakarta', 'BPBD DIY', '(0274) 555585', '0851-0555-585', 'Kawasan Merapi, Sleman, Kaliurang', 'Pusdalops PB DIY', 'zinc', 5),
('BPBD Daerah', 'BPBD Jawa Tengah', 'BPBD Jateng', '(024) 7609300', '0812-2525-2425', 'Merapi Klaten, Boyolali, Magelang', 'Posko Darurat Jateng', 'zinc', 6),
('BPBD Daerah', 'BPBD Jawa Timur', 'BPBD Jatim', '(031) 8550101', '0857-0101-0101', 'Semeru, Kelud, Bromo, Ijen', 'Pusdalops Bencana Jatim', 'zinc', 7),
('BPBD Daerah', 'BPBD Sumatera Barat', 'BPBD Sumbar', '(0751) 890720', '0811-6666-117', 'Kawasan Gunung Marapi, Singgalang, Talang', 'Pusdalops Bencana Sumbar', 'zinc', 8),
('BPBD Daerah', 'BPBD Nusa Tenggara Timur', 'BPBD NTT', '(0380) 821733', '0813-3944-4115', 'Kawasan Lewotobi Laki-laki, Ile Lewotolok', 'Posko Tanggap Darurat NTT', 'zinc', 9),
('BPBD Daerah', 'BPBD Sulawesi Utara', 'BPBD Sulut', '(0431) 862222', '0811-4322-22', 'Kawasan Gunung Ruang, Lokon, Soputan, Karangetang', 'Pusdalops PB Sitaro & Sulut', 'zinc', 10);
