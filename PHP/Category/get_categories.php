<?php
include '../db_connection.php'; 

$sql = "SELECT * FROM category WHERE isDelete = 0";
$conn = connectDB();
$stmt = $conn->prepare($sql);
$stmt->execute();
$categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($categories);
?>
