<?php
include '../db_connection.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idCate = $_POST['idCate'];

    $sql = "UPDATE category SET isDelete = 1 WHERE idCate = :idCate";
    $conn = connectDB();
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':idCate', $idCate);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Category deleted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Category deletion failed."]);
    }
}
?>
