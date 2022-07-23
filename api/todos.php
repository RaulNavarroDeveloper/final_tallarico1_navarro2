<?php header("Access-Control-Allow-Origin: *"); 

include('conexion.php');
// Armamos el query.
$query = "SELECT * FROM juegos";

// Preparamos el query.
$res = mysqli_query($cnx, $query);


$salida = [];

while($fila = mysqli_fetch_assoc($res)) {
    $salida[] = $fila;
}


//convertimos array en cadena JSON
echo json_encode($salida);

