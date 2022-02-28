<?php
/*echo "<pre>";
echo $_GET;
echo $_POST;
print_r($_GET);
print_r($_POST);*/

/*$data_json = json_encode($_GET, JSON_UNESCAPED_UNICODE);
echo $data_json;*/


$data_json = json_encode($_POST, JSON_UNESCAPED_UNICODE);
echo $data_json;


/*$data_json = json_encode($_GET, JSON_UNESCAPED_UNICODE);
echo $data_json;
*/
// echo "</pre>";
?>
