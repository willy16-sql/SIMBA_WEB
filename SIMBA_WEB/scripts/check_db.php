<?php
try {
    require __DIR__ . '/../config/database.php';
    $count = $pdo->query('SELECT COUNT(*) FROM gunung_api')->fetchColumn();
    echo "COUNT_IN_DB: " . $count . "\n";
} catch (Exception $e) {
    echo "DB_ERR: " . $e->getMessage() . "\n";
}
?>