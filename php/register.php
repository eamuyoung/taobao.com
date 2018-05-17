<?php
	header('content-type:text/html;charset="utf-8"');
	$conn = @mysql_connect('localhost','root','');
	
	mysql_select_db('yanglihao');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['phone']) || isset($_POST['submit'])){
		
	}else{
		exit('非法操作');
	}
	
	if(isset($_POST['phone'])){
		$username = $_POST['phone'];
		$result = mysql_query("select * from user where username='$username'");
		if(mysql_fetch_array($result)){
			echo 1;
		}else{
			echo 0;
		}
	}
	
	
	
	if(isset($_POST['submit'])){
		$username = $_POST['mobile'];
		$password = md5($_POST['password']);
		mysql_query("insert user values('$username','$password')");
		header('location:../login.html');
	}
?>