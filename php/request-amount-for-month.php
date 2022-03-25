<?php
//
// получим POST данные
$date = $_POST['month'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

//// Запрос суммы значений столбца price за нужную дату
//$price_all = $db->query("SELECT SUM(price)
//				FROM buy_list
//				WHERE date LIKE '".$date."%'");

//// Запрос суммы значений столбца price за нужную дату
//$price_all = $db->query("SELECT category, SUM(price)
//				FROM expenses_list
//				WHERE date LIKE '2022-03%'
//				GROUP BY category");

// '".$date."%'
// '2022-03%'

$expenses_request = $db->query("SELECT date, category, title, price
				FROM expenses_list
				WHERE date LIKE '".$date."%'");

//$massive = array();
//while ($row = $price_all->fetchArray(SQLITE3_ASSOC)) {
//	array_push($massive, $row);
//}

$massive_all = array();
while ($row = $expenses_request->fetchArray(SQLITE3_ASSOC))
	array_push($massive_all, $row);

//print_r(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));
//print_r('                         ');
//print_r(json_encode($massive_all, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));
//echo(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

// закрываем соединение с базой данных
$db->close();

exit(json_encode($massive_all, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

