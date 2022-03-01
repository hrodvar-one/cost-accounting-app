<?php
//подключение к файлу базы данных
$db = new SQLite3('../db/my.db');

////проверка наличия таблицы в базе данных
//$tables = 'user';
//if ($tables = SHOW TABLES LIKE 'user'

////Создаем таблицу пользователей
//if ($db->exec("CREATE TABLE 'user'
//               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE ,
//               'name' VARCHAR(20),
//               'age' INT(3),
//               'city' VARCHAR(50))")) echo "Таблица пользователей создана<br>";


//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'user'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
               'name' VARCHAR(20), 
               'age' INT(3), 
               'city' VARCHAR(50))")) echo "Таблица пользователей создана<br>";

//Закрываем соединение с базой.
$db->close();