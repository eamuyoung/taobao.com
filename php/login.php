<?php
	header('content-type:text/html;charset="utf-8"');
	$conn = @mysql_connect('localhost','root','');
	
	mysql_select_db('yanglihao');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['username'])){
		
	}else{
		exit('非法操作');
	}
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	
	$result = mysql_query("select * from user where username='$username' and password='$password'");
	
	if(mysql_fetch_array($result)){
		echo 1;
	}else{
		echo 0;
	}
	
?>