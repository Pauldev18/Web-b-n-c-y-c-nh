<?php
include '../db_connection.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idCate = $_POST['idCate'];
    $nameCate = $_POST['nameCate'];
    $description = $_POST['description'];

    $sql = "UPDATE category SET nameCate = :nameCate, description = :description WHERE idCate = :idCate AND isDelete = 0";
    $conn = connectDB();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idCate', $idCate);
    $stmt->bindParam(':nameCate', $nameCate);
    $stmt->bindParam(':description', $description);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Category updated successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Category update failed."]);
    }
}
?>
