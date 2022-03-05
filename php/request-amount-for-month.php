<?php
////
//// получим POST данные
//$date = $_POST['month'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//// Запрос суммы значений столбца price за нужную дату
//$price_all = $db->query("SELECT SUM(price)
//				FROM buy_list
//				WHERE date LIKE '".$date."%'");

// Запрос суммы значений столбца price за нужную дату
$price_all = $db->query("SELECT category, SUM(price)
				FROM buy_list
				WHERE date LIKE '2022-03%'
				GROUP BY category");

// '2022-03%'

$massive = array();
while ($row = $price_all->fetchArray(SQLITE3_ASSOC)) {
	array_push($massive, $row);
}

//print_r(json_encode($massive));
//echo(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

//$row = $price_all->fetchArray();
//
//$summ_price = $row[0];
//$row = json_decode($price_all);
//print_r($row);
// закрываем соединение с базой данных
$db->close();

//// сформируем ответ
//$output = ['data' => $massive];
exit(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));
