<<?php 
include 'conexao.php';

$user=$_REQUEST['usuario'];//recebe o usuario do formulario
$pass=$_REQUEST['senha'];//recebe a senha do formulario
$consulta="SELECT * FROM usuarios WHERE usuario='$user' AND senha='$pass'";
//selecione todos os campos da tabela usuarios onde o usuario e senha 

$resultado=mysqli_query($link,$consulta)or die("Erro na consulta");
if(mysqli_num_rows($resultado)>0)
    header("location:home.html");
else{
    header("location:login.html");
}
mysqli_close($link); //fecha o banco de dados 
?>