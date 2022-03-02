<?php

//// получим POST данные
//$table_name = $_POST['table-name'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Создаем таблицу пользователей
if ($db->exec("CREATE TABLE IF NOT EXISTS '$table_name'
               ('id' INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , 
               'name' VARCHAR(20), 
               'age' INT(3), 
               'city' VARCHAR(50))"))
//	echo "Таблица пользователей создана<br>";

//Закрываем соединение с базой.
	$db->close();