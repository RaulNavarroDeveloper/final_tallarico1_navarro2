<?php header("Access-Control-Allow-Origin: *"); 

include('conexion.php');
$query = "SELECT * FROM discos d
          INNER JOIN canciones c on d.id_discos = c.discos_fk";

$res = mysqli_query($cnx, $query);

$salida = [];

while($fila = mysqli_fetch_assoc($res)) {
    $salida[] = $fila;
}

echo json_encode($salida);