<?php
//подключение к базе данных
if(file_exists('my.db')){
    $db = new SQLite3('my.db');
}else{
    echo "Установите базу данных - <a href='install.php'>Установить</a>";
    exit();
}
//Добавить пользователя
function add($name,$age,$city){
    $db = new SQLite3('my.db');
    $db->query("INSERT INTO user VALUES (NULL,'$name',$age,'$city')");
    $db->close();
}
//Редактировать пользователя
function update($id,$name,$age,$city){
    $db = new SQLite3('my.db');
    $db->exec("UPDATE user SET name='$name', age='$age', city='$city' WHERE id='$id'");
    $db->close();
}
//Удалить пользователя
function del($id){
    $db = new SQLite3('my.db');
    $db->query("DELETE FROM user WHERE id=$id");
    $db->close();
}
//Показать всех пользователей
function users(){
    echo "<h2>Пользователи</h2>";
    $db = new SQLite3('my.db');
    $results = $db->query("SELECT * FROM user");
    while ($row = $results->fetchArray()) {
        $id = $row['id'];
        echo "id: $id Имя: ".$row['name']." Возраст: ".$row['age']." Город: ".$row['city'];
        echo " | <a href='/?update=$id'>Изменить</a> | <a href='/?del=$id'>Удалить</a><br>";
    }
    $db->close();
}
?>