<?php

// получим POST данные
$date = $_POST['date'];
$title = $_POST['title'];
$price = $_POST['price'];
//// сформируем ответ
//$output = ['firstname' => $firstname, 'lastname' => $lastname];
//exit(json_encode($output));

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'buy_list'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,
               'date' INTEGER,
               'title' TEXT(20),
               'price' INTEGER(10))"))

$db->query("INSERT INTO buy_list (date, title, price) VALUES ('$date', '$title', '$price')");
//	$db->query("INSERT INTO user VALUES (NULL,'3','4','5')");
$db->close();