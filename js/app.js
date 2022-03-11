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
// Список констант для формы добавления покупок
const elBuyListForm = document.querySelector('[name="buy-list-form"]');
const elDate = document.querySelector('[name="date"]');

const elCategory = document.querySelector('[name="category"]');
const elTitle = document.querySelector('[name="title"]');
const elPrice = document.querySelector('[name="price"]');
const elResultAddPurchase = document.querySelector('#result-add-purchase');
const requestURLBuyListForm = elBuyListForm.action;

// Функция передачи значений формы Панели покупок
// через Ajax запрос в php скрипт
function sendFormAddBuyList() {
	const date = encodeURIComponent(elDate.value);
	const category = encodeURIComponent(elCategory.value);
	const title = encodeURIComponent(elTitle.value);
	const price = encodeURIComponent(elPrice.value);
	const formData = 'date=' + date + '&category=' + category + '&title=' + title + '&price=' + price;
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
	// elResultAddPurchase.textContent = 'Расходы добавлены';
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
const elResultStatistics = document.querySelector('#result-statistics-one');
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
		// Вычисляем количество элементов в объекте
		// и присваиваем постоянной size
		const size = Object.keys(response).length

		// console.log(response);
		// console.log(response[0]);
		// console.log(response[0]['category']);
		// console.log(size);
		let summa = 0;
		let html = [];
		// for (let i = 0; i < size; i++) {
		// 	html.push(`<li>${response[i]['category']} : <b>${response[i]['SUM(price)']}</b></li>`);
		// 	summa = response[i]['SUM(price)'] + summa;
		// 	// console.log(summa);
		// }
		// html.push(`<li>Итого : <b>${summa}</b></li>`);
		// elResultStatistics.innerHTML = html.join('');

		for (let i = 0; i < size; i++) {
			summa = response[i]['SUM(price)'] + summa;
			html.push(`<button class="accordion">${response[i]['category']} : <b>${response[i]['SUM(price)']}</b></button>`);
			html.push(`<div class="panel">`);
			html.push(`<p>Lorem ipsum...</p>`);
			html.push(`</div>`);

			// console.log(summa);
		}
		// html.push(`<li>Итого : <b>${summa}</b></li>`);
		elResultStatistics.innerHTML = html.join('');

		// let i = 0;
		// while (i <= size) {
		// 	elResultStatistics.innerHTML = `<ul><li>${response[i]['category']} : <b>${response[i]['SUM(price)']}</b></li></ul>`;
		// 	i = i + 1;
		// }

		// function getListContent() {
		// 	let fragment = new DocumentFragment();
		//
		// 	for(let i=0; i<=size; i++) {
		// 		let li = document.createElement('li');
		// 		li.append({response[i]['category']}{response[i]['SUM(price)']});
		// 		fragment.append(li);
		// 	}
		//
		// 	return fragment;
		// }

		// elResultStatistics.innerHTML =

		// elResultStatistics.innerHTML = `<ul><li>${response[0]['category']} : <b>${response[0]['SUM(price)']}</b></li></ul>`;
		// elResultStatisticsTwo.innerHTML = `<ul><li>${response[1]['category']} : <b>${response[1]['SUM(price)']}</b></li></ul>`;
	}
	xhr.send(formData);
	elResultStatistics.textContent = 'Общая сумма выведена';
}

// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elFormStat.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormSummPrice();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// функция удаления категории из общего списка
// категорий
function deleteCategory() {
	const form = document.querySelector('[name="category-delete-input"]');
	const category = encodeURIComponent(form.value);
	console.log(category);
	const formData = 'category=' + category;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/delete-category-in-expenses-table.php');
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	requestCategoriesFromDB();
}

document.querySelector('[name="delete-new-category"]').addEventListener('submit', (e) => {
	e.preventDefault();
	deleteCategory();
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы добавления новой категории
const elNewCategoryForm = document.querySelector('[name="add-new-category"]');
const elNewCategory = document.querySelector('[name="category-input"]');
// const elResultAddPurchase = document.querySelector('#result-add-purchase');
const requestURLNewCategoryForm = elNewCategoryForm.action;

// Функция передачи значения формы Добавить категорию
// через Ajax запрос в php скрипт
function sendFormAddNewCategory() {
	const category = encodeURIComponent(elNewCategory.value);
	const formData = 'category=' + category;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURLNewCategoryForm);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	requestCategoriesFromDB();
}

// запуск функции отправки запроса на добавление
// новой категории в соответствующую таблицу
// базы данных
elNewCategoryForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormAddNewCategory();
	// делаем поле ввода пустым после отправки данных на сервер
	document.getElementById("category-input").value = "";
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Список констант для формы удаления строки в таблице
// const elFormDelete = document.querySelector('[name="delete-table"]');
// const elTableNameDelete = document.querySelector('[name="table-name-delete"]');
// const elResultDelete = document.querySelector('#result-delete');
// const requestURLDelete = elFormDelete.action;
//
// function sendCategoryDelete() {
// 	const tableName = encodeURIComponent(elTableNameDelete.value);
// 	const formData = 'table-name-delete=' + tableName;
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('POST', requestURLDelete);
// 	xhr.responseType = 'json';
// 	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 	xhr.onload = () => {
// 		if (xhr.status !== 200) {
// 			return;
// 		}
// 		// const response = xhr.response;
// 		// elResult.innerHTML = `<ul><li>Имя: <b>${response.test}</b></li></ul>`;
// 	}
// 	xhr.send(formData);
// 	elResultDelete.textContent = 'Таблица удалена';
// }
//
// // запуск функции отправки запроса на создание таблицы
// // в базе данных при отправке формы
// elFormDelete.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	sendCategoryDelete();
// });
// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// функция передачи списка категорий в
// выпадающий список
function requestCategoriesFromDB() {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/request-categories-from-table.php');
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		const response = xhr.response;

		// Вычисляем количество элементов в объекте
		// и присваиваем постоянной size
		const size = Object.keys(response).length

		// console.log(response);
		// console.log(response[0]);
		// console.log(response[0]['category']);
		// console.log(size);

		let html = [];
		html.push(`<option value="none" hidden="">Выберите тип</option>`);
		for (let i = 0; i < size; i++) {
			html.push(`<option value="${response[i]['category']}">${response[i]['category']}</option>`);
			// console.log(summa);
		}
		// addselecttest.innerHTML = html.join('');
		document.querySelector('#category').innerHTML = html.join('');
		document.querySelector('#category-delete-input').innerHTML = html.join('');
	}
	xhr.send();
}

// Загрузка списка категорий из БД в выпадающий
// список категорий при загрузке страницы сайта
window.onload = requestCategoriesFromDB;

// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // блок выполнения раскрытия
// const accordion = document.getElementsByClassName('container-accordion');
//
// for (let i=0; i<accordion.length; i++) {
// 	accordion[i].addEventListener('click', function () {
// 		this.classList.toggle('active')
// 	})
// }


// Вторая раскрывающаяся панель
//
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		/* Переключение между добавлением и удалением класса "active",
		чтобы выделить кнопку, управляющую панелью */
		this.classList.toggle("active");

		/* Переключение между скрытием и отображением активной панели */
		let panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}