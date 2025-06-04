<?php
$link=mysqli_connect("localhost", "root", "")or die("Não achei o mysql");
//conecta no SGBD
mysqli_select_db($link, "sanquim")or die("Não achei o banco de dados");
//conecta no banco
?>