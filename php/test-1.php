<?php
$db = new SQLite3('../db/my.db');
$id = 4;
$results = $db->query("SELECT * FROM user WHERE id=$id");
echo ($results);
?>
