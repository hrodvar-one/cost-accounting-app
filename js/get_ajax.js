// Данные для передачи на сервер допустим id товаров и его количество
let id_product = 321;
let qty_product = 2;

// Создаём объект класса XMLHttpRequest
const request = new XMLHttpRequest();

/*  Составляем строку запроса и кладем данные, строка состоит из:
пути до файла обработчика ? имя в GET запросе где будет лежать значение запроса id_product и
через & мы передаем количество qty_product. */
// const url = "ajax_quest.php?id_product=" + id_product + "&qty_product=" + qty_product;
const url = "ajax_quest.php" + id_product + "&qty_product=" + qty_product;

/* Здесь мы указываем параметры соединения с сервером, т.е. мы указываем метод соединения GET,
а после запятой мы указываем путь к файлу на сервере который будет обрабатывать наш запрос. */
request.open('GET', url);

// Указываем заголовки для сервера, говорим что тип данных, - контент который мы хотим получить должен быть не закодирован.
request.setRequestHeader('Content-Type', 'application/x-www-form-url');

// Здесь мы получаем ответ от сервера на запрос, лучше сказать ждем ответ от сервера
request.addEventListener("readystatechange", () => {

	/*   request.readyState - возвращает текущее состояние объекта XHR(XMLHttpRequest) объекта,
	бывает 4 состояния 4-е состояние запроса - операция полностью завершена, пришел ответ от сервера,
	вот то что нам нужно request.status это статус ответа,
	нам нужен код 200 это нормальный ответ сервера, 401 файл не найден, 500 сервер дал ошибку и прочее...   */
	if (request.readyState === 4 && request.status === 200) {

		// выводим в консоль то что ответил сервер
		console.log( request.responseText );
	}
});

// Выполняем запрос
request.send();