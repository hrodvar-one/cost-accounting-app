<?php

//// получим POST данные
//$table_name = $_POST['table-name'];

//подключение к файлу базы данных
$db = new SQLite3('../../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'users'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE,
               'login' TEXT(20),
               'password' TEXT(20))"))

//Закрываем соединение с базой.
	$db->close();
