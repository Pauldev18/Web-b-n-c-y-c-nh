<?php
function connectDB() {
    $host = 'localhost';  // Change this to your database host
    $dbname = 'webbancaycanh';  // Database name
    $username = 'root';  // Database username
    $password = '';  // Database password

    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        exit();
    }
}
?>
