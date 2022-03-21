<?php

//подключение к файлу базы данных
$db = new SQLite3('../../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'users'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE,
               'login' TEXT(20),
               'password' TEXT(20))"))

$db->query("INSERT INTO users (login, password) VALUES ('administrator', '753951852456')");

$db->close();