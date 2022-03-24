<?php

// получим POST данные
$date = $_POST['date'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//Удаляем строки из таблицы расходов
$db->query("DELETE FROM income_list 
				WHERE date LIKE '".$date."%'");

//Закрываем соединение с базой.
$db->close();
