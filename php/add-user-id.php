<?php
////Добавить пользователя
//function add($name,$age,$city){
//	$db = new SQLite3('../db/my.db');
////	$db->query("INSERT INTO user VALUES (NULL,'$name',$age,'$city')");
//	$db->query("INSERT INTO user VALUES (NULL,'3','4','5')");
//	$db->close();
//}

//Добавить пользователя
$db = new SQLite3('./db/my.db');
$db->query("INSERT INTO user VALUES (NULL,'3','4','5')");
$db->close();