// Функция отправки запроса к php скрипту
// который создаёт таблицу в базе данных
function getData() {
	// URL на который будем отправлять GET запрос
	const requestURL = '/php/create-table.php';
	const xhr = new XMLHttpRequest();
	xhr.open('GET', requestURL);
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		document.querySelector('#result').innerHTML = xhr.response;
	}
	xhr.send();
}

// -------------------------------------------
// Список констант для формы создания таблицы
const elForm = document.querySelector('[name="table"]');
const elTableName = document.querySelector('[name="table-name"]');
const elResult = document.querySelector('#result');
const requestURL = elForm.action;

function sendForm() {
	const tableName = encodeURIComponent(elTableName.value);
	const formData = 'table-name=' + tableName;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURL);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		// const response = xhr.response;
		// elResult.innerHTML = `<ul><li>Имя: <b>${response.test}</b></li></ul>`;
	}
	xhr.send(formData);
	elResult.textContent = 'Таблица создана';
}

// ----------------------------------
// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendForm();
});

// Список констант для формы удаления таблицы
const elFormDelete = document.querySelector('[name="delete-table"]');
const elTableNameDelete = document.querySelector('[name="table-name-delete"]');
const elResultDelete = document.querySelector('#result-delete');
const requestURLDelete = elFormDelete.action;

function sendFormDelete() {
	const tableName = encodeURIComponent(elTableNameDelete.value);
	const formData = 'table-name-delete=' + tableName;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURLDelete);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		// const response = xhr.response;
		// elResult.innerHTML = `<ul><li>Имя: <b>${response.test}</b></li></ul>`;
	}
	xhr.send(formData);
	elResultDelete.textContent = 'Таблица удалена';
}

// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elFormDelete.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormDelete();
});

// ---------------------------------------
// Функция отправки запроса к php скрипту
// который удаляет таблицу в базе данных
function getDataAboutDeletingTable() {
	// URL на который будем отправлять GET запрос
	const requestURL = '/php/delete-table.php';
	const xhr = new XMLHttpRequest();
	xhr.open('GET', requestURL);
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		document.querySelector('#result-delete').innerHTML = xhr.response;
	}
	xhr.send();
}