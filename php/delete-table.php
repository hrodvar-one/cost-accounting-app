<?php

// получим POST данные
$table_name = $_POST['table-name-delete'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Удаляем таблицу пользователей
if ($db->exec("DROP TABLE IF EXISTS '$table_name';"))
//				echo "Таблица пользователей удалена<br>";

//Закрываем соединение с базой.
$db->close();