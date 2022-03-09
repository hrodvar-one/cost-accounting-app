<?php

// получим POST данные
$category_name = $_POST['category'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'category_list'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
               'category' TEXT(20))"))

$db->query("INSERT INTO category_list (category) VALUES ('$category_name')");

//Закрываем соединение с базой.
$db->close();
