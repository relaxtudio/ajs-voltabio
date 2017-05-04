<?php
$a	= "localhost"; //server
$b	= "root"; //username
$c	= ""; //password
$d	= "ajs_career"; //db

$db	= mysqli_connect($a,$b,$c,$d)
	or die (mysqli_error($db)); 
?>