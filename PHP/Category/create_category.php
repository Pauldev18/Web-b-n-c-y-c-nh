<?php
include '../db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nameCate = $_POST['nameCate'];
    $description = $_POST['description'];

    $sql = "INSERT INTO category (nameCate, description, isDelete) VALUES (:nameCate, :description, 0)";
    $conn = connectDB();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nameCate', $nameCate);
    $stmt->bindParam(':description', $description);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Category created successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Category creation failed."]);
    }
}
?>
