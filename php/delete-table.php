<?php
//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Удаляем таблицу пользователей
if ($db->exec("DROP TABLE IF EXISTS user;"))
				echo "Таблица пользователей удалена<br>";

//Закрываем соединение с базой.
$db->close();