<?php

//// получим POST данные
//$login_name = $_POST['login'];
//$password_name = $_POST['password'];

$login_name = 'administrator';
$password_name = '753951852456';

//print_r($login_name);
//print_r($password_name);

//подключение к файлу базы данных
$db = new SQLite3('../db/app_db.db');

$test_request = $db->query("SELECT login, password
				FROM users");

$massive_all = array();
while ($row = $test_request->fetchArray(SQLITE3_ASSOC))
	array_push($massive_all, $row);

//print_r($massive_all);

if ($massive_all[0]['login'] == $login_name and $massive_all[0]['password'] == $password_name) {
	//	print_r('1');
	$true_auth = 1;
} else {
	//	print_r('0');
	$true_auth = 0;
}

print_r($true_auth);

//Закрываем соединение с базой.
$db->close();

exit($true_auth);