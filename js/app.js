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


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы удаления таблицы
const elBuyListForm = document.querySelector('[name="buy-list-form"]');
const elDate = document.querySelector('[name="date"]');
const elTitle = document.querySelector('[name="title"]');
const elPrice = document.querySelector('[name="price"]');
const elResultAddPurchase = document.querySelector('#result-add-purchase');
const requestURLBuyListForm = elBuyListForm.action;

// Функция передачи значений формы Панели покупок
// через Ajax запрос в php скрипт
function sendFormAddBuyList() {
	const date = encodeURIComponent(elDate.value);
	const title = encodeURIComponent(elTitle.value);
	const price = encodeURIComponent(elPrice.value);
	const formData = 'date=' + date + '&title=' + title + '&price=' + price;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURLBuyListForm);
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
	elResultAddPurchase.textContent = 'Расходы добавлены';
}

// запуск функции отправки запроса на добавление
// расходов в соответствующие колонки
// в таблице базы данных
elBuyListForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormAddBuyList();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// скрипт вывода суммы за продукты за определённый
// месяц
const elFormStat = document.querySelector('[name="statistics-per-month-form"]');
const elMonth = document.querySelector('[name="month"]');
const elResultStatistics = document.querySelector('#result-statistics');
const requestURLsummPrice = elFormStat.action;

function sendFormSummPrice() {
	const month = encodeURIComponent(elMonth.value);
	const formData = 'month=' + month;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURLsummPrice);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		const response = xhr.response;
		elResultStatistics.innerHTML = `<ul><li>Сумма: <b>${response.summ_price}</b></li></ul>`;
	}
	xhr.send(formData);
	elResultStatistics.textContent = 'Общая сумма выведена';
}

// ----------------------------------
// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elFormStat.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormSummPrice();
});