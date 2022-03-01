<?php
// получим POST данные
$q = filter_var($_GET['q'], FILTER_SANITIZE_STRING);
// сформируем ответ
echo 'Ответ на вопрос «' . $q . '» ...';
