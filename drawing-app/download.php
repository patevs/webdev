<?php
// got a file
$file = $_GET['file'];
// told php its a png
header('Content-type: image/png');
// told php its an attachment
header("Content-disposition: attachment; filename=canvasoutput.png");
// spit out file
readfile($file);

?>