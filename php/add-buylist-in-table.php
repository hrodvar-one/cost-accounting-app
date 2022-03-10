<?php

// получим POST данные
$date = $_POST['date'];
$category = $_POST['category'];
$title = $_POST['title'];
$price = $_POST['price'];
//// сформируем ответ
//$output = ['firstname' => $firstname, 'lastname' => $lastname];
//exit(json_encode($output));

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'expenses_list'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,
               'date' INTEGER,
               'category' TEXT(20),
               'title' TEXT(20),
               'price' INTEGER(10))"))

$db->query("INSERT INTO expenses_list (date, category, title, price) VALUES ('$date', '$category', '$title', '$price')");
//	$db->query("INSERT INTO user VALUES (NULL,'3','4','5')");
$db->close();