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

// // Функция отправки запроса к php скрипту
// // который создаёт таблицу в базе данных
// function getData() {
// 	const name = document.querySelector('#input-name-table').value;
// 	// URL на который будем отправлять GET запрос
// 	const requestURL = '/php/create-table.php?name=${name}';
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', requestURL);
// 	xhr.onload = () => {
// 		if (xhr.status !== 200) {
// 			return;
// 		}
// 		document.querySelector('#result').innerHTML = xhr.response;
// 	}
// 	xhr.send();
// }

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

// при отправке формы
elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendForm();
});

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