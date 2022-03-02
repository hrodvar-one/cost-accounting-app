<?php
// получим POST данные
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
// сформируем ответ
$output = ['firstname' => $firstname, 'lastname' => $lastname];
exit(json_encode($output));