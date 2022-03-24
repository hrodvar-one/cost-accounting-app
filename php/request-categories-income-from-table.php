<?php

//// получим POST данные
//$category_name = $_POST['category'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

// Запрос названий всех категорий расходов
$category_all = $db->query("SELECT category
				FROM income_categories");

$massive = array();
while ($row = $category_all->fetchArray(SQLITE3_ASSOC)) {
	array_push($massive, $row);
}

//print_r(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));

//print_r($category_all);

//Закрываем соединение с базой.
$db->close();

exit(json_encode($massive, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK));
