<?php

// получим POST данные
$date = $_POST['date'];
$title = $_POST['title'];
$price = $_POST['price'];
// сформируем ответ
$output = ['firstname' => $firstname, 'lastname' => $lastname];
exit(json_encode($output));

//Добавить пользователя
function add($name,$age,$city){
	$db = new SQLite3('../db/app_db.db');
//	$db->query("INSERT INTO user VALUES (NULL,'$name',$age,'$city')");
	$db->query("INSERT INTO user VALUES (NULL,'3','4','5')");
	$db->close();
}