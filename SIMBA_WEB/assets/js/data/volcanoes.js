/**
 * DATASET GUNUNG API INDONESIA (SIMBA - SISTEM INFORMASI BENCANA GUNUNG BERAPI INDONESIA)
 * Sumber Data Resmi: PVMBG (Pusat Vulkanologi dan Mitigasi Bencana Geologi - MAGMA Indonesia) & BNPB (DIBI)
 * Rentang Data Riwayat Letusan: Tahun 2000 - 2026
 * Status Vulkanik: Level I (Normal), Level II (Waspada), Level III (Siaga), Level IV (Awas)
 */

window.SIMBA_VOLCANOES = [
  {
    id: "merapi",
    nama: "Gunung Merapi",
    nama_lain: "Mount Merapi",
    tipe: "A", // Tipe A: Pernah erupsi sejak 1600
    kategori_aktif: true,
    ketinggian_mdpl: 2968,
    lokasi: {
      kabupaten: "Sleman, Magelang, Boyolali, Klaten",
      provinsi: "D.I. Yogyakarta & Jawa Tengah",
      pulau: "Jawa"
    },
    koordinat: { lat: -7.5407, lng: 110.4457 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2024 - 2026 (Awan Panas Guguran Berkelanjutan)",
    total_erupsi_tercatat: 82,
    ancaman_bahaya: [
      "Awan Panas Guguran (Wedhus Gembel)",
      "Lontaran Material Pijar",
      "Hujan Abu Vulkanik Lebat",
      "Lahar Hujan di Sungai-Sungai Hulu (Kali Gendol, Kali Woro, Kali Boyong, Kali Krasak)"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 3–7 km dari puncak: Kawasan yang selalu terancam awan panas, aliran lava, dan gas beracun. Dilarang dihuni.",
      krb2: "Radius 7–12 km: Berpotensi terlanda awan panas, lontaran batu pijar, dan lahar hujan saat letusan berskala besar.",
      krb1: "Radius bantaran sungai hilir: Berpotensi terlanda lahar hujan kiriman dari material vulkanik di lereng atas."
    },
    riwayat_letusan: [
      {
        tahun: 2024,
        tanggal: "Januari - Desember 2024",
        meninggal: 0,
        luka: 0,
        mengungsi: 450,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Aktivitas vulkanik efusif tinggi dengan pembentukan kubah lava Barat Daya dan Tengah Kawah, memicu guguran awan panas sejauh 1,5–3 km ke arah Kali Bebeng dan Kali Krasak.",
        sumber: "Balai Penyelidikan dan Pengembangan Teknologi Kebencanaan Geologi (BPPTKG)"
      },
      {
        tahun: 2023,
        tanggal: "11 Maret 2023",
        meninggal: 0,
        luka: 0,
        mengungsi: 120,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Runtuhnya sebagian kubah lava Barat Daya memicu rentetan awan panas guguran sejauh 4 km ke arah Kali Bebeng. Abu vulkanik menyelimuti wilayah Magelang dan sekitarnya.",
        sumber: "BPPTKG / PVMBG"
      },
      {
        tahun: 2010,
        tanggal: "26 Oktober - November 2010",
        meninggal: 353,
        luka: 577,
        mengungsi: 350000,
        rumah_rusak: 3300,
        fasilitas_rusak: 86,
        ringkasan: "Erupsi eksplosif paroksismal terbesar dalam satu abad terakhir. Kolom erupsi mencapai lebih dari 17 km, awan panas piroklastik meluncur sejauh 15 km menyusuri Sungai Gendol dan meluluhlantakkan Dusun Kinahrejo.",
        sumber: "BNPB (DIBI) & PVMBG (Studi Kasus PPT Kelompok 2)"
      },
      {
        tahun: 2006,
        tanggal: "Mei - Juni 2006",
        meninggal: 2,
        luka: 28,
        mengungsi: 22000,
        rumah_rusak: 45,
        fasilitas_rusak: 2,
        ringkasan: "Aktivitas pembentukan kubah lava baru disusul awan panas guguran ke arah hulu Kali Gendol. Dua relawan gugur saat berlindung di bunker Kaliadem.",
        sumber: "BPPTKG / BNPB"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Merapi Kaliurang (0274-895123)",
      bpbd_terdekat: "BPBD Kabupaten Sleman (0274-868551) / BPBD Jawa Tengah (024-7609300)"
    }
  },
  {
    id: "semeru",
    nama: "Gunung Semeru",
    nama_lain: "Mahameru",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 3676,
    lokasi: {
      kabupaten: "Lumajang & Malang",
      provinsi: "Jawa Timur",
      pulau: "Jawa"
    },
    koordinat: { lat: -8.1077, lng: 112.9224 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "14 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2024 - 2026",
    total_erupsi_tercatat: 68,
    ancaman_bahaya: [
      "Awan Panas Guguran Besuk Kobokan",
      "Lontaran Bom Vulkanik Kawah Jonggring Saloko",
      "Aliran Lahar Dingin Sungai Leprak dan Kobokan",
      "Hujan Abu Lebat Sektor Tenggara"
    ],
    kawasan_rawan_bencana: {
      krb3: "Kawasan puncak hingga radius 5 km dan sektor tenggara sepanjang Besuk Kobokan sejauh 13 km dari puncak.",
      krb2: "Wilayah lereng tengah yang terancam lontaran batu dan aliran awan panas sekunder.",
      krb1: "Sepanjang daerah aliran sungai lahar dingin di hilir Kabupaten Lumajang."
    },
    riwayat_letusan: [
      {
        tahun: 2022,
        tanggal: "4 Desember 2022",
        meninggal: 0,
        luka: 14,
        mengungsi: 2489,
        rumah_rusak: 520,
        fasilitas_rusak: 12,
        ringkasan: "Awan panas guguran meluncur sejauh 19 km dari puncak kawah Jonggring Saloko menyusuri Besuk Kobokan, bertepatan tepat satu tahun setelah erupsi besar 2021.",
        sumber: "PVMBG & BNPB"
      },
      {
        tahun: 2021,
        tanggal: "4 Desember 2021",
        meninggal: 51,
        luka: 169,
        mengungsi: 10655,
        rumah_rusak: 1027,
        fasilitas_rusak: 34,
        ringkasan: "Jebolnya kubah lava dipicu hujan intensitas ekstrem di puncak, menghasilkan awan panas guguran masif yang menimbun Dusun Curah Kobokan dan memutus Jembatan Gladak Perak.",
        sumber: "BNPB (DIBI) & PVMBG"
      },
      {
        tahun: 2020,
        tanggal: "1 Desember 2020",
        meninggal: 0,
        luka: 3,
        mengungsi: 550,
        rumah_rusak: 12,
        fasilitas_rusak: 0,
        ringkasan: "Guguran awan panas meluncur 11 km menuju Curah Kobokan diiringi lelehan lava pijar.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Semeru Gunung Sawur, Candipuro (0334-881234)",
      bpbd_terdekat: "BPBD Kabupaten Lumajang (0334-888117) / BPBD Jawa Timur (031-8550101)"
    }
  },
  {
    id: "lewotobi",
    nama: "Gunung Lewotobi Laki-laki",
    nama_lain: "Lewotobi",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 1584,
    lokasi: {
      kabupaten: "Flores Timur",
      provinsi: "Nusa Tenggara Timur",
      pulau: "Flores"
    },
    koordinat: { lat: -8.5386, lng: 122.7745 },
    status: {
      level: 4,
      label: "Awas",
      badge_color: "red",
      tanggal_update: "16 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2024 - 2026",
    total_erupsi_tercatat: 29,
    ancaman_bahaya: [
      "Letusan Eksplosif Paroksismal",
      "Lontaran Batu Pijar Radius 7-9 km",
      "Hujan Abu Lebat Beracun",
      "Petir Vulkanik dan Aliran Lahar Hujan"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 7–9 km dari kawah aktif: Zona evakuasi total tanpa aktivitas manusia.",
      krb2: "Radius 9–12 km: Wilayah terancam hujan abu lebat dan lontaran kerikil panas.",
      krb1: "Sungai-sungai yang berhulu di puncak Lewotobi rawan lahar hujan saat musim penghujan."
    },
    riwayat_letusan: [
      {
        tahun: 2024,
        tanggal: "3 - 7 November 2024",
        meninggal: 9,
        luka: 63,
        mengungsi: 12900,
        rumah_rusak: 2384,
        fasilitas_rusak: 25,
        ringkasan: "Erupsi eksplosif dahsyat pada tengah malam melontarkan bom batu vulkanik pijar sejauh 4 km yang menembus atap rumah warga di Desa Klatanlo dan Hokeng, membakar bangunan dan melumpuhkan bandara di Flores.",
        sumber: "Badan Nasional Penanggulangan Bencana (BNPB) & PVMBG"
      },
      {
        tahun: 2023,
        tanggal: "23 Desember 2023",
        meninggal: 0,
        luka: 0,
        mengungsi: 1100,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Peningkatan aktivitas freatik dan gempa vulkanik dalam memicu kepulan kolom abu setinggi 1.500 m di atas kawah.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Lewotobi Desa Pululera, Wulanggitang",
      bpbd_terdekat: "BPBD Flores Timur (0383-21444) / Satgas Posko Darurat NTT"
    }
  },
  {
    id: "marapi",
    nama: "Gunung Marapi",
    nama_lain: "Mount Marapi",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 2891,
    lokasi: {
      kabupaten: "Agam & Tanah Datar",
      provinsi: "Sumatera Barat",
      pulau: "Sumatera"
    },
    koordinat: { lat: -0.3811, lng: 100.4736 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "12 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2023 - 2026",
    total_erupsi_tercatat: 54,
    ancaman_bahaya: [
      "Letusan Freatik dan Magmatik Mendadak",
      "Lontaran Material Pijar Kawah Verbeek",
      "Hujan Abu Vulkanik Pekat",
      "Banjir Lahar Dingin (Galodo) di Lembah Anai dan Bukittinggi"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 4,5 km dari pusat kawah aktif Verbeek.",
      krb2: "Wilayah lembah dan pemukiman kaki gunung yang terancam hujan abu pekat.",
      krb1: "Daerah bantaran sungai yang dialiri material lahar dingin saat hujan lebat di puncak."
    },
    riwayat_letusan: [
      {
        tahun: 2024,
        tanggal: "Mei 2024",
        meninggal: 67,
        luka: 102,
        mengungsi: 3400,
        rumah_rusak: 280,
        fasilitas_rusak: 18,
        ringkasan: "Bencana banjir lahar dingin (galodo) menerjang Agam dan Tanah Datar dipicu endapan jutaan meter kubik material erupsi Marapi yang tersapu hujan ekstrem.",
        sumber: "BNPB & Basarnas Padang"
      },
      {
        tahun: 2023,
        tanggal: "3 Desember 2023",
        meninggal: 24,
        luka: 12,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi eksplosif tiba-tiba tanpa sinyal seismik prekusor panjang melontarkan kolom abu setinggi 3.000 meter dan menghujani jalur pendakian dengan batu pijar.",
        sumber: "PVMBG & BNPB"
      },
      {
        tahun: 2014,
        tanggal: "Mei - Juni 2014",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Letusan abu vulkanik berkala mencapai ketinggian 1.000 meter di atas kawah.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Marapi Bukittinggi (0752-32111)",
      bpbd_terdekat: "BPBD Agam (0752-7627008) / BPBD Tanah Datar (0752-71000)"
    }
  },
  {
    id: "sinabung",
    nama: "Gunung Sinabung",
    nama_lain: "Mount Sinabung",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 2460,
    lokasi: {
      kabupaten: "Karo",
      provinsi: "Sumatera Utara",
      pulau: "Sumatera"
    },
    koordinat: { lat: 3.1700, lng: 98.3920 },
    status: {
      level: 2,
      label: "Waspada",
      badge_color: "yellow",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2021",
    total_erupsi_tercatat: 35,
    ancaman_bahaya: [
      "Kubah Lava Tak Stabil",
      "Awan Panas Guguran Sektor Timur-Tenggara",
      "Hujan Abu Silika Vulkanik",
      "Lahar Hujan Sungai Lau Borus"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 3–5 km dari kawah puncak (Desa-desa zona merah telah direlokasi permanen).",
      krb2: "Radius 5–7 km yang terancam guguran awan panas berskala menengah.",
      krb1: "Bantaran sungai Lau Borus rawan lahar hujan."
    },
    riwayat_letusan: [
      {
        tahun: 2021,
        tanggal: "Maret - Mei 2021",
        meninggal: 0,
        luka: 0,
        mengungsi: 2100,
        rumah_rusak: 45,
        fasilitas_rusak: 4,
        ringkasan: "Rentetan kolom letusan abu setinggi 2.000–5.000 meter diiringi luncuran awan panas guguran sejauh 3.000 meter ke arah timur-tenggara.",
        sumber: "PVMBG"
      },
      {
        tahun: 2014,
        tanggal: "1 Februari 2014",
        meninggal: 17,
        luka: 3,
        mengungsi: 30117,
        rumah_rusak: 890,
        fasilitas_rusak: 22,
        ringkasan: "Awan panas piroklastik meluncur cepat menerjang Desa Sukameriah di dalam zona bahaya 3 km yang menewaskan relawan dan wartawan.",
        sumber: "BNPB (DIBI) & PVMBG"
      },
      {
        tahun: 2010,
        tanggal: "27 Agustus 2010",
        meninggal: 2,
        luka: 18,
        mengungsi: 12000,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Reaktivasi mendadak pertama kali setelah lebih dari 400 tahun tidur (dorman sejak 1600), memuntahkan kolom asap dan abu setinggi 1.500 m.",
        sumber: "PVMBG / MAGMA Indonesia"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Sinabung Simpang Empat, Karo",
      bpbd_terdekat: "BPBD Kabupaten Karo (0628-20119) / Posko Tanggap Darurat Kabanjahe"
    }
  },
  {
    id: "krakatau",
    nama: "Gunung Anak Krakatau",
    nama_lain: "Anak Krakatau",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 157,
    lokasi: {
      kabupaten: "Lampung Selatan",
      provinsi: "Lampung & Selat Sunda",
      pulau: "Selat Sunda"
    },
    koordinat: { lat: -6.1021, lng: 105.4230 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "15 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2023 - 2026",
    total_erupsi_tercatat: 60,
    ancaman_bahaya: [
      "Letusan Strombolian & Surtseyan",
      "Lontaran Material Pijar Radius 5 km",
      "Tsunami Akibat Longsoran Tubuh Gunung ke Laut (Flank Collapse)",
      "Gelombang Pasang di Pesisir Banten dan Lampung"
    ],
    kawasan_rawan_bencana: {
      krb3: "Seluruh pulau Anak Krakatau dan perairan dalam radius 5 km dilarang untuk didekati.",
      krb2: "Garis pantai Anyer, Carita, Labuan (Banten) dan Kalianda (Lampung) yang berisiko hempasan gelombang tsunami.",
      krb1: "Wilayah jalur pelayaran Selat Sunda."
    },
    riwayat_letusan: [
      {
        tahun: 2023,
        tanggal: "November 2023",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi berkala melontarkan abu vulkanik setinggi 2.000 m di atas puncak, abu terbawa angin ke arah barat daya perairan Selat Sunda.",
        sumber: "PVMBG"
      },
      {
        tahun: 2018,
        tanggal: "22 Desember 2018",
        meninggal: 437,
        luka: 14059,
        mengungsi: 33719,
        rumah_rusak: 2752,
        fasilitas_rusak: 78,
        ringkasan: "Kolapsnya lereng barat daya tubuh gunung (flank collapse seluas 64 hektar) ke dalam laut memicu gelombang tsunami vulkanik dahsyat setinggi 2–5 meter yang menerjang pesisir Banten dan Lampung tanpa peringatan gempa tektonik.",
        sumber: "BMKG, BNPB, & PVMBG"
      },
      {
        tahun: 2012,
        tanggal: "September 2012",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Fase letusan strombolian berulang yang menambah ketinggian kerucut vulkanik pulau sebelum kolaps 2018.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Pasauran Anyer, Serang (0254-601444)",
      bpbd_terdekat: "BPBD Banten (0254-8480300) / BPBD Lampung Selatan (0727-321113)"
    }
  },
  {
    id: "kelud",
    nama: "Gunung Kelud",
    nama_lain: "Mount Kelud",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 1731,
    lokasi: {
      kabupaten: "Kediri, Blitar, Malang",
      provinsi: "Jawa Timur",
      pulau: "Jawa"
    },
    koordinat: { lat: -7.9300, lng: 112.3080 },
    status: {
      level: 1,
      label: "Normal",
      badge_color: "emerald",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2014",
    total_erupsi_tercatat: 38,
    ancaman_bahaya: [
      "Letusan Eksplosif Plinian Cepat",
      "Hujan Abu Silika Lebat Menjangkau Ratusan Kilometer",
      "Lontaran Kerikil dan Bom Pijar",
      "Lahar Hujan di Sungai Brantas"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 5 km dari danau kawah kawah aktif.",
      krb2: "Radius 5–10 km terancam lontaran batu dan hujan kerikil.",
      krb1: "Lembah aliran sungai Kali Bladak dan sekitarnya."
    },
    riwayat_letusan: [
      {
        tahun: 2014,
        tanggal: "13 Februari 2014",
        meninggal: 7,
        luka: 89,
        mengungsi: 100248,
        rumah_rusak: 19412,
        fasilitas_rusak: 145,
        ringkasan: "Letusan eksplosif kolosal malam hari yang melontarkan 120-160 juta m³ material vulkanik setinggi 17 km. Hujan abu pekat menyelimuti Jawa Timur, Yogyakarta, Solo, hingga Bandung dan menutup 7 bandara internasional di Jawa.",
        sumber: "BNPB (DIBI) & PVMBG"
      },
      {
        tahun: 2007,
        tanggal: "November 2007",
        meninggal: 0,
        luka: 0,
        mengungsi: 35000,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi efusif tenang non-eksplosif yang memunculkan kubah lava hitam besar ('Anak Kelud') di tengah danau kawah, menggeser air danau kawah tanpa ledakan dahsyat.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Kelud Sugihwaras, Ngancar, Kediri",
      bpbd_terdekat: "BPBD Kabupaten Kediri (0354-689884) / BPBD Jawa Timur"
    }
  },
  {
    id: "ruang",
    nama: "Gunung Ruang",
    nama_lain: "Ruang Volcano",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 725,
    lokasi: {
      kabupaten: "Kepulauan Siau Tagulandang Biaro (Sitaro)",
      provinsi: "Sulawesi Utara",
      pulau: "Sulawesi"
    },
    koordinat: { lat: 2.3012, lng: 125.3705 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "11 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2024",
    total_erupsi_tercatat: 21,
    ancaman_bahaya: [
      "Letusan Paroksismal Kolom Abu 19 km",
      "Petir Vulkanik Masif",
      "Potensi Tsunami Runtuhan Dinding Pulau ke Laut",
      "Hujan Batu Pijar Menghancurkan Rumah Pulau Tagulandang"
    ],
    kawasan_rawan_bencana: {
      krb3: "Seluruh pulau Gunung Ruang (radius 4 km) zona kosong evakuasi total.",
      krb2: "Pesisir barat Pulau Tagulandang yang terancam lontaran batu dan risiko tsunami.",
      krb1: "Area jalur transportasi laut kepulauan Sitaro."
    },
    riwayat_letusan: [
      {
        tahun: 2024,
        tanggal: "17 - 30 April 2024",
        meninggal: 0,
        luka: 28,
        mengungsi: 12000,
        rumah_rusak: 3500,
        fasilitas_rusak: 42,
        ringkasan: "Erupsi paroksismal eksplosif dengan pendaran lava dan petir vulkanik spektakuler. Kolom abu menembus ketinggian 19 km, memicu evakuasi darurat seluruh pulau Ruang dan penduduk Pulau Tagulandang serta penutupan Bandara Sam Ratulangi Manado.",
        sumber: "PVMBG & BNPB"
      },
      {
        tahun: 2002,
        tanggal: "25 September 2002",
        meninggal: 0,
        luka: 0,
        mengungsi: 2500,
        rumah_rusak: 400,
        fasilitas_rusak: 6,
        ringkasan: "Letusan eksplosif menghasilkan kolom abu setinggi 5.000 meter dan guguran piroklastik merusak vegetasi pulau.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Tagulandang, Sitaro",
      bpbd_terdekat: "BPBD Kabupaten Sitaro (0432-21111) / BPBD Sulut (0431-862222)"
    }
  },
  {
    id: "bromo",
    nama: "Gunung Bromo",
    nama_lain: "Mount Bromo",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 2329,
    lokasi: {
      kabupaten: "Probolinggo, Pasuruan, Malang, Lumajang",
      provinsi: "Jawa Timur",
      pulau: "Jawa"
    },
    koordinat: { lat: -7.9425, lng: 112.9530 },
    status: {
      level: 2,
      label: "Waspada",
      badge_color: "yellow",
      tanggal_update: "12 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2019",
    total_erupsi_tercatat: 56,
    ancaman_bahaya: [
      "Letusan Freatik dan Magmatik Berkala",
      "Lontaran Material Pijar dan Bom Vulkanik ke Lautan Pasir",
      "Hujan Abu Vulkanik Tajam Silikaan",
      "Gas Belerang Beracun (SO2) Konsentrasi Tinggi di Bibir Kawah"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 1 km dari pusat kawah aktif (Lautan Pasir dekat tangga kawah).",
      krb2: "Kaldera Tengger yang terancam hujan abu vulkanik lebat.",
      krb1: "Desa-desa adat Tengger seperti Ngadisari, Cemoro Lawang, dan Tosari."
    },
    riwayat_letusan: [
      {
        tahun: 2019,
        tanggal: "Februari - Maret 2019",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi abu vulkanik freatomagmatik mencapai ketinggian 1.200 meter dari kawah dan memicu gangguan penerbangan di Bandara Abdulrachman Saleh Malang.",
        sumber: "PVMBG"
      },
      {
        tahun: 2015,
        tanggal: "Desember 2015 - Januari 2016",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Aktivitas tremor menerus dengan hembusan abu vulkanik cokelat tebal yang berlangsung selama lebih dari 2 bulan.",
        sumber: "PVMBG"
      },
      {
        tahun: 2010,
        tanggal: "November 2010 - Januari 2011",
        meninggal: 0,
        luka: 0,
        mengungsi: 1200,
        rumah_rusak: 250,
        fasilitas_rusak: 8,
        ringkasan: "Erupsi strombolian menyemburkan abu vulkanik ke lautan pasir, menutupi atap rumah warga Tengger dan menutup sementara Bandara Juanda Surabaya.",
        sumber: "BNPB & PVMBG"
      },
      {
        tahun: 2004,
        tanggal: "8 Juni 2004",
        meninggal: 2,
        luka: 5,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Letusan freatik tiba-tiba di bibir kawah yang melontarkan batuan vulkanik dan menimpa wisatawan yang berada di dekat bibir kawah.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Bromo Ngadisari, Sukapura, Probolinggo",
      bpbd_terdekat: "BPBD Kabupaten Probolinggo (0335-421113) / TNBTS Call Center"
    }
  },
  {
    id: "agung",
    nama: "Gunung Agung",
    nama_lain: "Mount Agung",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 3142,
    lokasi: {
      kabupaten: "Karangasem",
      provinsi: "Bali",
      pulau: "Bali"
    },
    koordinat: { lat: -8.3430, lng: 115.5080 },
    status: {
      level: 1,
      label: "Normal",
      badge_color: "emerald",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2019",
    total_erupsi_tercatat: 22,
    ancaman_bahaya: [
      "Awan Panas dan Lelehan Lava Kawah",
      "Lontaran Batu Pijar Radius 4-6 km",
      "Hujan Abu Menutup Ruang Udara Internasional",
      "Lahar Hujan Sungai Tukad Yeh Sah"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 4 km dari kawah puncak Gunung Agung.",
      krb2: "Radius 4–6 km yang terancam hujan abu tebal dan lelehan lava.",
      krb1: "Aliran sungai yang berhulu di Gunung Agung (Tukad Yeh Sah, Tukad Belok)."
    },
    riwayat_letusan: [
      {
        tahun: 2019,
        tanggal: "Maret - Mei 2019",
        meninggal: 0,
        luka: 0,
        mengungsi: 1800,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi strombolian disertai lontaran lava pijar sejauh 2,5–3 km ke segala arah dan suara dentuman keras terdengar hingga Gianyar.",
        sumber: "PVMBG"
      },
      {
        tahun: 2017,
        tanggal: "September - November 2017",
        meninggal: 0,
        luka: 0,
        mengungsi: 144389,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Kenaikan status dramatis dari Normal ke Awas (Level IV) memicu evakuasi massal terbesar di Bali. Erupsi magmatik menghasilkan kolom abu setinggi 4.000 meter dan menutup Bandara Internasional I Gusti Ngurah Rai.",
        sumber: "BNPB & PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Agung Rendang, Karangasem (0366-23111)",
      bpbd_terdekat: "BPBD Kabupaten Karangasem (0363-22113) / BPBD Provinsi Bali (0361-245398)"
    }
  },
  {
    id: "rinjani",
    nama: "Gunung Rinjani",
    nama_lain: "Mount Rinjani & Barujari",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 3726,
    lokasi: {
      kabupaten: "Lombok Utara, Lombok Timur, Lombok Tengah",
      provinsi: "Nusa Tenggara Barat",
      pulau: "Lombok"
    },
    koordinat: { lat: -8.4110, lng: 116.4570 },
    status: {
      level: 1,
      label: "Normal",
      badge_color: "emerald",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2016",
    total_erupsi_tercatat: 18,
    ancaman_bahaya: [
      "Letusan Kerucut Gunung Barujari di Danau Segara Anak",
      "Limpasan Air Danau Kawah dan Banjir Lahar Panas",
      "Hujan Abu Vulkanik Mengganggu Wisata dan Penerbangan",
      "Longsor Dinding Kaldera"
    ],
    kawasan_rawan_bencana: {
      krb3: "Kawasan Danau Segara Anak dan kerucut aktif Anak Barujari dalam radius 1,5 km.",
      krb2: "Kaldera Rinjani dan jalur pendakian Senaru serta Sembalun.",
      krb1: "Daerah hilir Sungai Kokok Puteq."
    },
    riwayat_letusan: [
      {
        tahun: 2016,
        tanggal: "27 September 2016",
        meninggal: 0,
        luka: 0,
        mengungsi: 400,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi anak kerucut Barujari melontarkan kolom abu setinggi 2.000 meter ke udara, memicu evakuasi ratusan pendaki mancanegara dari Danau Segara Anak.",
        sumber: "PVMBG & BTNGR"
      },
      {
        tahun: 2015,
        tanggal: "Oktober - November 2015",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Aktivitas letusan abu menerus dari Barujari menutup Bandara Internasional Lombok dan Bandara Ngurah Rai Bali.",
        sumber: "PVMBG"
      },
      {
        tahun: 2009,
        tanggal: "Mei 2009",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi efusif mengalirkan lava ke Danau Segara Anak dan menaikkan suhu air danau kawah.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Rinjani Sembalun, Lombok Timur",
      bpbd_terdekat: "BPBD NTB (0370-631113) / Balai Taman Nasional Gunung Rinjani"
    }
  },
  {
    id: "kerinci",
    nama: "Gunung Kerinci",
    nama_lain: "Puncak Indrapura",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 3805, // Gunung api tertinggi di Indonesia
    lokasi: {
      kabupaten: "Kerinci & Solok Selatan",
      provinsi: "Jambi & Sumatera Barat",
      pulau: "Sumatera"
    },
    koordinat: { lat: -1.6970, lng: 101.2640 },
    status: {
      level: 2,
      label: "Waspada",
      badge_color: "yellow",
      tanggal_update: "14 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2023",
    total_erupsi_tercatat: 34,
    ancaman_bahaya: [
      "Letusan Abu dan Lontaran Bom Vulkanik Kawah Puncak",
      "Gas Beracun H2S dan SO2 di Bibir Kawah",
      "Hujan Abu Menyelimuti Perkebunan Teh Kayu Aro",
      "Lahar Hujan di Sungai-Sungai Hulu"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 3 km dari kawah aktif puncak Kerinci (Dilarang ada aktivitas pendakian).",
      krb2: "Radius 3–5 km terancam hujan abu lebat.",
      krb1: "Area perkebunan Kayu Aro dan pemukiman kaki gunung."
    },
    riwayat_letusan: [
      {
        tahun: 2023,
        tanggal: "Januari - Februari 2023",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi abu vulkanik kecokelatan tebal meluncur setinggi 1.200 meter di atas kawah, menaburkan abu ke Desa Pelompek dan Kayu Aro.",
        sumber: "PVMBG"
      },
      {
        tahun: 2009,
        tanggal: "Maret - April 2009",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Peningkatan aktivitas freatik dengan semburan abu mencapai ketinggian 1.000 meter.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Kerinci Kayu Aro, Kerinci (0748-357111)",
      bpbd_terdekat: "BPBD Kabupaten Kerinci (0748-21010) / TNKS (Taman Nasional Kerinci Seblat)"
    }
  },
  {
    id: "lokon",
    nama: "Gunung Lokon",
    nama_lain: "Lokon-Empung",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 1580,
    lokasi: {
      kabupaten: "Kota Tomohon",
      provinsi: "Sulawesi Utara",
      pulau: "Sulawesi"
    },
    koordinat: { lat: 1.3580, lng: 124.7920 },
    status: {
      level: 3,
      label: "Siaga",
      badge_color: "amber",
      tanggal_update: "12 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2023",
    total_erupsi_tercatat: 40,
    ancaman_bahaya: [
      "Letusan Eksplosif Kawah Tompaluan",
      "Lontaran Pijar dan Bom Vulkanik Radius 2,5 km",
      "Awan Panas Guguran Menuruni Lembah Sungai Pasah",
      "Hujan Abu Tajam Menyelimuti Kota Tomohon"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 2,5 km dari kawah Tompaluan dilarang untuk beraktivitas.",
      krb2: "Lereng kaki gunung yang berbatasan langsung dengan pemukiman Kelurahan Kakaskasen.",
      krb1: "Area jalur jalan raya Tomohon-Manado."
    },
    riwayat_letusan: [
      {
        tahun: 2023,
        tanggal: "November 2023",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi freatik melontarkan kolom abu setinggi 1.500 meter dari kawah Tompaluan disertai suara gemuruh keras.",
        sumber: "PVMBG"
      },
      {
        tahun: 2011,
        tanggal: "Juli 2011",
        meninggal: 1,
        luka: 4,
        mengungsi: 5200,
        rumah_rusak: 35,
        fasilitas_rusak: 2,
        ringkasan: "Erupsi paroksismal memuntahkan lava pijar dan kolom abu setinggi 3.500 meter, memaksa evakuasi ribuan warga Kota Tomohon.",
        sumber: "BNPB & PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Lokon Kakaskasen, Tomohon (0431-351111)",
      bpbd_terdekat: "BPBD Kota Tomohon (0431-351000) / BPBD Sulawesi Utara"
    }
  },
  {
    id: "gamalama",
    nama: "Gunung Gamalama",
    nama_lain: "Puncak Ternate",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 1715,
    lokasi: {
      kabupaten: "Kota Ternate",
      provinsi: "Maluku Utara",
      pulau: "Ternate"
    },
    koordinat: { lat: 0.8000, lng: 127.3250 },
    status: {
      level: 2,
      label: "Waspada",
      badge_color: "yellow",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2018",
    total_erupsi_tercatat: 48,
    ancaman_bahaya: [
      "Letusan Freatik Kawah Utama",
      "Lontaran Abu Menyelimuti Seluruh Pulau Ternate",
      "Lahar Hujan (Banjir Bandang Material) Melalui Kali Tugurara",
      "Penutupan Bandara Sultan Babullah"
    ],
    kawasan_rawan_bencana: {
      krb3: "Radius 1,5 km dari kawah puncak Gamalama.",
      krb2: "Lereng pulau Ternate yang dihuni padat pemukiman.",
      krb1: "Sepanjang aliran sungai kering / kali mati yang berhulu di puncak."
    },
    riwayat_letusan: [
      {
        tahun: 2018,
        tanggal: "4 Oktober 2018",
        meninggal: 0,
        luka: 0,
        mengungsi: 350,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Erupsi abu freatik setinggi 2.500 meter di atas kawah menaburi abu vulkanik ke wilayah Ternate Barat dan Utara.",
        sumber: "PVMBG"
      },
      {
        tahun: 2011,
        tanggal: "4 - 5 Desember 2011",
        meninggal: 4,
        luka: 19,
        mengungsi: 2100,
        rumah_rusak: 42,
        fasilitas_rusak: 3,
        ringkasan: "Erupsi eksplosif malam hari disusul banjir lahar hujan di Kali Tugurara yang menerjang perumahan warga di Ternate.",
        sumber: "BNPB (DIBI) & PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Gunung Gamalama Sangaji, Ternate Utara (0921-312111)",
      bpbd_terdekat: "BPBD Kota Ternate (0921-312112) / BPBD Maluku Utara"
    }
  },
  {
    id: "tangkubanparahu",
    nama: "Gunung Tangkuban Parahu",
    nama_lain: "Tangkuban Perahu",
    tipe: "A",
    kategori_aktif: true,
    ketinggian_mdpl: 2084,
    lokasi: {
      kabupaten: "Subang & Bandung Barat",
      provinsi: "Jawa Barat",
      pulau: "Jawa"
    },
    koordinat: { lat: -6.7596, lng: 107.6098 },
    status: {
      level: 1,
      label: "Normal",
      badge_color: "emerald",
      tanggal_update: "10 Januari 2026",
      sumber: "PVMBG / MAGMA Indonesia"
    },
    erupsi_terakhir: "2019",
    total_erupsi_tercatat: 26,
    ancaman_bahaya: [
      "Letusan Freatik Tiba-Tiba di Kawah Ratu",
      "Gas Beracun (H2S dan CO2) Terakumulasi di Dasar Kawah Upas dan Ratu",
      "Hujan Abu Vulkanik Menjangkau Objek Wisata",
      "Lumpur Panas"
    ],
    kawasan_rawan_bencana: {
      krb3: "Dasar dan bibir kawah aktif Kawah Ratu dan Kawah Upas dalam radius 500 meter.",
      krb2: "Kompleks objek wisata Tangkuban Parahu.",
      krb1: "Jalur jalan raya Subang-Lembang."
    },
    riwayat_letusan: [
      {
        tahun: 2019,
        tanggal: "26 Juli - September 2019",
        meninggal: 0,
        luka: 31,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 12,
        ringkasan: "Erupsi freatik mendadak melontarkan abu hitam setinggi 200 meter dari dasar Kawah Ratu saat banyak wisatawan berada di sekitar kawah. Objek wisata ditutup selama beberapa pekan.",
        sumber: "PVMBG & BNPB"
      },
      {
        tahun: 2013,
        tanggal: "Februari - Oktober 2013",
        meninggal: 0,
        luka: 0,
        mengungsi: 0,
        rumah_rusak: 0,
        fasilitas_rusak: 0,
        ringkasan: "Siklus erupsi freatik abu kecil dan peningkatan konsentrasi gas vulkanik di Kawah Ratu.",
        sumber: "PVMBG"
      }
    ],
    kontak_lokal: {
      pos_pengamatan: "Pos Pengamatan Tangkuban Parahu Cikole, Lembang (022-2786311)",
      bpbd_terdekat: "BPBD Kabupaten Bandung Barat (022-82783111) / BPBD Jawa Barat"
    }
  }
];
