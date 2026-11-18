/**
 * DATASET GUNUNG API INDONESIA LENGKAP (SIMBA - FASE 1 MVP)
 * Mencakup Seluruh Titik Gunung Api Aktif (Tipe A) dan Dorman/Tidak Aktif (Tipe B & C)
 * Sebaran: Sumatera, Jawa, Bali, Nusa Tenggara, Sulawesi, Maluku
 * Sumber Data Resmi: PVMBG (Pusat Vulkanologi dan Mitigasi Bencana Geologi) & BNPB
 * Total Tercatat: 103 Gunung Api
 */

window.SIMBA_VOLCANOES = [
    {
        "id": "seulawah_agam",
        "nama": "Gunung Seulawah Agam",
        "nama_lain": "Mount Seulawah Agam",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1810,
        "lokasi": {
            "kabupaten": "Aceh Besar",
            "provinsi": "Aceh",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 5.448,
            "lng": 95.658
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1839 (Erupsi Freatik & Fumarola)",
        "total_erupsi_tercatat": 4,
        "ancaman_bahaya": [
            "Lontaran Material Pijar Kawah Heutsz",
            "Emisi Gas Asam Belerang",
            "Lahar Hujan di Sungai Hilir"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari Kawah Heutsz puncak.",
            "krb2": "Radius 1.5–3 km dari kawah.",
            "krb1": "Lembah sungai hilir di kaki utara dan barat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Seulawah Agam, Saree (0651) 82115",
            "bpbd_terdekat": "BPBD Aceh Besar (0651) 92112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "burni_telong",
        "nama": "Gunung Burni Telong",
        "nama_lain": "Burni Telong Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2600,
        "lokasi": {
            "kabupaten": "Bener Meriah",
            "provinsi": "Aceh",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 4.773,
            "lng": 96.82
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1924 (Emisi Abu & Kerikil)",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Hujan Abu Vulkanik",
            "Guguran Batuan Lereng",
            "Aliran Lahar Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Lembah aliran sungai lereng selatan."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Burni Telong, Lampahan (0643) 31115",
            "bpbd_terdekat": "BPBD Bener Meriah (0643) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "peuet_sague",
        "nama": "Gunung Peuet Sague",
        "nama_lain": "Mount Peuet Sague",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2801,
        "lokasi": {
            "kabupaten": "Pidie",
            "provinsi": "Aceh",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 4.914,
            "lng": 96.33
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "04 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2000 (Erupsi Freatomagmatik Abu)",
        "total_erupsi_tercatat": 6,
        "ancaman_bahaya": [
            "Lontaran Bom Vulkanik",
            "Hujan Abu Lebat di Hutan Lindung",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari kompleks 4 puncak kawah.",
            "krb2": "Radius 3–5 km.",
            "krb1": "Lembah Sungai Meureudu di hilir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Peuet Sague, Geumpang (0653) 71115",
            "bpbd_terdekat": "BPBD Pidie (0653) 21112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2000,
                "tanggal": "Desember 2000",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatomagmatik menghasilkan kolom abu setinggi 1000 meter di atas kawah.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "sinabung",
        "nama": "Gunung Sinabung",
        "nama_lain": "Mount Sinabung",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2460,
        "lokasi": {
            "kabupaten": "Karo",
            "provinsi": "Sumatera Utara",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 3.1694,
            "lng": 98.3925
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2021 (Erupsi Abu & Guguran Kubah Lava)",
        "total_erupsi_tercatat": 34,
        "ancaman_bahaya": [
            "Runtuhan Kubah Lava",
            "Awan Panas Guguran Sektor Selatan-Tenggara",
            "Lahar Hujan Sungai Laborbor"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari puncak dan sektoral 4.5 km sektor selatan-tenggara (Zona Merah Relokasi Permanen).",
            "krb2": "Radius 3–5 km.",
            "krb1": "Daerah aliran sungai lahar dingin di hilir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sinabung, Simpang Empat (0628) 20115",
            "bpbd_terdekat": "BPBD Karo (0628) 323112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2021,
                "tanggal": "Maret - Mei 2021",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 1200,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Awan panas guguran meluncur 3 km ke sektor timur-tenggara dengan kolom abu 2000 meter.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2014,
                "tanggal": "1 Februari 2014",
                "meninggal": 17,
                "luka": 3,
                "mengungsi": 30000,
                "rumah_rusak": 450,
                "fasilitas_rusak": 12,
                "ringkasan": "Awan panas guguran menyapu Desa Sukameriah di dalam zona bahaya 3 km saat warga meninjau ladang.",
                "sumber": "BNPB / PVMBG"
            }
        ]
    },
    {
        "id": "sibayak",
        "nama": "Gunung Sibayak",
        "nama_lain": "Mount Sibayak (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2212,
        "lokasi": {
            "kabupaten": "Karo",
            "provinsi": "Sumatera Utara",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 3.238,
            "lng": 98.504
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1881 (Aktivitas Solfatara Aktif)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Semburan Gas Belerang Pekat Solfatara",
            "Rembesan Uap Air Panas Bertekanan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawasan fumarola dan dasar kawah belerang.",
            "krb2": "Jalur pendakian bibir kawah.",
            "krb1": "Kawasan lereng bawah pemandian air panas Lau Sidebuk-debuk."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sibayak, Berastagi (0628) 91112",
            "bpbd_terdekat": "BPBD Karo (0628) 323112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "sorikmarapi",
        "nama": "Gunung Sorikmarapi",
        "nama_lain": "Mount Sorikmarapi",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2145,
        "lokasi": {
            "kabupaten": "Mandailing Natal",
            "provinsi": "Sumatera Utara",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": 0.686,
            "lng": 99.622
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "09 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1986 & Emisi Gas Berulang 2021-2024",
        "total_erupsi_tercatat": 8,
        "ancaman_bahaya": [
            "Emisi Gas Beracun H2S",
            "Letusan Freatik Danau Kawah",
            "Hujan Abu Asam"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah danau asam puncak.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Lembah sungai hilir di kaki barat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sorikmarapi, Sibanggor (0636) 21115",
            "bpbd_terdekat": "BPBD Mandailing Natal (0636) 32112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "marapi_sumbar",
        "nama": "Gunung Marapi",
        "nama_lain": "Mount Marapi West Sumatra",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2891,
        "lokasi": {
            "kabupaten": "Agam & Tanah Datar",
            "provinsi": "Sumatera Barat",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -0.3811,
            "lng": 100.4739
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2024 - 2026 (Erupsi Abu & Lahar Dingin Galodo)",
        "total_erupsi_tercatat": 67,
        "ancaman_bahaya": [
            "Erupsi Freatik Mendadak Tanpa Prekursor Jelas",
            "Lahar Dingin Bandang (Galodo)",
            "Hujan Abu Lebat",
            "Gas Beracun"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 4.5 km dari kawah Verbeek. Dilarang ada aktivitas manusia dan pendakian.",
            "krb2": "Radius 4.5–7 km dari kawah puncak.",
            "krb1": "Lembah dan bantaran sungai yang berhulu di puncak (Batang Anai, Batang Bengkawas)."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Marapi, Bukittinggi (0752) 21450",
            "bpbd_terdekat": "BPBD Agam (0752) 7627112 / BPBD Tanah Datar"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "11 Mei 2024",
                "meninggal": 67,
                "luka": 44,
                "mengungsi": 3800,
                "rumah_rusak": 320,
                "fasilitas_rusak": 18,
                "ringkasan": "Hujan lebat di puncak memicu bencana galodo (lahar dingin) bandang dahsyat menuruni lembah Agam dan Tanah Datar.",
                "sumber": "BNPB / PVMBG"
            },
            {
                "tahun": 2023,
                "tanggal": "3 Desember 2023",
                "meninggal": 24,
                "luka": 12,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatik eksplosif mendadak melontarkan abu 3000 meter dan material pijar saat 75 pendaki berada di dekat kawah.",
                "sumber": "PVMBG / BASARNAS"
            }
        ]
    },
    {
        "id": "singgalang",
        "nama": "Gunung Singgalang",
        "nama_lain": "Mount Singgalang (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2877,
        "lokasi": {
            "kabupaten": "Agam & Tanah Datar",
            "provinsi": "Sumatera Barat",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -0.392,
            "lng": 100.332
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Tidak ada catatan historis magmatik)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Longsoran Lereng Tebing Curam",
            "Banjir Bandang Lembah Anai"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak kawah mati Telaga Dewi.",
            "krb2": "Lereng terjal barat menghadap Lembah Anai.",
            "krb1": "Kawasan hilir jalan lintas Padang-Bukittinggi."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Marapi-Singgalang (0752) 21450",
            "bpbd_terdekat": "BPBD Agam (0752) 7627112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "tandikat",
        "nama": "Gunung Tandikat",
        "nama_lain": "Mount Tandikat",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2438,
        "lokasi": {
            "kabupaten": "Padang Pariaman & Agam",
            "provinsi": "Sumatera Barat",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -0.433,
            "lng": 100.317
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1924 (Letusan Freatik Kawah)",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Lontaran Abu Freatik",
            "Gas Belerang Beracun",
            "Longsor Lereng"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah utama Tandikat.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Lembah sungai hilir Padang Pariaman."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Tandikat, Padang Panjang (0752) 82115",
            "bpbd_terdekat": "BPBD Padang Pariaman (0751) 91112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "talang",
        "nama": "Gunung Talang",
        "nama_lain": "Mount Talang",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2597,
        "lokasi": {
            "kabupaten": "Solok",
            "provinsi": "Sumatera Barat",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -0.978,
            "lng": 100.679
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2007 (Erupsi Abu & Gas Freatik)",
        "total_erupsi_tercatat": 12,
        "ancaman_bahaya": [
            "Hujan Abu Vulkanik Menyelimuti Perkebunan Teh",
            "Lontaran Batu Pijar Kawah Gabuo"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari Kawah Gabuo.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan perkebunan teh lereng bawah Danau Kembar."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Talang, Batu Bajanjang (0755) 32115",
            "bpbd_terdekat": "BPBD Kabupaten Solok (0755) 20112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2005,
                "tanggal": "12 April 2005",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 25000,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatomagmatik hebat pasca gempa bumi Sumatera memicu pengungsian puluhan ribu warga Solok.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "kerinci",
        "nama": "Gunung Kerinci",
        "nama_lain": "Peak of Indrapura (Atap Sumatera)",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3805,
        "lokasi": {
            "kabupaten": "Kerinci & Solok Selatan",
            "provinsi": "Jambi & Sumatera Barat",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -1.697,
            "lng": 101.264
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2023 - 2024 (Erupsi Abu Vulkanik)",
        "total_erupsi_tercatat": 38,
        "ancaman_bahaya": [
            "Lontaran Bom Vulkanik & Pijar",
            "Hujan Abu Vulkanik Lebat",
            "Gas Beracun Danau Kawah"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari kawah aktif puncak. Dilarang melakukan pendakian melewati batas vegetasi.",
            "krb2": "Radius 3–6 km.",
            "krb1": "Lembah sungai hilir di Kersik Tuo dan Kayu Aro."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kerinci, Kayu Aro (0748) 351115",
            "bpbd_terdekat": "BPBD Kerinci (0748) 22112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2023,
                "tanggal": "Januari - Februari 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi berkala dengan semburan kolom abu mencapai 1200 meter di atas puncak.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "kunyit",
        "nama": "Gunung Kunyit",
        "nama_lain": "Mount Kunyit (Solfatara)",
        "tipe": "C",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2151,
        "lokasi": {
            "kabupaten": "Kerinci",
            "provinsi": "Jambi",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -2.261,
            "lng": 101.528
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Tidak diketahui sejarahnya (Lapangan Solfatara)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Gas Belerang Pekat",
            "Tanah Longsor Vulkanik"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Area solfatara kawah belerang.",
            "krb2": "Lereng tengah.",
            "krb1": "Kawasan hutan lindung TNKS."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kerinci (0748) 351115",
            "bpbd_terdekat": "BPBD Kerinci (0748) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "sumbing_sumatera",
        "nama": "Gunung Sumbing Sumatera",
        "nama_lain": "Mount Sumbing Jambi",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2507,
        "lokasi": {
            "kabupaten": "Merangin",
            "provinsi": "Jambi",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -2.414,
            "lng": 101.728
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1921 (Letusan Kawah Danau)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Erupsi Freatik",
            "Gas Belerang"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Lembah sungai hilir Jangkat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kerinci (0748) 351115",
            "bpbd_terdekat": "BPBD Merangin (0746) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "kaba",
        "nama": "Gunung Kaba",
        "nama_lain": "Bukit Kaba Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1952,
        "lokasi": {
            "kabupaten": "Rejang Lebong",
            "provinsi": "Bengkulu",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -3.52,
            "lng": 102.617
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2000 (Erupsi Freatik Kawah Lama)",
        "total_erupsi_tercatat": 14,
        "ancaman_bahaya": [
            "Erupsi Freatik Eksplosif",
            "Lontaran Batu Pijar",
            "Hujan Abu di Curup"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari Kawah Lama dan Kawah Baru.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan pemukiman lereng timur dan barat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kaba, Curup (0732) 23115",
            "bpbd_terdekat": "BPBD Rejang Lebong (0732) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "dempo",
        "nama": "Gunung Dempo",
        "nama_lain": "Mount Dempo Pagaralam",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3173,
        "lokasi": {
            "kabupaten": "Pagar Alam",
            "provinsi": "Sumatera Selatan",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -4.03,
            "lng": 103.13
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2023 - 2024 (Erupsi Freatik & Emisi Abu)",
        "total_erupsi_tercatat": 25,
        "ancaman_bahaya": [
            "Lontaran Material Piroklastik Danau Kawah",
            "Hujan Abu Pekat di Perkebunan Kopi & Teh",
            "Gas Beracun"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah aktif puncak.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan lembah sungai dan lereng bawah Kota Pagar Alam."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Dempo, Pagar Alam (0730) 621115",
            "bpbd_terdekat": "BPBD Pagar Alam (0730) 622112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2023,
                "tanggal": "Juli & Agustus 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatik melontarkan air danau kawah dan abu setinggi 2000 meter.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "belirang_beriti",
        "nama": "Gunung Belirang-Beriti",
        "nama_lain": "Mount Belirang (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1958,
        "lokasi": {
            "kabupaten": "Empat Lawang",
            "provinsi": "Sumatera Selatan",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -4.18,
            "lng": 103.35
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Solfatara Aktif)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Uap Air Panas Tekanan Tinggi",
            "Gas Solfatara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Pusat kawah solfatara.",
            "krb2": "Lereng tengah gunung.",
            "krb1": "Lembah sungai hilir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Dempo (0730) 621115",
            "bpbd_terdekat": "BPBD Empat Lawang 0812-3456-7890"
        },
        "riwayat_letusan": []
    },
    {
        "id": "suoh",
        "nama": "Kaldera Suoh",
        "nama_lain": "Suoh Volcanic Complex",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 502,
        "lokasi": {
            "kabupaten": "Lampung Barat",
            "provinsi": "Lampung",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -5.25,
            "lng": 104.27
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1933 & Erupsi Freatik Kecil Mei 2024",
        "total_erupsi_tercatat": 4,
        "ancaman_bahaya": [
            "Erupsi Freatik Semburan Lumpur Panas",
            "Gas H2S & CO2",
            "Patahan Sesar Semangko"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari pusat semburan kawah freatik Suoh.",
            "krb2": "Radius 1–3 km dasar kaldera.",
            "krb1": "Pemukiman lingkar kaldera."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Liwa (0728) 21115",
            "bpbd_terdekat": "BPBD Lampung Barat (0728) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "rajabasa",
        "nama": "Gunung Rajabasa",
        "nama_lain": "Mount Rajabasa (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1281,
        "lokasi": {
            "kabupaten": "Lampung Selatan",
            "provinsi": "Lampung",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -5.783,
            "lng": 105.625
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1863 (Fumarola & Solfatara)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Tanah Longsor ke Teluk Lampung",
            "Aktivitas Fumarola Air Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Bibir kawah puncak Rajabasa.",
            "krb2": "Lereng terjal menuju pesisir Kalianda.",
            "krb1": "Jalur pesisir pantai Kalianda."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Hargopeni (0727) 32115",
            "bpbd_terdekat": "BPBD Lampung Selatan (0727) 322112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "anak_krakatau",
        "nama": "Gunung Anak Krakatau",
        "nama_lain": "Anak Krakatau Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 157,
        "lokasi": {
            "kabupaten": "Lampung Selatan",
            "provinsi": "Lampung",
            "pulau": "Sumatera"
        },
        "koordinat": {
            "lat": -6.1021,
            "lng": 105.423
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "10 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2023 - 2026 (Erupsi Surtseyan & Strombolian)",
        "total_erupsi_tercatat": 110,
        "ancaman_bahaya": [
            "Lontaran Bom Vulkanik & Pijar",
            "Tsunami Akibat Longsoran Tubuh Gunung",
            "Hujan Abu Lebat di Selat Sunda"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 5 km dari kawah aktif kepulauan Krakatau.",
            "krb2": "Kawasan pesisir Selat Sunda dalam radius ancaman gelombang tsunami vulkanik.",
            "krb1": "Zona abu vulkanik pada jalur pelayaran komersial Selat Sunda."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Pasauran, Banten (0254) 601245 / Pos Hargopeni",
            "bpbd_terdekat": "BPBD Lampung Selatan (0727) 322112 / BPBD Banten"
        },
        "riwayat_letusan": [
            {
                "tahun": 2023,
                "tanggal": "Juni & November 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Rentetan letusan abu vulkanik mencapai tinggi 2000-3000 meter ke arah barat daya.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2018,
                "tanggal": "22 Desember 2018",
                "meninggal": 437,
                "luka": 14059,
                "mengungsi": 33759,
                "rumah_rusak": 2752,
                "fasilitas_rusak": 78,
                "ringkasan": "Runtuhnya 64 hektar lereng barat daya tubuh gunung ke laut memicu tsunami Selat Sunda tanpa didahului gempa tektonik.",
                "sumber": "BMKG / PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "pulosari",
        "nama": "Gunung Pulosari",
        "nama_lain": "Mount Pulosari (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1346,
        "lokasi": {
            "kabupaten": "Pandeglang",
            "provinsi": "Banten",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.342,
            "lng": 105.978
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kawah Fumarola Aktif)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Gas Solfatara",
            "Longsor Lereng Curam"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawah fumarola puncak.",
            "krb2": "Lereng tengah.",
            "krb1": "Kawasan pemukiman Menes & Mandalawangi."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Pasauran (0254) 601245",
            "bpbd_terdekat": "BPBD Pandeglang (0253) 201112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "karang",
        "nama": "Gunung Karang",
        "nama_lain": "Mount Karang Banten",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1778,
        "lokasi": {
            "kabupaten": "Pandeglang",
            "provinsi": "Banten",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.27,
            "lng": 106.046
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Tidak ada catatan letusan magmatik)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Musim Hujan",
            "Solfatara Lemah"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak gunung dan Kawah Welirang.",
            "krb2": "Lereng terjal atas.",
            "krb1": "Kaki bukit Pandeglang kota."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Pasauran (0254) 601245",
            "bpbd_terdekat": "BPBD Pandeglang (0253) 201112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "salak",
        "nama": "Gunung Salak",
        "nama_lain": "Mount Salak",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2211,
        "lokasi": {
            "kabupaten": "Bogor & Sukabumi",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.72,
            "lng": 106.73
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1938 (Erupsi Freatik Kawah Ratu)",
        "total_erupsi_tercatat": 11,
        "ancaman_bahaya": [
            "Gas Beracun Mematikan (CO2 & H2S) di Kawah Ratu",
            "Erupsi Freatik Tiba-tiba",
            "Longsor Punggung Jurang"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari Kawah Ratu dan Kawah Cikuluwung Putri.",
            "krb2": "Radius 1–3 km.",
            "krb1": "Lembah sungai hilir Ciapus dan Cisadane."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Salak, Bantar Kambing (0251) 875115",
            "bpbd_terdekat": "BPBD Kabupaten Bogor (0251) 866112 / BPBD Sukabumi"
        },
        "riwayat_letusan": []
    },
    {
        "id": "gede",
        "nama": "Gunung Gede",
        "nama_lain": "Mount Gede Pangrango",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2958,
        "lokasi": {
            "kabupaten": "Cianjur, Sukabumi, Bogor",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.783,
            "lng": 106.983
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1957 (Letusan Freatik Abu)",
        "total_erupsi_tercatat": 26,
        "ancaman_bahaya": [
            "Lontaran Material Pijar Puncak",
            "Awan Panas Aliran Lembah",
            "Gas Beracun Kawah Ratu & Kawah Wadon"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah aktif Gede.",
            "krb2": "Radius 2–5 km.",
            "krb1": "Lembah sungai hilir di Cipanas dan Cianjur."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gede, Ciloto Cipanas (0263) 511115",
            "bpbd_terdekat": "BPBD Cianjur (0263) 261112 / BPBD Sukabumi"
        },
        "riwayat_letusan": []
    },
    {
        "id": "pangrango",
        "nama": "Gunung Pangrango",
        "nama_lain": "Mount Pangrango (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 3019,
        "lokasi": {
            "kabupaten": "Bogor & Cianjur",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.77,
            "lng": 106.96
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Puncak Mandalawangi)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Musim Hujan",
            "Suhu Dingin Ekstrem Hipotermia"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawasan puncak Mandalawangi.",
            "krb2": "Lereng atas hutan lumut.",
            "krb1": "Lembah kaki gunung kawasan Puncak Bogor."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gede-Pangrango (0263) 511115",
            "bpbd_terdekat": "BPBD Bogor 112 / BPBD Cianjur"
        },
        "riwayat_letusan": []
    },
    {
        "id": "patuha",
        "nama": "Gunung Patuha",
        "nama_lain": "Mount Patuha (Kawah Putih)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2434,
        "lokasi": {
            "kabupaten": "Bandung",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.16,
            "lng": 107.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1600 (Kawah Putih & Kawah Saat)",
        "total_erupsi_tercatat": 2,
        "ancaman_bahaya": [
            "Konsentrasi Gas Belerang Pekat Kawah Putih",
            "Rembesan Gas Beracun"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Dasar kawah danau asam Kawah Putih.",
            "krb2": "Bibir kawah wisata.",
            "krb1": "Kawasan Ciwidey lereng bawah."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ciwidey (022) 5928115",
            "bpbd_terdekat": "BPBD Kabupaten Bandung (022) 85872112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "wayang_windu",
        "nama": "Gunung Wayang-Windu",
        "nama_lain": "Wayang Windu Geothermal Complex",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2182,
        "lokasi": {
            "kabupaten": "Bandung",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.21,
            "lng": 107.63
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Lapangan Panas Bumi Aktif)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Solfatara Bertekanan Uap Tinggi",
            "Longsor Lereng Curam"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Area manifestasi geotermal kawah puncak.",
            "krb2": "Lereng tengah Pangalengan.",
            "krb1": "Kawasan perkebunan teh Pangalengan."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Pangalengan (022) 591115",
            "bpbd_terdekat": "BPBD Kabupaten Bandung (022) 85872112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "malabar",
        "nama": "Gunung Malabar",
        "nama_lain": "Mount Malabar (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2343,
        "lokasi": {
            "kabupaten": "Bandung",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.13,
            "lng": 107.65
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Tidak ada catatan historis)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Musim Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Puntang & Malabar.",
            "krb2": "Lereng perkebunan teh.",
            "krb1": "Lembah sungai Banjaran."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Bandung (022) 7272606",
            "bpbd_terdekat": "BPBD Bandung (022) 85872112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "tangkuban_parahu",
        "nama": "Gunung Tangkuban Parahu",
        "nama_lain": "Tangkuban Parahu Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2084,
        "lokasi": {
            "kabupaten": "Subang & Bandung Barat",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.77,
            "lng": 107.6
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "10 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2019 (Erupsi Freatik Kawah Ratu)",
        "total_erupsi_tercatat": 19,
        "ancaman_bahaya": [
            "Erupsi Freatik Mendadak Tanpa Gempa Vulkanik Kuat",
            "Akumulasi Gas Beracun CO & CO2 Kawah Upas",
            "Hujan Abu di Area Wisata"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Dasar dan bibir Kawah Ratu, Kawah Upas, dan Kawah Domas.",
            "krb2": "Radius 1.5 km dari kompleks kawah.",
            "krb1": "Kawasan wisata Lembang dan Ciater."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Tangkuban Parahu, Cikole Lembang (022) 2786115",
            "bpbd_terdekat": "BPBD Bandung Barat (022) 82782112 / BPBD Subang"
        },
        "riwayat_letusan": [
            {
                "tahun": 2019,
                "tanggal": "26 Juli & Agustus 2019",
                "meninggal": 0,
                "luka": 31,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 14,
                "ringkasan": "Erupsi freatik eksplosif tiba-tiba di Kawah Ratu saat ribuan wisatawan berkunjung, melontarkan abu 200 meter.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "papandayan",
        "nama": "Gunung Papandayan",
        "nama_lain": "Mount Papandayan",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2665,
        "lokasi": {
            "kabupaten": "Garut",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.32,
            "lng": 107.73
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2002 (Erupsi Freatik & Longsoran Dinding Kawah)",
        "total_erupsi_tercatat": 15,
        "ancaman_bahaya": [
            "Longsoran Dinding Kawah Membuka Jalur Erupsi",
            "Lahar Dingin Sungai Cibeureum-Cimanuk",
            "Gas Solfatara Pekat"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kompleks Kawah Baru, Kawah Mas, Kawah Manuk.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Lembah Sungai Cibeureum hingga Cisurupan."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Papandayan, Cisurupan (0262) 577115",
            "bpbd_terdekat": "BPBD Garut (0262) 242112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2002,
                "tanggal": "11 - 20 November 2002",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 4500,
                "rumah_rusak": 140,
                "fasilitas_rusak": 8,
                "ringkasan": "Runtuhnya dinding kawah memicu erupsi freatik hebat dan lahar yang merendam pemukiman Cisurupan.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "guntur",
        "nama": "Gunung Guntur",
        "nama_lain": "Mount Guntur",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2249,
        "lokasi": {
            "kabupaten": "Garut",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.143,
            "lng": 107.84
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1847 (Rentetan Letusan Eksplosif Paroksismal)",
        "total_erupsi_tercatat": 21,
        "ancaman_bahaya": [
            "Letusan Plinian Skala Besar",
            "Lahar Letusan",
            "Awan Panas ke Arah Kota Tarogong"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak.",
            "krb2": "Radius 2–4.5 km.",
            "krb1": "Kawasan lereng bawah pemandian Cipanas Garut dan Tarogong."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Guntur, Tarogong Kaler (0262) 231115",
            "bpbd_terdekat": "BPBD Garut (0262) 242112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "galunggung",
        "nama": "Gunung Galunggung",
        "nama_lain": "Mount Galunggung",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2168,
        "lokasi": {
            "kabupaten": "Tasikmalaya",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.25,
            "lng": 108.058
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1982 - 1983 (Erupsi Plinian Paroksismal)",
        "total_erupsi_tercatat": 7,
        "ancaman_bahaya": [
            "Erupsi Danau Kawah",
            "Lahar Hujan Masif di Sungai Cikunir",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kaldera danau kawah dan radius 1.5 km.",
            "krb2": "Radius 1.5–5 km.",
            "krb1": "Kawasan bukaan kaldera timur lembah Sungai Cikunir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Galunggung, Sukaratu (0265) 331115",
            "bpbd_terdekat": "BPBD Tasikmalaya (0265) 322112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ciremai",
        "nama": "Gunung Ciremai",
        "nama_lain": "Mount Cereme (Atap Jawa Barat)",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3078,
        "lokasi": {
            "kabupaten": "Kuningan & Majalengka",
            "provinsi": "Jawa Barat",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -6.892,
            "lng": 108.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1937 (Erupsi Freatik)",
        "total_erupsi_tercatat": 10,
        "ancaman_bahaya": [
            "Erupsi Puncak Kawah Gede",
            "Awan Panas Lembah Curam",
            "Lahar Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari kawah ganda puncak.",
            "krb2": "Radius 3–6 km.",
            "krb1": "Kawasan lingkar kaki gunung Kuningan dan Majalengka."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ciremai, Cilimus Kuningan (0232) 611115",
            "bpbd_terdekat": "BPBD Kuningan (0232) 871112 / BPBD Majalengka"
        },
        "riwayat_letusan": []
    },
    {
        "id": "slamet",
        "nama": "Gunung Slamet",
        "nama_lain": "Mount Slamet",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3428,
        "lokasi": {
            "kabupaten": "Banyumas, Purbalingga, Pemalang, Tegal, Brebes",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.2424,
            "lng": 109.2081
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "09 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2014 & Peningkatan Kegempaan 2023-2025",
        "total_erupsi_tercatat": 42,
        "ancaman_bahaya": [
            "Lontaran Material Pijar Puncak",
            "Abu Vulkanik Mengarah ke Pemukiman Lereng",
            "Gas Beracun Solfatara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah aktif puncak.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Daerah aliran sungai di lereng selatan dan utara."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Slamet, Gambuhan Pemalang (0284) 3277115",
            "bpbd_terdekat": "BPBD Banyumas (0281) 684112 / BPBD Purbalingga"
        },
        "riwayat_letusan": [
            {
                "tahun": 2014,
                "tanggal": "Maret - September 2014",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 240,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Aktivitas letusan Strombolian menghasilkan lontaran lava pijar hingga 500 meter di atas kawah.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "dieng",
        "nama": "Kompleks Vulkanik Dieng",
        "nama_lain": "Dieng Volcanic Complex (Kawah Sileri)",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2565,
        "lokasi": {
            "kabupaten": "Banjarnegara & Wonosobo",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.2,
            "lng": 109.9
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2021 & 2023 (Erupsi Freatik Sileri & Gas CO2 Timbang)",
        "total_erupsi_tercatat": 31,
        "ancaman_bahaya": [
            "Gas Beracun Tak Berwarna/Bau (CO2 Murni) Kawah Timbang",
            "Semburan Lumpur Panas & Freatik Kawah Sileri",
            "Longsor Lereng"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari Kawah Sileri dan Kawah Timbang.",
            "krb2": "Dataran tinggi Dieng Kulon & Wetan.",
            "krb1": "Lembah sungai hilir Kali Tulis."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Dieng, Karangtengah Banjarnegara (0286) 334115",
            "bpbd_terdekat": "BPBD Banjarnegara (0286) 591112 / BPBD Wonosobo"
        },
        "riwayat_letusan": [
            {
                "tahun": 2021,
                "tanggal": "29 April 2021",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatik Kawah Sileri menyemburkan lumpur panas setinggi 200 meter dan meluber ke jalan desa.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 1979,
                "tanggal": "20 Februari 1979 (Sinila)",
                "meninggal": 149,
                "luka": 0,
                "mengungsi": 17000,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Tragedi pelepasan gas CO2 murni tanpa bau dari Kawah Sinila & Timbang menewaskan 149 warga yang berusaha mengungsi.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "sindoro",
        "nama": "Gunung Sindoro",
        "nama_lain": "Mount Sundoro",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3150,
        "lokasi": {
            "kabupaten": "Temanggung & Wonosobo",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.3,
            "lng": 109.992
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2011 - 2012 (Erupsi Freatik Abu)",
        "total_erupsi_tercatat": 13,
        "ancaman_bahaya": [
            "Erupsi Freatik Puncak",
            "Lontaran Batu Pijar Kawah",
            "Gas Belerang"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak.",
            "krb2": "Radius 2–5 km.",
            "krb1": "Kawasan lereng Kledung dan Sigedang."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sindoro-Sumbing, Gentingsari (0298) 591115",
            "bpbd_terdekat": "BPBD Temanggung (0298) 491112 / BPBD Wonosobo"
        },
        "riwayat_letusan": []
    },
    {
        "id": "sumbing_jawa",
        "nama": "Gunung Sumbing Jawa",
        "nama_lain": "Mount Sumbing Central Java",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3371,
        "lokasi": {
            "kabupaten": "Magelang, Temanggung, Wonosobo",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.384,
            "lng": 110.07
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1730 (Erupsi Magmatik Terakhir)",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Fumarola Aktif Kawah Puncak",
            "Kebakaran Hutan Musim Kemarau",
            "Longsor Tebing Kawah"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan lereng bawah Kaliangkrik dan Garung."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sumbing, Kledung (0298) 591115",
            "bpbd_terdekat": "BPBD Magelang (0293) 782112 / BPBD Temanggung"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ungaran",
        "nama": "Gunung Ungaran",
        "nama_lain": "Mount Ungaran (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2050,
        "lokasi": {
            "kabupaten": "Semarang",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.18,
            "lng": 110.33
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Solfatara Gedong Songo)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Gas Solfatara Kawah Gedong Songo",
            "Tanah Longsor Musim Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Botak & Kawah Gedong Songo.",
            "krb2": "Lereng Bandungan.",
            "krb1": "Kawasan hilir Kota Ungaran dan Ambarawa."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Semarang (024) 7601115",
            "bpbd_terdekat": "BPBD Kabupaten Semarang (024) 6921112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "telomoyo",
        "nama": "Gunung Telomoyo",
        "nama_lain": "Mount Telomoyo (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1894,
        "lokasi": {
            "kabupaten": "Magelang & Semarang",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.368,
            "lng": 110.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Sisa Kaldera Purba)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Lereng Terjal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak antena Telomoyo.",
            "krb2": "Lereng jurang arah Danau Rawa Pening.",
            "krb1": "Kaki bukit Grabag."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Magelang (0293) 361115",
            "bpbd_terdekat": "BPBD Magelang (0293) 782112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "merbabu",
        "nama": "Gunung Merbabu",
        "nama_lain": "Mount Merbabu (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 3145,
        "lokasi": {
            "kabupaten": "Magelang, Boyolali, Semarang",
            "provinsi": "Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.455,
            "lng": 110.44
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1797 (Erupsi Freatik Kawah Kendeng)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Kebakaran Padang Sabana Musim Kemarau",
            "Longsor Punggung Bukit Selo"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Kenteng Songo, Triangulasi, dan Kawah Kendeng.",
            "krb2": "Sabana lereng atas.",
            "krb1": "Kawasan Selo, Kopeng, dan Suwanting."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Selo Boyolali (0276) 321115",
            "bpbd_terdekat": "BPBD Boyolali (0276) 322112 / BPBD Magelang"
        },
        "riwayat_letusan": []
    },
    {
        "id": "merapi",
        "nama": "Gunung Merapi",
        "nama_lain": "Mount Merapi",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2968,
        "lokasi": {
            "kabupaten": "Sleman, Magelang, Boyolali, Klaten",
            "provinsi": "D.I. Yogyakarta & Jawa Tengah",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.5407,
            "lng": 110.4457
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "10 Januari 2026",
            "sumber": "PVMBG / BPPTKG"
        },
        "erupsi_terakhir": "2024 - 2026 (Awan Panas Guguran)",
        "total_erupsi_tercatat": 82,
        "ancaman_bahaya": [
            "Awan Panas Guguran (Wedhus Gembel)",
            "Lontaran Material Pijar",
            "Hujan Abu Vulkanik Lebat",
            "Lahar Hujan di Kali Bebeng & Gendol"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3–7 km dari puncak: Kawasan selalu terancam awan panas dan aliran lava. Dilarang dihuni.",
            "krb2": "Radius 7–12 km: Berpotensi terlanda awan panas dan lontaran batu pijar saat letusan besar.",
            "krb1": "Radius bantaran sungai hilir: Berpotensi terlanda lahar hujan."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Kaliurang (0274) 895123",
            "bpbd_terdekat": "BPBD DIY (0274) 555585 / BPBD Magelang 112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "Januari - Desember 2024",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 450,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Aktivitas efusif tinggi dengan pembentukan kubah lava Barat Daya, luncuran awan panas guguran 1.5-3 km.",
                "sumber": "BPPTKG"
            },
            {
                "tahun": 2023,
                "tanggal": "11 Maret 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 120,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Runtuhnya kubah lava Barat Daya memicu rentetan awan panas guguran sejauh 4 km ke arah Kali Bebeng.",
                "sumber": "BPPTKG"
            },
            {
                "tahun": 2010,
                "tanggal": "26 Oktober - November 2010",
                "meninggal": 353,
                "luka": 577,
                "mengungsi": 350000,
                "rumah_rusak": 4300,
                "fasilitas_rusak": 125,
                "ringkasan": "Erupsi eksplosif paroksismal VEI 4 terbesar dalam 100 tahun terakhir, awan panas meluncur hingga 15 km di Kali Gendol.",
                "sumber": "BNPB / PVMBG"
            }
        ]
    },
    {
        "id": "lawu",
        "nama": "Gunung Lawu",
        "nama_lain": "Mount Lawu (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 3265,
        "lokasi": {
            "kabupaten": "Karanganyar & Magetan",
            "provinsi": "Jawa Tengah & Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.625,
            "lng": 111.192
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1885 (Aktivitas Fumarola Kawah Candradimuka)",
        "total_erupsi_tercatat": 2,
        "ancaman_bahaya": [
            "Solfatara Kawah Candradimuka",
            "Kebakaran Hutan Musim Kemarau",
            "Longsor Punggung Bukit Cemoro Sewu"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawah Candradimuka dan puncak Hargo Dumilah.",
            "krb2": "Lereng atas sabana.",
            "krb1": "Kawasan Tawangmangu dan Sarangan."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Karanganyar (0271) 495115",
            "bpbd_terdekat": "BPBD Karanganyar (0271) 494112 / BPBD Magetan"
        },
        "riwayat_letusan": []
    },
    {
        "id": "wilis",
        "nama": "Gunung Wilis",
        "nama_lain": "Mount Wilis (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2563,
        "lokasi": {
            "kabupaten": "Kediri, Tulungagung, Nganjuk, Madiun, Ponorogo",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.808,
            "lng": 111.758
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kompleks Pegunungan Tua)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Masif Musim Penghujan",
            "Banjir Bandang Sungai Lereng"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Trogati & kompleks kawah mati.",
            "krb2": "Lereng terjal hutan lindung.",
            "krb1": "Lembah sungai hilir di Sedudo dan Sawahan."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Nganjuk (0358) 321115",
            "bpbd_terdekat": "BPBD Nganjuk (0358) 322112 / BPBD Kediri"
        },
        "riwayat_letusan": []
    },
    {
        "id": "kelud",
        "nama": "Gunung Kelud",
        "nama_lain": "Mount Kelud",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1731,
        "lokasi": {
            "kabupaten": "Kediri, Blitar, Malang",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.93,
            "lng": 112.308
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "13 Februari 2014 (Erupsi Plinian VEI 4)",
        "total_erupsi_tercatat": 38,
        "ancaman_bahaya": [
            "Letusan Eksplosif Kilat Skala Besar",
            "Lahar Letusan Danau Kawah",
            "Hujan Kerikil & Abu Vulkanik Lintas Provinsi"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 5 km dari kawah puncak (Kawasan rawan terlanda lontaran batu pijar dan aliran piroklastik).",
            "krb2": "Radius 5–10 km dari pusat erupsi.",
            "krb1": "Kawasan lembah sungai lahar (Kali Bladak, Kali Ngobo, Kali Konto)."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kelud, Sugihwaras Kediri (0354) 479115",
            "bpbd_terdekat": "BPBD Kediri (0354) 689112 / BPBD Blitar"
        },
        "riwayat_letusan": [
            {
                "tahun": 2014,
                "tanggal": "13 Februari 2014",
                "meninggal": 7,
                "luka": 84,
                "mengungsi": 201000,
                "rumah_rusak": 19800,
                "fasilitas_rusak": 140,
                "ringkasan": "Erupsi eksplosif Plinian VEI 4 dalam tempo 2 jam melontarkan kolom abu 26 km ke atmosfer, abu menutupi Jawa Barat hingga Bali.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "arjuno_welirang",
        "nama": "Gunung Arjuno-Welirang",
        "nama_lain": "Arjuno Welirang Complex",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3339,
        "lokasi": {
            "kabupaten": "Malang, Pasuruan, Mojokerto, Batu",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.765,
            "lng": 112.58
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1952 (Aktivitas Fumarola & Solfatara Tambang Belerang)",
        "total_erupsi_tercatat": 8,
        "ancaman_bahaya": [
            "Solfatara Bertekanan Tinggi Kawah Welirang",
            "Longsor Tebing Puncak Ogal-Agil",
            "Kebakaran Sabana"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah aktif Welirang.",
            "krb2": "Radius 2–5 km.",
            "krb1": "Kawasan hilir Tretes, Cangar, dan Selecta Batu."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Arjuno-Welirang, Tretes Pasuruan (0343) 811115",
            "bpbd_terdekat": "BPBD Pasuruan (0343) 421112 / BPBD Kota Batu"
        },
        "riwayat_letusan": []
    },
    {
        "id": "anjasmoro",
        "nama": "Gunung Anjasmoro",
        "nama_lain": "Mount Anjasmoro (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2282,
        "lokasi": {
            "kabupaten": "Jombang, Mojokerto, Malang",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.74,
            "lng": 112.45
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Pegunungan Vulkanik Purba)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Banjir Bandang Aliran Brantas Hulu",
            "Longsor Lereng Hutan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Cemoro Sewu Anjasmoro.",
            "krb2": "Lereng tengah Wonosalam.",
            "krb1": "Kawasan hilir Pacet dan Wonosalam."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Malang (0341) 551115",
            "bpbd_terdekat": "BPBD Jombang (0354) 861112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "kawi_butak",
        "nama": "Gunung Kawi-Butak",
        "nama_lain": "Mount Kawi (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2868,
        "lokasi": {
            "kabupaten": "Malang & Blitar",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.92,
            "lng": 112.45
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Tidak ada catatan letusan holosen)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Musim Hujan",
            "Kebakaran Hutan Pinus"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Butak dan kaldera mati.",
            "krb2": "Lereng atas Kraton Pesarean Kawi.",
            "krb1": "Kawasan lereng bawah Kepanjen dan Wlingi."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Malang (0341) 551115",
            "bpbd_terdekat": "BPBD Malang (0341) 402112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "bromo",
        "nama": "Gunung Bromo",
        "nama_lain": "Bromo Tengger Caldera",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2329,
        "lokasi": {
            "kabupaten": "Probolinggo, Pasuruan, Malang, Lumajang",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.9425,
            "lng": 112.953
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "10 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2019 & 2024 (Erupsi Freatik & Emisi Abu)",
        "total_erupsi_tercatat": 59,
        "ancaman_bahaya": [
            "Lontaran Material Pijar dan Bom Vulkanik",
            "Hujan Abu Tebal Menyelimuti Lautan Pasir",
            "Gas Belerang Pekat"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari kawah aktif Bromo (dasar kaldera lautan pasir). Dilarang mendekati bibir kawah.",
            "krb2": "Dasar Lautan Pasir Tengger.",
            "krb1": "Kawasan bibir kaldera Sukapura, Cemoro Lawang, Tosari."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Bromo, Ngadisari (0335) 581156",
            "bpbd_terdekat": "BPBD Probolinggo (0335) 421112 / BPBD Malang"
        },
        "riwayat_letusan": [
            {
                "tahun": 2019,
                "tanggal": "Februari - Maret 2019",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatik berkala melontarkan abu kecokelatan setinggi 600-1200 meter di atas kawah.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2010,
                "tanggal": "November 2010 - Januari 2011",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 1500,
                "rumah_rusak": 210,
                "fasilitas_rusak": 15,
                "ringkasan": "Erupsi abu lebat terus menerus selama 2 bulan, melumpuhkan penerbangan Bandara Abdulrachman Saleh Malang.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "semeru",
        "nama": "Gunung Semeru",
        "nama_lain": "Mahameru",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3676,
        "lokasi": {
            "kabupaten": "Lumajang & Malang",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -8.1077,
            "lng": 112.9224
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "14 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2024 - 2026 (Erupsi Abu & Awan Panas)",
        "total_erupsi_tercatat": 64,
        "ancaman_bahaya": [
            "Awan Panas Guguran (Besuk Kobokan)",
            "Lahar Dingin Masif",
            "Lontaran Batu Pijar",
            "Hujan Abu Lebat"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 5 km dari kawah Jonggring Saloko serta sepanjang Besuk Kobokan hingga 13 km dari puncak.",
            "krb2": "Radius 5–10 km dari pusat erupsi.",
            "krb1": "Lembah sungai lahar Besuk Kobokan, Besuk Bang, Besuk Kembar."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gunung Sawur, Candipuro (0334) 571210",
            "bpbd_terdekat": "BPBD Lumajang (0334) 888112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "Januari - November 2024",
                "meninggal": 0,
                "luka": 2,
                "mengungsi": 320,
                "rumah_rusak": 14,
                "fasilitas_rusak": 1,
                "ringkasan": "Erupsi berkala dengan kolom abu 700-1000 meter dan guguran awan panas ke Besuk Kobokan.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2021,
                "tanggal": "4 Desember 2021",
                "meninggal": 51,
                "luka": 169,
                "mengungsi": 10400,
                "rumah_rusak": 1027,
                "fasilitas_rusak": 31,
                "ringkasan": "Curah hujan ekstrem memicu runtuhnya kubah lava puncak menghasilkan awan panas guguran hebat menimbun Dusun Curah Kobokan.",
                "sumber": "BNPB / PVMBG"
            }
        ]
    },
    {
        "id": "lamongan",
        "nama": "Gunung Lamongan",
        "nama_lain": "Mount Lamongan",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1651,
        "lokasi": {
            "kabupaten": "Lumajang & Probolinggo",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.979,
            "lng": 113.342
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1898 (Aliran Lava & Letusan Maar)",
        "total_erupsi_tercatat": 22,
        "ancaman_bahaya": [
            "Erupsi Samping Lubang Maar",
            "Aliran Lava Pijar",
            "Gempa Vulkanik Dangkal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak dan 27 danau maar di sekitarnya.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan Klakah dan Ranu Pakis."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lamongan, Klakah (0334) 441115",
            "bpbd_terdekat": "BPBD Lumajang (0334) 888112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "argopuro",
        "nama": "Gunung Argopuro",
        "nama_lain": "Hyang Volcanic Complex (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 3088,
        "lokasi": {
            "kabupaten": "Probolinggo, Jember, Situbondo, Bondowoso",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.965,
            "lng": 113.565
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Solfatara Lemah)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Kebakaran Padang Rumput Cikasur",
            "Hipotermia Jalur Pendakian Terpanjang"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Rengganis & Argopuro.",
            "krb2": "Dataran Cikasur.",
            "krb1": "Kawasan lereng bawah Bremi dan Baderan."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Jember (0331) 481115",
            "bpbd_terdekat": "BPBD Jember (0331) 322112 / BPBD Situbondo"
        },
        "riwayat_letusan": []
    },
    {
        "id": "raung",
        "nama": "Gunung Raung",
        "nama_lain": "Mount Raung Caldera",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3332,
        "lokasi": {
            "kabupaten": "Banyuwangi, Bondowoso, Jember",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -8.125,
            "lng": 114.042
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2021 - 2024 (Letusan Strombolian Kaldera Raksasa)",
        "total_erupsi_tercatat": 36,
        "ancaman_bahaya": [
            "Lontaran Abu Vulkanik Pekat Menutup Bandara Banyuwangi & Bali",
            "Lontaran Piroklastik Pijar di Dasar Kaldera 500m"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari pusat kaldera aktif sedalam 500 meter.",
            "krb2": "Radius 3–7 km.",
            "krb1": "Kawasan perkebunan kopi lereng selatan Glenmore dan Kalibaru."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Raung, Songgon Banyuwangi (0333) 631115",
            "bpbd_terdekat": "BPBD Banyuwangi (0333) 412112 / BPBD Bondowoso"
        },
        "riwayat_letusan": [
            {
                "tahun": 2021,
                "tanggal": "Januari - Februari 2021",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi Strombolian beruntun di dasar kaldera menghasilkan hujan abu halus di Banyuwangi dan Jember.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2015,
                "tanggal": "Juni - Agustus 2015",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 1200,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Semburan abu terus menerus melumpuhkan 5 bandara termasuk Bandara Ngurah Rai Bali dan Juanda Surabaya.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "ijen",
        "nama": "Gunung Ijen",
        "nama_lain": "Ijen Crater (Blue Fire)",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2386,
        "lokasi": {
            "kabupaten": "Banyuwangi & Bondowoso",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -8.058,
            "lng": 114.242
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "13 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "Juli 2024 & Peningkatan Suhu Danau Asam",
        "total_erupsi_tercatat": 14,
        "ancaman_bahaya": [
            "Letupan Gas Asam Beracun (SO2) Mematikan",
            "Tsunami Danau Kawah Asam Akibat Longsoran Dinding",
            "Banjir Lahar Asam ke Sungai Banyu Pahit"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari bibir kawah danau asam klorida pekat.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Sepanjang lembah Sungai Banyu Pahit hingga Asembagus."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ijen, Licin Banyuwangi (0333) 421115",
            "bpbd_terdekat": "BPBD Banyuwangi (0333) 412112 / BPBD Bondowoso"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "12 Juli 2024",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Peningkatan status ke Waspada karena suhu danau naik drastis memicu letupan gas beracun, penutupan wisata kawah.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "baluran",
        "nama": "Gunung Baluran",
        "nama_lain": "Mount Baluran (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1247,
        "lokasi": {
            "kabupaten": "Situbondo",
            "provinsi": "Jawa Timur",
            "pulau": "Jawa"
        },
        "koordinat": {
            "lat": -7.848,
            "lng": 114.37
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kawasan Taman Nasional)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Kebakaran Padang Sabana Bekol"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak kaldera purba Baluran.",
            "krb2": "Lereng hutan sabana.",
            "krb1": "Jalur jalan nasional Pantura Banyuputih."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Situbondo (0338) 671115",
            "bpbd_terdekat": "BPBD Situbondo (0338) 672112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "batur",
        "nama": "Gunung Batur",
        "nama_lain": "Mount Batur Caldera",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1717,
        "lokasi": {
            "kabupaten": "Bangli",
            "provinsi": "Bali",
            "pulau": "Bali"
        },
        "koordinat": {
            "lat": -8.242,
            "lng": 115.375
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2000 (Erupsi Abu Kawah Utama)",
        "total_erupsi_tercatat": 27,
        "ancaman_bahaya": [
            "Lontaran Bom Pijar di Kaldera",
            "Aliran Lava Hitam",
            "Gas Belerang di Danau Batur"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah aktif puncak dan dasar kaldera.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Desa-desa di tepian kaldera dan Danau Batur (Kintamani)."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Batur, Kintamani (0366) 51115",
            "bpbd_terdekat": "BPBD Bangli (0366) 91112 / BPBD Bali"
        },
        "riwayat_letusan": []
    },
    {
        "id": "agung",
        "nama": "Gunung Agung",
        "nama_lain": "Mount Agung Bali",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3142,
        "lokasi": {
            "kabupaten": "Karangasem",
            "provinsi": "Bali",
            "pulau": "Bali"
        },
        "koordinat": {
            "lat": -8.3433,
            "lng": 115.5072
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2017 - 2019 (Erupsi Magmatik Strombolian)",
        "total_erupsi_tercatat": 16,
        "ancaman_bahaya": [
            "Awan Panas Guguran",
            "Lontaran Batu Pijar",
            "Hujan Abu Lebat",
            "Lahar Hujan di Sungai Yeh Sah"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 4 km dari kawah puncak.",
            "krb2": "Radius 4–6 km dari puncak.",
            "krb1": "Lembah sungai lahar yang bermuara ke pesisir selatan Karangasem."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Agung, Rendang Karangasem (0366) 23115",
            "bpbd_terdekat": "BPBD Bali / BPBD Karangasem (0363) 22112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2018,
                "tanggal": "2 Juli 2018",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 4500,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi Strombolian eksplosif melontarkan batu pijar sejauh 2 km dan membakar hutan di sekitar puncak.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2017,
                "tanggal": "November - Desember 2017",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 70000,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Peningkatan status hingga Level IV (Awas) dengan semburan abu 4000 meter memicu penutupan Bandara I Gusti Ngurah Rai.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "bratan_catur",
        "nama": "Gunung Bratan / Catur",
        "nama_lain": "Bratan Caldera (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 2096,
        "lokasi": {
            "kabupaten": "Tabanan & Buleleng",
            "provinsi": "Bali",
            "pulau": "Bali"
        },
        "koordinat": {
            "lat": -8.28,
            "lng": 115.18
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kaldera Danau Beratan, Buyan, Tamblingan)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Musim Hujan di Lereng Danau"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Catur & kaldera Bedugul.",
            "krb2": "Lereng Danau Buyan & Tamblingan.",
            "krb1": "Kawasan wisata Bedugul."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Denpasar (0361) 221115",
            "bpbd_terdekat": "BPBD Tabanan (0361) 811112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "rinjani",
        "nama": "Gunung Rinjani",
        "nama_lain": "Barujari Caldera",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 3726,
        "lokasi": {
            "kabupaten": "Lombok Utara, Lombok Timur, Lombok Tengah",
            "provinsi": "Nusa Tenggara Barat",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.4113,
            "lng": 116.4573
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "10 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2016 (Erupsi Gunung Barujari di Kaldera)",
        "total_erupsi_tercatat": 21,
        "ancaman_bahaya": [
            "Lontaran Abu & Lava Pijar Anak Gunung Barujari",
            "Bahaya Banjir Lahar Luapan Danau Segara Anak"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kaldera Danau Segara Anak dan tubuh anak gunung Barujari.",
            "krb2": "Punggungan kaldera dan jalur pendakian Sembalun & Senaru.",
            "krb1": "Lembah Sungai Tanggek dan Sungai Putih di hilir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Rinjani, Sembalun Lawang (0370) 653115",
            "bpbd_terdekat": "BPBD NTB / BPBD Lombok Utara (0370) 6182112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2016,
                "tanggal": "27 September 2016",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 380,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi anak gunung Barujari melontarkan abu 2000 meter menutupi permukaan Danau Segara Anak.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2015,
                "tanggal": "Oktober - November 2015",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Hembusan abu lebat menutup operasional Bandara Internasional Lombok dan Ngurah Rai Bali selama beberapa hari.",
                "sumber": "PVMBG / BMKG"
            }
        ]
    },
    {
        "id": "tambora",
        "nama": "Gunung Tambora",
        "nama_lain": "Tambora Caldera (VEI 7 - 1815)",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2850,
        "lokasi": {
            "kabupaten": "Dompu & Bima",
            "provinsi": "Nusa Tenggara Barat",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.25,
            "lng": 118
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1967 (Erupsi Freatik di Dasar Kaldera Raksasa)",
        "total_erupsi_tercatat": 6,
        "ancaman_bahaya": [
            "Erupsi di Dasar Kaldera Berdiameter 7 km",
            "Lontaran Abu",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Dasar kaldera raksasa dan radius 3 km dari bibir kawah.",
            "krb2": "Radius 3–7 km.",
            "krb1": "Pesisir Teluk Saleh dan Sanggar."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Tambora, Doro Peti Dompu (0373) 611115",
            "bpbd_terdekat": "BPBD Dompu (0373) 21112 / BPBD Bima"
        },
        "riwayat_letusan": []
    },
    {
        "id": "sangeang_api",
        "nama": "Gunung Sangeang Api",
        "nama_lain": "Sangeang Api Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1949,
        "lokasi": {
            "kabupaten": "Bima",
            "provinsi": "Nusa Tenggara Barat",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.2,
            "lng": 119.07
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2014 & Emisi Abu Berkala 2022",
        "total_erupsi_tercatat": 19,
        "ancaman_bahaya": [
            "Awan Panas Aliran ke Laut",
            "Lontaran Bom Pijar",
            "Hujan Abu di Daratan Bima & Labuan Bajo"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Seluruh Pulau Sangeang Api (radius 5 km dari kawah Doro Api & Doro Mantoi). Tidak berpenghuni permanen.",
            "krb2": "Jalur laut di sekitar Pulau Sangeang.",
            "krb1": "Pesisir Kecamatan Wera di daratan utama Sumbawa."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sangeang Api, Wera Bima (0374) 43115",
            "bpbd_terdekat": "BPBD Bima (0374) 42112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2014,
                "tanggal": "30 Mei 2014",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 135,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi eksplosif paroksismal melontarkan abu 15 km ke udara, mengganggu jalur penerbangan Australia-Indonesia.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "poco_leok",
        "nama": "Pegunungan Poco Leok",
        "nama_lain": "Poco Leok Complex (Tidak Aktif)",
        "tipe": "C",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1675,
        "lokasi": {
            "kabupaten": "Manggarai",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.683,
            "lng": 120.483
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Tidak Aktif (Fumarola Geotermal Ulumbu)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Manifestasi Uap Panas Bumi"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Pusat kaldera Poco Leok.",
            "krb2": "Lereng tengah.",
            "krb1": "Kawasan hilir Ruteng."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ruteng (0385) 22115",
            "bpbd_terdekat": "BPBD Manggarai (0385) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "anak_ranakah",
        "nama": "Gunung Anak Ranakah",
        "nama_lain": "Anak Ranakah Dome",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2250,
        "lokasi": {
            "kabupaten": "Manggarai & Manggarai Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.62,
            "lng": 120.52
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1991 (Pertumbuhan Kubah Lava Baru)",
        "total_erupsi_tercatat": 2,
        "ancaman_bahaya": [
            "Guguran Kubah Lava",
            "Awan Panas Lembah Wae Reno",
            "Hujan Abu di Ruteng"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kubah lava Anak Ranakah.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Lembah sungai hilir di utara."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Anak Ranakah, Ruteng (0385) 21915",
            "bpbd_terdekat": "BPBD Manggarai (0385) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "inielika",
        "nama": "Gunung Inielika",
        "nama_lain": "Mount Inielika Bajawa",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1559,
        "lokasi": {
            "kabupaten": "Ngada",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.73,
            "lng": 120.98
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2001 (Erupsi Freatomagmatik Danau Kawah)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Erupsi Freatik Kawah Danau",
            "Lontaran Lumpur & Batu Pijar",
            "Hujan Abu di Bajawa"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kompleks 10 kawah puncak.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan dataran Bajawa."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Inielika, Bajawa (0384) 21115",
            "bpbd_terdekat": "BPBD Ngada (0384) 22112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2001,
                "tanggal": "11 - 16 Januari 2001",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 1000,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatomagmatik mendadak melontarkan lumpur dan batu setinggi 1000 meter.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "inierie",
        "nama": "Gunung Inierie",
        "nama_lain": "Mount Inierie Stratovolcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2245,
        "lokasi": {
            "kabupaten": "Ngada",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.875,
            "lng": 120.951
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "Dorman (Solfatara Lemah)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Longsor Lereng Piramida Curam",
            "Gas Solfatara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah puncak.",
            "krb2": "Lereng tengah menghadap Kampung Adat Bena.",
            "krb1": "Kawasan pesisir pantai Aimere."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Inierie, Bajawa (0384) 21115",
            "bpbd_terdekat": "BPBD Ngada (0384) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ebulobo",
        "nama": "Gunung Ebulobo",
        "nama_lain": "Amburombu Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 2124,
        "lokasi": {
            "kabupaten": "Nagekeo",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.824,
            "lng": 121.19
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1969 (Erupsi Abu & Aliran Lava Puncak)",
        "total_erupsi_tercatat": 6,
        "ancaman_bahaya": [
            "Guguran Kubah Lava Puncak",
            "Awan Panas Lembah",
            "Lahar Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah aktif kubah lava.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan Boawae di lereng bawah."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ebulobo, Boawae (0386) 24115",
            "bpbd_terdekat": "BPBD Nagekeo (0386) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "iya",
        "nama": "Gunung Iya",
        "nama_lain": "Mount Iya Ende",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 637,
        "lokasi": {
            "kabupaten": "Ende",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.897,
            "lng": 121.645
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1969 & Peningkatan Status 2024",
        "total_erupsi_tercatat": 8,
        "ancaman_bahaya": [
            "Longsoran Dinding Kawah ke Laut Memicu Tsunami",
            "Hujan Abu Tebal di Kota Ende",
            "Lontaran Bom Pijar"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari Kawah Kaboro di semenanjung Iya.",
            "krb2": "Semenanjung Ende selatan.",
            "krb1": "Pusat Kota Ende yang berjarak hanya 4 km."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Iya, Ende (0381) 21115",
            "bpbd_terdekat": "BPBD Ende (0381) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "kelimutu",
        "nama": "Gunung Kelimutu",
        "nama_lain": "Tri-Colored Lakes Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1639,
        "lokasi": {
            "kabupaten": "Ende",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.77,
            "lng": 121.82
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "Mei 2024 (Peningkatan Suhu & Perubahan Warna Danau)",
        "total_erupsi_tercatat": 11,
        "ancaman_bahaya": [
            "Semburan Gas Belerang Pekat & Freatik Mendadak",
            "Longsor Dinding Kawah Tiwu Ata Polo",
            "Hujan Abu Asam"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari ketiga danau kawah kawah Tiga Warna (Tiwu Ata Polo, Tiwu Ko'o Fai Nuwa Muri, Tiwu Ata Bupu).",
            "krb2": "Radius 1–2.5 km.",
            "krb1": "Kawasan wisata Moni."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kelimutu, Desa Koanara Moni (0381) 23115",
            "bpbd_terdekat": "BPBD Ende (0381) 22112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "24 Mei 2024",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Perubahan drastis warna danau Tiwu Ata Polo dari hijau toska ke cokelat pekat diiringi lonjakan gempa vulkanik, status dinaikkan ke Waspada.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "rokatenda",
        "nama": "Gunung Rokatenda",
        "nama_lain": "Paluweh Island Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 875,
        "lokasi": {
            "kabupaten": "Sikka",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.32,
            "lng": 121.708
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2013 (Erupsi Eksplosif Kubah Lava)",
        "total_erupsi_tercatat": 9,
        "ancaman_bahaya": [
            "Awan Panas Aliran ke Laut",
            "Tsunami Lokal Akibat Runtuhan Kubah ke Laut",
            "Lontaran Batu Pijar"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2.5 km dari kubah lava Rokatenda di Pulau Palue.",
            "krb2": "Seluruh pesisir Pulau Palue.",
            "krb1": "Kawasan perairan Teluk Maumere."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Rokatenda, Maumere (0382) 21115",
            "bpbd_terdekat": "BPBD Sikka (0382) 22112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2013,
                "tanggal": "10 Agustus 2013",
                "meninggal": 6,
                "luka": 0,
                "mengungsi": 3000,
                "rumah_rusak": 50,
                "fasilitas_rusak": 3,
                "ringkasan": "Runtuhnya kubah lava memicu awan panas menerjang Pantai Tuanggeo menewaskan 6 warga.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "egon",
        "nama": "Gunung Egon",
        "nama_lain": "Mount Egon Flores",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1703,
        "lokasi": {
            "kabupaten": "Sikka",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.672,
            "lng": 122.453
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2008 & Peningkatan Gas Beracun 2016",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Semburan Gas Belerang Beracun",
            "Lontaran Abu Eksplosif Freatik",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah puncak.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan pemukiman lereng bawah Waigete."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Egon, Nangatobong (0382) 23115",
            "bpbd_terdekat": "BPBD Sikka (0382) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "lewotobi_laki",
        "nama": "Gunung Lewotobi Laki-laki",
        "nama_lain": "Mount Lewotobi Male Peak",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1584,
        "lokasi": {
            "kabupaten": "Flores Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.5386,
            "lng": 122.7681
        },
        "status": {
            "level": 4,
            "label": "Awas",
            "badge_color": "red",
            "tanggal_update": "15 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "November 2024 - 2026 (Erupsi Eksplosif)",
        "total_erupsi_tercatat": 29,
        "ancaman_bahaya": [
            "Lontaran Bom Vulkanik Pijar Radius 7 km",
            "Awan Panas Aliran Sektoral",
            "Hujan Abu Lebat Pasir",
            "Gas Belerang Beracun"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 7 km dari kawah puncak dan perluasan sektoral 8 km ke arah Barat Daya - Barat Laut.",
            "krb2": "Radius 7–10 km dari kawah puncak.",
            "krb1": "Kawasan hilir aliran sungai yang berhulu di puncak."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lewotobi, Desa Pululera (0383) 234120",
            "bpbd_terdekat": "BPBD Flores Timur 0812-3987-6543 / Call Center 112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "3-4 November 2024",
                "meninggal": 9,
                "luka": 63,
                "mengungsi": 15700,
                "rumah_rusak": 2384,
                "fasilitas_rusak": 48,
                "ringkasan": "Erupsi eksplosif paroksismal tengah malam disertai lontaran batu pijar diameter 50 cm menghantam pemukiman Desa Klatanlo dan Hokeng.",
                "sumber": "BNPB / PVMBG"
            }
        ]
    },
    {
        "id": "lewotobi_perempuan",
        "nama": "Gunung Lewotobi Perempuan",
        "nama_lain": "Mount Lewotobi Female Peak",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1702,
        "lokasi": {
            "kabupaten": "Flores Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.5539,
            "lng": 122.7811
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1935 & Peningkatan Simpatik 2024",
        "total_erupsi_tercatat": 12,
        "ancaman_bahaya": [
            "Reaksi Vulkanik Simpatik dengan Lewotobi Laki-laki",
            "Hujan Abu Pasir",
            "Longsor Dinding Kawah"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan lembah antara dua gunung kembar."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lewotobi, Pululera (0383) 234120",
            "bpbd_terdekat": "BPBD Flores Timur 0812-3987-6543"
        },
        "riwayat_letusan": []
    },
    {
        "id": "leroboleng",
        "nama": "Gunung Leroboleng",
        "nama_lain": "Mount Leroboleng",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1117,
        "lokasi": {
            "kabupaten": "Flores Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.358,
            "lng": 122.842
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "2003 (Erupsi Abu Freatik)",
        "total_erupsi_tercatat": 4,
        "ancaman_bahaya": [
            "Erupsi Abu",
            "Lontaran Batu"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah puncak.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan pesisir pantai Flores timur."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Larantuka (0383) 21115",
            "bpbd_terdekat": "BPBD Flores Timur 112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "riang_kotang",
        "nama": "Gunung Riang Kotang",
        "nama_lain": "Riang Kotang (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 200,
        "lokasi": {
            "kabupaten": "Flores Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.3,
            "lng": 122.89
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Mata Air Panas & Solfatara)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Solfatara Pesisir"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Area mata air panas vulkanik.",
            "krb2": "Pesisir sekitarnya.",
            "krb1": "Desa pesisir terdekat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Larantuka (0383) 21115",
            "bpbd_terdekat": "BPBD Flores Timur 112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ili_boleng",
        "nama": "Gunung Ili Boleng",
        "nama_lain": "Mount Ili Boleng Adonara",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1659,
        "lokasi": {
            "kabupaten": "Flores Timur",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.342,
            "lng": 123.257
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1993 (Erupsi Abu Eksplosif)",
        "total_erupsi_tercatat": 8,
        "ancaman_bahaya": [
            "Lontaran Abu Pasir",
            "Bom Pijar Puncak",
            "Awan Panas ke Pesisir"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak Pulau Adonara.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan pesisir pantai pulau Adonara."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ili Boleng, Waiwerang (0383) 31115",
            "bpbd_terdekat": "BPBD Flores Timur 112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "lewotolo",
        "nama": "Gunung Ili Lewotolok",
        "nama_lain": "Lewotolo Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1423,
        "lokasi": {
            "kabupaten": "Lembata",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.2721,
            "lng": 123.5049
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "13 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2024 - 2026 (Aliran Lava & Letusan Strombolian)",
        "total_erupsi_tercatat": 24,
        "ancaman_bahaya": [
            "Lontaran Lava Pijar",
            "Aliran Lava Sektor Selatan & Barat",
            "Awan Panas Guguran",
            "Hujan Abu Pasir"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari pusat kawah serta sektoral 4 km ke sektor Selatan dan Barat.",
            "krb2": "Radius 3–5 km.",
            "krb1": "Kawasan pesisir pantai pulau Lembata yang berbatasan dengan lereng bawah."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ili Lewotolok, Ile Ape (0383) 41189",
            "bpbd_terdekat": "BPBD Lembata 0812-4678-9011"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "Februari - Oktober 2024",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 640,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Aliran lava baru bergerak 1.8 km ke sektor selatan disertai puluhan letusan strombolian harian.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2020,
                "tanggal": "29 November 2020",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 7900,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi eksplosif paroksismal melontarkan kolom abu pekat setinggi 4000 meter memicu evakuasi massal warga Ile Ape.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "batutara",
        "nama": "Gunung Batutara",
        "nama_lain": "Batu Tara Volcano Island",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 748,
        "lokasi": {
            "kabupaten": "Lembata",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -7.792,
            "lng": 123.579
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2015 (Letusan Strombolian Pulau Komba)",
        "total_erupsi_tercatat": 15,
        "ancaman_bahaya": [
            "Lontaran Bom Pijar ke Laut Flores",
            "Gelombang Tsunami Lokal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Seluruh pulau tak berpenghuni Komba (radius 3 km).",
            "krb2": "Jalur pelayaran Laut Flores.",
            "krb1": "Pesisir utara Pulau Lembata."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lembata (0383) 41189",
            "bpbd_terdekat": "BPBD Lembata 0812-4678-9011"
        },
        "riwayat_letusan": []
    },
    {
        "id": "sirung",
        "nama": "Gunung Sirung",
        "nama_lain": "Mount Sirung Pantar",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 862,
        "lokasi": {
            "kabupaten": "Alor",
            "provinsi": "Nusa Tenggara Timur",
            "pulau": "Nusa Tenggara"
        },
        "koordinat": {
            "lat": -8.508,
            "lng": 124.13
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2021 (Erupsi Freatik Danau Kawah)",
        "total_erupsi_tercatat": 11,
        "ancaman_bahaya": [
            "Semburan Gas Belerang Pekat Danau Kawah",
            "Lontaran Abu Freatik"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari danau kawah kawah Sirung.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Desa-desa pesisir Pulau Pantar selatan."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Sirung, Kabir Pantar (0386) 31115",
            "bpbd_terdekat": "BPBD Alor (0386) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "colo",
        "nama": "Gunung Colo",
        "nama_lain": "Colo Volcano Una-Una",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 507,
        "lokasi": {
            "kabupaten": "Tojo Una-Una",
            "provinsi": "Sulawesi Tengah",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": -0.17,
            "lng": 121.614
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1983 (Erupsi Plinian Menyapu Seluruh Pulau)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Awan Panas Menyeluruh ke Segala Arah Laut",
            "Lontaran Bom Pijar"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Seluruh Pulau Una-Una (radius 5 km dari kawah).",
            "krb2": "Perairan Teluk Tomini.",
            "krb1": "Pesisir daratan Ampana dan Marisa."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Colo, Wakai Una-Una (0454) 21115",
            "bpbd_terdekat": "BPBD Tojo Una-Una (0454) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "lokon",
        "nama": "Gunung Lokon",
        "nama_lain": "Mount Lokon & Empung",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1580,
        "lokasi": {
            "kabupaten": "Tomohon",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.358,
            "lng": 124.792
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2023 - 2024 (Erupsi Freatomagmatik Tompaluan)",
        "total_erupsi_tercatat": 28,
        "ancaman_bahaya": [
            "Lontaran Batu Pijar dari Kawah Tompaluan",
            "Hujan Abu Tebal Menyelimuti Kota Tomohon & Manado",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2.5 km dari Kawah Tompaluan (di antara puncak Lokon dan Empung).",
            "krb2": "Radius 2.5–5 km.",
            "krb1": "Pemukiman Kelurahan Kakaskasen dan Kinilow."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lokon, Kakaskasen Tomohon (0431) 351115",
            "bpbd_terdekat": "BPBD Kota Tomohon (0431) 352112 / BPBD Sulut"
        },
        "riwayat_letusan": [
            {
                "tahun": 2023,
                "tanggal": "November 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi freatomagmatik melontarkan abu 1500 meter di atas Kawah Tompaluan disertai suara dentuman kuat.",
                "sumber": "PVMBG"
            },
            {
                "tahun": 2011,
                "tanggal": "Juli - Agustus 2011",
                "meninggal": 1,
                "luka": 0,
                "mengungsi": 5200,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Peningkatan status ke Level IV (Awas) dengan semburan batu pijar membakar hutan lereng gunung.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "mahawu",
        "nama": "Gunung Mahawu",
        "nama_lain": "Mount Mahawu",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1311,
        "lokasi": {
            "kabupaten": "Tomohon & Minahasa",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.35,
            "lng": 124.86
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "07 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1977 (Erupsi Danau Kawah)",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Erupsi Danau Kawah",
            "Gas Belerang Pekat"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1 km dari kawah puncak.",
            "krb2": "Radius 1–3 km.",
            "krb1": "Kawasan timur Kota Tomohon."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Mahawu, Kakaskasen (0431) 351115",
            "bpbd_terdekat": "BPBD Tomohon (0431) 352112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "empung",
        "nama": "Gunung Empung",
        "nama_lain": "Mount Empung",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1340,
        "lokasi": {
            "kabupaten": "Tomohon & Minahasa",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.367,
            "lng": 124.8
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1906 (Kawah Aktif Bersama Tompaluan)",
        "total_erupsi_tercatat": 6,
        "ancaman_bahaya": [
            "Erupsi Kawah Tompaluan",
            "Abu Vulkanik"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Kawasan lingkar barat Tomohon."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Lokon (0431) 351115",
            "bpbd_terdekat": "BPBD Tomohon (0431) 352112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "soputan",
        "nama": "Gunung Soputan",
        "nama_lain": "Mount Soputan",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1785,
        "lokasi": {
            "kabupaten": "Minahasa Tenggara & Minahasa Selatan",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.112,
            "lng": 124.737
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2018 (Erupsi Eksplosif Kolom Abu 6000m)",
        "total_erupsi_tercatat": 39,
        "ancaman_bahaya": [
            "Aliran Lava & Guguran Kubah",
            "Awan Panas Lereng Timur-Laut",
            "Hujan Abu Lebat di Minahasa"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 4 km dari puncak serta perluasan 6.5 km ke sektor Barat-Barat Daya.",
            "krb2": "Radius 4–8 km.",
            "krb1": "Lembah sungai lahar di Silian dan Tombatu."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Soputan, Maliku Silian (0431) 31115",
            "bpbd_terdekat": "BPBD Minahasa Tenggara (0431) 331112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2018,
                "tanggal": "Oktober & Desember 2018",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi Plinian eksplosif melontarkan kolom abu setinggi 6000 meter ke atmosfer diiringi lelehan lava pijar.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "klabat",
        "nama": "Gunung Klabat",
        "nama_lain": "Mount Klabat (Atap Sulut - Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1995,
        "lokasi": {
            "kabupaten": "Minahasa Utara",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.47,
            "lng": 125.03
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1683 (Danau Kawah Mati)",
        "total_erupsi_tercatat": 1,
        "ancaman_bahaya": [
            "Tanah Longsor Lereng Curam",
            "Banjir Bandang Airmadidi"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak danau kawah mati Klabat.",
            "krb2": "Lereng tengah hutan lindung.",
            "krb1": "Kawasan Kota Airmadidi."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Manado (0431) 851115",
            "bpbd_terdekat": "BPBD Minahasa Utara (0431) 891112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "tangkoko",
        "nama": "Gunung Tangkoko",
        "nama_lain": "Mount Tangkoko Batuangus",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1149,
        "lokasi": {
            "kabupaten": "Bitung",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 1.52,
            "lng": 125.2
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1880 (Kubah Lava Batuangus)",
        "total_erupsi_tercatat": 8,
        "ancaman_bahaya": [
            "Kubah Lava Batuangus",
            "Gas Solfatara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah Tangkoko & Batuangus.",
            "krb2": "Kawasan Cagar Alam Tangkoko.",
            "krb1": "Pesisir Selat Lembeh dan Kota Bitung."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Tangkoko, Batuputih Bitung (0438) 31115",
            "bpbd_terdekat": "BPBD Bitung (0438) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ambang",
        "nama": "Gunung Ambang",
        "nama_lain": "Mount Ambang",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1795,
        "lokasi": {
            "kabupaten": "Bolaang Mongondow Timur",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 0.75,
            "lng": 124.42
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1845 (Erupsi Freatik & Fumarola)",
        "total_erupsi_tercatat": 3,
        "ancaman_bahaya": [
            "Lapangan Solfatara Aktif",
            "Longsor Lereng"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah belerang puncak.",
            "krb2": "Radius 1.5–3 km.",
            "krb1": "Kawasan Modayag di lereng bawah."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ambang, Purworejo Boltim (0434) 22115",
            "bpbd_terdekat": "BPBD Bolaang Mongondow Timur 0812-4411-2233"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ruang",
        "nama": "Gunung Ruang",
        "nama_lain": "Ruang Volcano Sitaro",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 725,
        "lokasi": {
            "kabupaten": "Kepulauan Siau Tagulandang Biaro (Sitaro)",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 2.3005,
            "lng": 125.3719
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "12 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "April - Mei 2024 & 2025",
        "total_erupsi_tercatat": 18,
        "ancaman_bahaya": [
            "Awan Panas Aliran ke Laut",
            "Lontaran Batu Kerikil Pijar",
            "Gelombang Tsunami Vulkanik di Pesisir Tagulandang"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Seluruh Pulau Ruang (radius 4-5 km dari kawah). Seluruh penduduk direlokasi permanen.",
            "krb2": "Pesisir barat Pulau Tagulandang (jarak 6 km dari kawah).",
            "krb1": "Wilayah timur Pulau Tagulandang terdampak hujan abu dan kerikil lebat."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ruang, Tagulandang (0432) 332115",
            "bpbd_terdekat": "BPBD Sitaro 0811-432-117"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "16 - 30 April 2024",
                "meninggal": 0,
                "luka": 14,
                "mengungsi": 9800,
                "rumah_rusak": 3950,
                "fasilitas_rusak": 84,
                "ringkasan": "Erupsi eksplosif dahsyat VEI 4 melontarkan kolom abu 19 km ke stratosfer dan kilat vulkanik, memicu evakuasi seluruh pulau.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "karangetang",
        "nama": "Gunung Karangetang",
        "nama_lain": "Api Siau",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1784,
        "lokasi": {
            "kabupaten": "Kepulauan Siau Tagulandang Biaro (Sitaro)",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 2.7808,
            "lng": 125.4069
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "14 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2023 - 2026 (Aliran Lava & Guguran)",
        "total_erupsi_tercatat": 45,
        "ancaman_bahaya": [
            "Aliran Lava Pijar ke Lembah Batang & Batuawang",
            "Awan Panas Guguran",
            "Lahar Hujan"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2.5 km dari kawah utama dan kawah utara, serta perluasan 3.5 km ke arah Barat Daya - Selatan.",
            "krb2": "Radius 2.5–4.5 km.",
            "krb1": "Bantaran sungai-sungai berhulu di puncak gunung."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Karangetang, Salili (0432) 231189",
            "bpbd_terdekat": "BPBD Sitaro 0811-432-117"
        },
        "riwayat_letusan": [
            {
                "tahun": 2023,
                "tanggal": "Februari - Oktober 2023",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 150,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Aliran lava aktif mengalir sejauh 2 km ke arah Kali Batuawang dan Kali Timbelang.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "banua_wuhu",
        "nama": "Gunung Banua Wuhu",
        "nama_lain": "Submarine Volcano Banua Wuhu",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": -5,
        "lokasi": {
            "kabupaten": "Kepulauan Sangihe",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 3.138,
            "lng": 125.491
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1919 (Muncul & Tenggelamnya Pulau Baru di Bawah Laut)",
        "total_erupsi_tercatat": 4,
        "ancaman_bahaya": [
            "Letusan Bawah Laut",
            "Gelombang Tsunami Lokal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km di atas permukaan laut puncak gunung.",
            "krb2": "Jalur laut di dekat Pulau Mahengetang.",
            "krb1": "Pesisir Pulau Mahengetang."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Awu, Tahuna (0432) 21115",
            "bpbd_terdekat": "BPBD Sangihe (0432) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "awu",
        "nama": "Gunung Awu",
        "nama_lain": "Mount Awu Sangihe",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1320,
        "lokasi": {
            "kabupaten": "Kepulauan Sangihe",
            "provinsi": "Sulawesi Utara",
            "pulau": "Sulawesi"
        },
        "koordinat": {
            "lat": 3.67,
            "lng": 125.45
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "14 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2004 & Peningkatan Kegempaan Dangkal 2024-2026",
        "total_erupsi_tercatat": 19,
        "ancaman_bahaya": [
            "Erupsi Magmatik Danau Kawah",
            "Awan Panas Guguran Kubah Lava",
            "Lahar Letusan Masif Menuju Tahuna"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 5 km dari kawah puncak (Kawasan ancaman awan panas dan lontaran batu pijar).",
            "krb2": "Radius 5–7.5 km.",
            "krb1": "Lembah sungai hilir di Kecamatan Tahuna dan Kendahe."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Awu, Kolongan Akembawi (0432) 21115",
            "bpbd_terdekat": "BPBD Kepulauan Sangihe (0432) 21112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2004,
                "tanggal": "Juni 2004",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 16000,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi magmatik membentuk kubah lava baru di dasar kawah diiringi evakuasi massal 16.000 warga Tahuna.",
                "sumber": "PVMBG / BNPB"
            }
        ]
    },
    {
        "id": "gamalama",
        "nama": "Gunung Gamalama",
        "nama_lain": "Mount Gamalama Ternate",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1715,
        "lokasi": {
            "kabupaten": "Kota Ternate",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 0.8,
            "lng": 127.325
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2018 & 2024 (Erupsi Abu Freatomagmatik)",
        "total_erupsi_tercatat": 37,
        "ancaman_bahaya": [
            "Lontaran Material Pijar Puncak",
            "Hujan Abu Menyelimuti Seluruh Pulau Ternate",
            "Lahar Hujan Sungai Tugurara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 1.5 km dari kawah aktif puncak.",
            "krb2": "Radius 1.5–3.5 km.",
            "krb1": "Lembah sungai lahar yang bermuara ke pesisir Ternate (Tugurara, Moya)."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gamalama, Sangaji Ternate (0921) 3121115",
            "bpbd_terdekat": "BPBD Kota Ternate (0921) 311112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2018,
                "tanggal": "4 Oktober 2018",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi abu vulkanik freatik setinggi 250 meter di atas kawah, menunda penerbangan di Bandara Babullah.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "tidore",
        "nama": "Gunung Tidore / Kiematubu",
        "nama_lain": "Kiematubu Peak (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1730,
        "lokasi": {
            "kabupaten": "Kota Tidore Kepulauan",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 0.658,
            "lng": 127.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kawah Mati)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Tanah Longsor Lereng Terjal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Kiematubu.",
            "krb2": "Lereng atas pulau Tidore.",
            "krb1": "Pesisir Soa Sio."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ternate (0921) 3121115",
            "bpbd_terdekat": "BPBD Tidore (0921) 3161112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "kie_besi",
        "nama": "Gunung Kie Besi",
        "nama_lain": "Makian Island Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1357,
        "lokasi": {
            "kabupaten": "Halmahera Selatan",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 0.32,
            "lng": 127.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1988 (Erupsi Paroksismal Evakuasi Seluruh Pulau)",
        "total_erupsi_tercatat": 9,
        "ancaman_bahaya": [
            "Awan Panas ke Segala Arah Pantai",
            "Lontaran Bom Pijar",
            "Tsunami Lokal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari kawah puncak Pulau Makian.",
            "krb2": "Seluruh daratan Pulau Makian.",
            "krb1": "Jalur laut penyeberangan Makian-Bacan."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Kie Besi, Desa Waigitang (0927) 21115",
            "bpbd_terdekat": "BPBD Halmahera Selatan (0927) 22112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "moti",
        "nama": "Gunung Moti",
        "nama_lain": "Moti Island Volcano (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 950,
        "lokasi": {
            "kabupaten": "Kota Ternate",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 0.45,
            "lng": 127.4
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Kawah Kuno)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Longsor Lereng Curam"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak pulau Moti.",
            "krb2": "Lereng tengah.",
            "krb1": "Pesisir pantai desa Moti."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ternate (0921) 3121115",
            "bpbd_terdekat": "BPBD Ternate 112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "hiri",
        "nama": "Gunung Hiri",
        "nama_lain": "Hiri Island Volcano (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 630,
        "lokasi": {
            "kabupaten": "Kota Ternate",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 0.9,
            "lng": 127.32
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Longsor Tebing Laut"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak Pulau Hiri.",
            "krb2": "Lereng terjal.",
            "krb1": "Desa nelayan lingkar pesisir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gamalama (0921) 3121115",
            "bpbd_terdekat": "BPBD Ternate 112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "gamkonora",
        "nama": "Gunung Gamkonora",
        "nama_lain": "Mount Gamkonora",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1635,
        "lokasi": {
            "kabupaten": "Halmahera Barat",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 1.38,
            "lng": 127.53
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2012 (Erupsi Abu Vulkanik)",
        "total_erupsi_tercatat": 13,
        "ancaman_bahaya": [
            "Lontaran Batu Pijar",
            "Hujan Abu Lebat di Jailolo",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km dari kawah puncak memanjang.",
            "krb2": "Radius 2–4 km.",
            "krb1": "Pesisir pantai barat Halmahera."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gamkonora, Gamsungi (0922) 23115",
            "bpbd_terdekat": "BPBD Halmahera Barat 0813-5678-9012"
        },
        "riwayat_letusan": []
    },
    {
        "id": "ibu",
        "nama": "Gunung Ibu",
        "nama_lain": "Ibu Volcano Halmahera",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1325,
        "lokasi": {
            "kabupaten": "Halmahera Barat",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 1.4883,
            "lng": 127.63
        },
        "status": {
            "level": 3,
            "label": "Siaga",
            "badge_color": "amber",
            "tanggal_update": "14 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2024 - 2026 (Erupsi Berkelanjutan)",
        "total_erupsi_tercatat": 52,
        "ancaman_bahaya": [
            "Lontaran Piroklastik Pijar Radius 4-5 km",
            "Hujan Abu Lebat",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 4 km dari kawah aktif dan perluasan 5 km ke arah bukaan kawah bagian utara.",
            "krb2": "Radius 4–6 km dari pusat kawah.",
            "krb1": "Zona terdampak hujan abu tebal di kecamatan Ibu dan Ibu Utara."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Ibu, Desa Gam Ici (0922) 21189",
            "bpbd_terdekat": "BPBD Halmahera Barat 0813-5678-9012"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "Mei - Juli 2024",
                "meninggal": 0,
                "luka": 4,
                "mengungsi": 2400,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi kolom abu mencapai 5000 meter di atas puncak disertai kilat petir vulkanik spektakuler.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "dukono",
        "nama": "Gunung Dukono",
        "nama_lain": "Mount Dukono",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 1229,
        "lokasi": {
            "kabupaten": "Halmahera Utara",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 1.6933,
            "lng": 127.8944
        },
        "status": {
            "level": 2,
            "label": "Waspada",
            "badge_color": "yellow",
            "tanggal_update": "11 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "2024 - 2026 (Emisi Abu Harian)",
        "total_erupsi_tercatat": 48,
        "ancaman_bahaya": [
            "Semburan Abu Vulkanik Berulang",
            "Lontaran Bom Vulkanik di Sekitar Kawah Malupang Magiwe"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 3 km dari Kawah Malupang Magiwe.",
            "krb2": "Radius 3–5 km.",
            "krb1": "Kota Tobelo dan sekitarnya bila angin membawa abu ke timur."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Dukono, Tobelo (0924) 2622115",
            "bpbd_terdekat": "BPBD Halmahera Utara (0924) 222112"
        },
        "riwayat_letusan": [
            {
                "tahun": 2024,
                "tanggal": "Sepanjang 2024",
                "meninggal": 0,
                "luka": 0,
                "mengungsi": 0,
                "rumah_rusak": 0,
                "fasilitas_rusak": 0,
                "ringkasan": "Erupsi abu vulkanik terus-menerus mencapai tinggi 1000-2600 meter di atas kawah.",
                "sumber": "PVMBG"
            }
        ]
    },
    {
        "id": "tobaru",
        "nama": "Gunung Tobaru",
        "nama_lain": "Tobaru Volcano (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1035,
        "lokasi": {
            "kabupaten": "Halmahera Utara",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 1.63,
            "lng": 127.67
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Solfatara)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Gas Solfatara"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawah puncak Tobaru.",
            "krb2": "Lereng tengah.",
            "krb1": "Lembah sungai hilir."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Dukono (0924) 2622115",
            "bpbd_terdekat": "BPBD Halmahera Utara (0924) 222112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "jailolo",
        "nama": "Gunung Jailolo",
        "nama_lain": "Mount Jailolo (Dorman)",
        "tipe": "B",
        "kategori_aktif": false,
        "ketinggian_mdpl": 1130,
        "lokasi": {
            "kabupaten": "Halmahera Barat",
            "provinsi": "Maluku Utara",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": 1.08,
            "lng": 127.42
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "05 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "Dorman (Swarms Gempa Vulkanik)",
        "total_erupsi_tercatat": 0,
        "ancaman_bahaya": [
            "Gempa Swarm Vulkanik-Tektonik Dangkal"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Puncak kawah mati Jailolo.",
            "krb2": "Lereng Teluk Jailolo.",
            "krb1": "Pusat Kota Jailolo."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Gamkonora (0922) 23115",
            "bpbd_terdekat": "BPBD Halmahera Barat 0813-5678-9012"
        },
        "riwayat_letusan": []
    },
    {
        "id": "banda_api",
        "nama": "Gunung Banda Api",
        "nama_lain": "Banda Api Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 640,
        "lokasi": {
            "kabupaten": "Maluku Tengah",
            "provinsi": "Maluku",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": -4.525,
            "lng": 129.871
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "08 Januari 2026",
            "sumber": "PVMBG / MAGMA Indonesia"
        },
        "erupsi_terakhir": "1988 (Erupsi Eksplosif Paroksismal)",
        "total_erupsi_tercatat": 24,
        "ancaman_bahaya": [
            "Aliran Lava Menembus ke Laut",
            "Lontaran Bom Vulkanik ke Pulau Neira",
            "Awan Panas"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Seluruh Pulau Gunung Api Banda.",
            "krb2": "Pesisir barat Pulau Neira (jarak hanya 800 meter melintasi selat).",
            "krb1": "Kawasan Kepulauan Banda Neira."
        },
        "kontak": {
            "pos_pengamatan": "Pos PGA Banda Api, Neira (0910) 21115",
            "bpbd_terdekat": "BPBD Maluku Tengah (0914) 21112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "nila",
        "nama": "Gunung Nila",
        "nama_lain": "Nila Volcano Island",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 781,
        "lokasi": {
            "kabupaten": "Maluku Barat Daya",
            "provinsi": "Maluku",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": -6.73,
            "lng": 129.5
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1968 (Letusan Freatik Pulau Terpencil)",
        "total_erupsi_tercatat": 5,
        "ancaman_bahaya": [
            "Awan Panas ke Laut",
            "Gelombang Pasang Laut Banda"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2.5 km dari kawah puncak.",
            "krb2": "Seluruh pesisir Pulau Nila.",
            "krb1": "Jalur laut Kepulauan Terselatan."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ambon (0911) 351115",
            "bpbd_terdekat": "BPBD Maluku Barat Daya (0911) 31112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "serua",
        "nama": "Gunung Serua",
        "nama_lain": "Serua Volcano Island",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 641,
        "lokasi": {
            "kabupaten": "Maluku Barat Daya",
            "provinsi": "Maluku",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": -6.3,
            "lng": 130
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1921 (Letusan Kawah Danau)",
        "total_erupsi_tercatat": 6,
        "ancaman_bahaya": [
            "Lontaran Material Pijar",
            "Tsunami Vulkanik"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Pusat pulau Serua.",
            "krb2": "Pesisir pulau.",
            "krb1": "Perairan sekeliling."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ambon (0911) 351115",
            "bpbd_terdekat": "BPBD Maluku Barat Daya (0911) 31112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "teon",
        "nama": "Gunung Teon",
        "nama_lain": "Teon Island Volcano",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 655,
        "lokasi": {
            "kabupaten": "Maluku Barat Daya",
            "provinsi": "Maluku",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": -6.92,
            "lng": 129.12
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1904 (Erupsi Abu & Gas)",
        "total_erupsi_tercatat": 4,
        "ancaman_bahaya": [
            "Awan Panas",
            "Lontaran Batu"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Radius 2 km kawah puncak.",
            "krb2": "Pulau Teon.",
            "krb1": "Perairan Laut Banda."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ambon (0911) 351115",
            "bpbd_terdekat": "BPBD Maluku Barat Daya (0911) 31112"
        },
        "riwayat_letusan": []
    },
    {
        "id": "damar_wurlali",
        "nama": "Gunung Wurlali / Damar",
        "nama_lain": "Wurlali Volcano Damar Island",
        "tipe": "A",
        "kategori_aktif": true,
        "ketinggian_mdpl": 868,
        "lokasi": {
            "kabupaten": "Maluku Barat Daya",
            "provinsi": "Maluku",
            "pulau": "Maluku"
        },
        "koordinat": {
            "lat": -7.125,
            "lng": 128.675
        },
        "status": {
            "level": 1,
            "label": "Normal",
            "badge_color": "emerald",
            "tanggal_update": "06 Januari 2026",
            "sumber": "PVMBG"
        },
        "erupsi_terakhir": "1892 (Solfatara & Fumarola Sangat Aktif)",
        "total_erupsi_tercatat": 2,
        "ancaman_bahaya": [
            "Solfatara Bertekanan Tinggi",
            "Gas Belerang Pekat"
        ],
        "kawasan_rawan_bencana": {
            "krb3": "Kawah danau solfatara puncak.",
            "krb2": "Lereng tengah Pulau Damar.",
            "krb1": "Desa pesisir Wulur dan Bebar."
        },
        "kontak": {
            "pos_pengamatan": "Pos Pengamatan Ambon (0911) 351115",
            "bpbd_terdekat": "BPBD Maluku Barat Daya (0911) 31112"
        },
        "riwayat_letusan": []
    }
];
