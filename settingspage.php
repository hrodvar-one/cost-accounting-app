<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Страница настроек</title>
	<link rel="stylesheet" type="text/css" href="styles/css/style.css">
</head>

<body>

<div class="container">
	<div class="work-with-sqlite">
		<div class="panel-create-table">
			<form name="table" action="/php/create-table.php" method="post">
				<label for="table-name">Название таблицы:</label>
				<input type="text" class="table-name_input" name="table-name" id="table-name">
				<button type="submit">Создать таблицу</button>
			</form>
			<div id="result"></div>
		</div>
		<div class="panel-delete-table">
			<form name="delete-table" action="/php/delete-table.php" method="post">
				<label for="table-name-delete">Название таблицы:</label>
				<input type="text" class="table-name_input" name="table-name-delete" id="table-name-delete">
				<button type="submit">Удалить таблицу</button>
			</form>
			<div id="result-delete"></div>
		</div>
	</div>
</div>
<script src="js/settings.js"></script>
</body>

</html>
