<?php
/**
 * KONFIGURASI KONEKSI DATABASE MYSQL (XAMPP)
 * SIMBA - Sistem Informasi Bencana Gunung Berapi Indonesia
 */

header('Content-Type: application/json; charset=UTF-8');

$host     = 'localhost';
$dbname   = 'simba_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Gagal terhubung ke database MySQL. Pastikan database simba_db telah di-import di phpMyAdmin.',
        'detail'  => $e->getMessage()
    ]);
    exit;
}
