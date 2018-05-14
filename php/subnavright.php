<?php
	$conn = @mysql_connect('localhost','root','');
	if(!$conn){
		die('数据连接失败'.mysql_error());
	}
	//2.选择数据库，并设置字符集
	mysql_select_db('yanglihao');
	mysql_query('SET NAMES UTF8');
	
	//3.操作数据库
	
	$result = mysql_query("SELECT * FROM subnavright");
	
	$arr = array();
	for($i = 0;$i < mysql_num_rows($result);$i ++){
		$arr[$i] = mysql_fetch_array($result,MYSQL_ASSOC);
	}
	
	echo json_encode($arr);
?>