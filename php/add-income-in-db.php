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
if ($db->exec("CREATE TABLE IF NOT EXISTS 'income_list'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,
               'date' INTEGER,
               'category' TEXT(20),
               'title' TEXT(20),
               'price' INTEGER(10))"))

$db->query("INSERT INTO income_list (date, category, title, price) VALUES ('$date', '$category', '$title', '$price')");

$db->close();