<?php
/**
 * API ENDPOINT: GET ALL VOLCANOES & ERUPTION HISTORY
 * URL: /api/get_volcanoes.php
 */

require_once __DIR__ . '/../config/database.php';

try {
    // 1. Ambil seluruh data gunung api
    $stmt = $pdo->query("SELECT * FROM `gunung_api` ORDER BY `status_level` DESC, `nama` ASC");
    $volcanoes = $stmt->fetchAll();

    // 2. Ambil riwayat letusan untuk tiap gunung
    $stmtHistory = $pdo->query("SELECT * FROM `riwayat_letusan` ORDER BY `tahun` DESC");
    $allHistories = $stmtHistory->fetchAll();

    // Petakan history berdasarkan gunung_id
    $historyMap = [];
    foreach ($allHistories as $h) {
        $gid = $h['gunung_id'];
        if (!isset($historyMap[$gid])) {
            $historyMap[$gid] = [];
        }
        $historyMap[$gid][] = [
            'tahun'           => (int)$h['tahun'],
            'tanggal'         => $h['tanggal'],
            'meninggal'       => (int)$h['meninggal'],
            'luka'            => (int)$h['luka'],
            'mengungsi'       => (int)$h['mengungsi'],
            'rumah_rusak'     => (int)$h['rumah_rusak'],
            'fasilitas_rusak' => (int)$h['fasilitas_rusak'],
            'ringkasan'       => $h['ringkasan'],
            'sumber'          => $h['sumber']
        ];
    }

    // 3. Format struktur JSON identik dengan kebutuhan Leaflet & Drawer
    $result = [];
    foreach ($volcanoes as $v) {
        $gid = $v['id'];
        $ancaman = json_decode($v['ancaman_bahaya'], true) ?: [];

        $result[] = [
            'id'             => $v['id'],
            'nama'           => $v['nama'],
            'nama_lain'      => $v['nama_lain'],
            'tipe'           => $v['tipe'],
            'kategori_aktif' => (bool)$v['kategori_aktif'],
            'ketinggian_mdpl'=> (int)$v['ketinggian_mdpl'],
            'lokasi'         => [
                'kabupaten' => $v['kabupaten'],
                'provinsi'  => $v['provinsi'],
                'pulau'     => $v['pulau']
            ],
            'koordinat'      => [
                'lat' => (float)$v['latitude'],
                'lng' => (float)$v['longitude']
            ],
            'status'         => [
                'level'          => (int)$v['status_level'],
                'label'          => $v['status_label'],
                'badge_color'    => $v['status_badge_color'],
                'tanggal_update' => $v['status_tanggal_update'],
                'sumber'         => $v['status_sumber']
            ],
            'erupsi_terakhir'        => $v['erupsi_terakhir'],
            'total_erupsi_tercatat'  => (int)$v['total_erupsi_tercatat'],
            'ancaman_bahaya'         => $ancaman,
            'kawasan_rawan_bencana'  => [
                'krb3' => $v['krb3'],
                'krb2' => $v['krb2'],
                'krb1' => $v['krb1']
            ],
            'riwayat_letusan'        => $historyMap[$gid] ?? [],
            'kontak_lokal'           => [
                'pos_pengamatan' => $v['kontak_pos_pengamatan'],
                'bpbd_terdekat'  => $v['kontak_bpbd_terdekat']
            ]
        ];
    }

    echo json_encode([
        'status' => 'success',
        'total'  => count($result),
        'data'   => $result
    ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Gagal mengambil data gunung api.',
        'detail'  => $e->getMessage()
    ]);
}
