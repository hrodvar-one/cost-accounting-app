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
				WHERE date LIKE '".$date."%'");

$row = $price_all->fetchArray();

$summ_price = $row[0];
//print_r($row[0]);

// закрываем соединение с базой данных
$db->close();

// сформируем ответ
$output = ['summ_price' => $summ_price];
exit(json_encode($output));
