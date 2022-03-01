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