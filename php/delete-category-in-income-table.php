<?php

// получим POST данные
$category_name = $_POST['category'];

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

// Удаляем строку из таблицы category_list со
// значением в столбце category равное входной
// переменной POST запроса
$db->query("DELETE FROM income_categories 
				WHERE category = '$category_name'");

//Закрываем соединение с базой.
$db->close();