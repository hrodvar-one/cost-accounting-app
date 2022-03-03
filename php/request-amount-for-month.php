<?php

// получим POST данные
$date = $_POST['month'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//// Запрос суммы значений столбца price за нужную дату
//$db->query("SELECT SUM(price)
//				FROM buy_list
//				WHERE date = '$date'");

// Запрос суммы значений столбца price за нужную дату
$price_all = $db->query("SELECT SUM(price)
				FROM buy_list
				WHERE date = '$date'");

//echo ($price_all);

// закрываем соединение с базой данных
$db->close();

// сформируем ответ
$output = ['price_all' => $price_all];
exit(json_encode($output));
