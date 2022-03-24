<?php

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

// Запрос названий всех категорий расходов
$summ_expenses_price = $db->query("SELECT SUM(price)
				FROM expenses_list");

$summ_income_price = $db->query("SELECT SUM(price)
				FROM income_list");

$massive_expenses = array();
while ($row = $summ_expenses_price->fetchArray(SQLITE3_ASSOC)) {
	array_push($massive_expenses, $row);
}

$massive_income = array();
while ($row = $summ_income_price->fetchArray(SQLITE3_ASSOC)) {
	array_push($massive_income, $row);
}

$balance = $massive_income[0]['SUM(price)'] - $massive_expenses[0]['SUM(price)'];

//print_r($massive_expenses[0]['SUM(price)']);
//print_r('+');
//print_r($massive_income[0]['SUM(price)']);

//print_r($balance);

//Закрываем соединение с базой.
$db->close();

//exit($balance);
exit(json_encode($balance, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

