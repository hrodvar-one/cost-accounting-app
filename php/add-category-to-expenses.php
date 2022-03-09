<?php

// получим POST данные
$category_name = $_POST['category-input'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS 'buy_list'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
               'date' INTEGER, 
               'title' VARCHAR(20), 
               'price' INTEGER(10))"))

//Закрываем соединение с базой.
	$db->close();
