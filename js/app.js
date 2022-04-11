// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Модуль запрета перехода
//
const indexUrl = "http://localhost:9001/index.html";
// const indexUrl = "http://vhost250618.ispsite.ru/index.html";
const errorUrl = "http://localhost:9001/404.html";
// const errorUrl = "http://vhost250618.ispsite.ru/404.html";
if (document.referrer !== indexUrl) {
	window.location = errorUrl;
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы создания таблицы
const elForm = document.querySelector('[name="table"]');
const elTableName = document.querySelector('[name="table-name"]');
const elResult = document.querySelector('#result');
const requestURL = elForm.action;

function sendForm() {
	const tableName = encodeURIComponent(elTableName.value);
	if (tableName === '') {
		alert('Введите название таблицы');
		return;
	}
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

// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendForm();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы удаления таблицы
const elFormDelete = document.querySelector('[name="delete-table"]');
const elTableNameDelete = document.querySelector('[name="table-name-delete"]');
const elResultDelete = document.querySelector('#result-delete');
const requestURLDelete = elFormDelete.action;

function sendFormDelete() {
	const tableName = encodeURIComponent(elTableNameDelete.value);
	if (tableName === '') {
		alert('Введите название таблицы');
		return;
	}
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
	fullBalance()
}

// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elFormDelete.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormDelete();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Функция отправки запроса на очистку расходов
function sendFormClearExpenses() {
	const date = encodeURIComponent(document.querySelector('[name="clear-expenses"]').value);
	const formData = 'date=' + date;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', document.querySelector('[name="clear-expenses-form"]').action);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	fullBalance()
}

// запуск функции отправки запроса на очистку
// расходов за выбранный месяц
// в таблице базы данных
document.querySelector('[name="clear-expenses-form"]').addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormClearExpenses();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Функция отправки запроса на очистку доходов
function sendFormClearIncome() {
	const date = encodeURIComponent(document.querySelector('[name="clear-income"]').value);
	const formData = 'date=' + date;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', document.querySelector('[name="clear-income-form"]').action);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	fullBalance()
}

// запуск функции отправки запроса на очистку
// расходов за выбранный месяц
// в таблице базы данных
document.querySelector('[name="clear-income-form"]').addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormClearIncome();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы добавления покупок
const elBuyListForm = document.querySelector('[name="buy-list-form"]');
const elDate = document.querySelector('[name="date"]');

const elCategory = document.querySelector('[name="category"]');
const elTitle = document.querySelector('[name="title"]');
const elPrice = document.querySelector('[name="price"]');
const elResultAddPurchase = document.querySelector('#result-add-purchase');
const requestURLBuyListForm = elBuyListForm.action;

// Функция передачи значений формы Панели расходов
// через Ajax запрос в php скрипт
function sendFormAddBuyList() {
	const date = encodeURIComponent(elDate.value);
	const category = encodeURIComponent(elCategory.value);
	const title = encodeURIComponent(elTitle.value);
	const price = encodeURIComponent(elPrice.value);
	if (date === '' || category === '' || title === '' || price === '') {
		alert('Введите данные');
		return;
	}
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
	fullBalance();
	// elResultAddPurchase.textContent = 'Расходы добавлены';
}

// запуск функции отправки запроса на добавление
// расходов в соответствующие колонки
// в таблице базы данных
elBuyListForm.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormAddBuyList();
	fullBalance();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Панель статистики.
// Скрипт вывода суммы за продукты за определённый
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

		console.log(response);
		const size = Object.keys(response).length;

		//
		let test_array = [];

		for (let i = 0; i < size; i++) {
			test_array.push(response[i]['category']);
		}

		const uniqueSet = new Set(test_array);
		const backToArray = [...uniqueSet];

		console.log(test_array);
		console.log(backToArray);
		console.log(backToArray[0]);

		console.log(backToArray.length);

		// console.log(response[0]);
		// console.log(response[0]['category']);
		// console.log(size);
		let summa = 0;
		let summa_2 = 0;
		let test_array_2 = [];

		// Функция группировки response по category
		const groupResponseByCategory = response.reduce((group, product) => {
			const { category } = product;
			group[category] = group[category] ?? [];
			group[category].push(product);
			return group;
		}, {});
		// console.log(groupResponseByCategory);
		// console.log(Object.keys(groupResponseByCategory).length);
		// console.log(groupResponseByCategory['еда']);
		// console.log(groupResponseByCategory['еда'].length)
		// console.log(groupResponseByCategory['еда'][0]['price']);

		let html = [];

		// функция суммирования значения цены
		function sumPricesByCategory (categoryName) {
			summa_2 = 0;
			for (let i = 0; i < groupResponseByCategory[categoryName].length; i++) {
				summa_2 += groupResponseByCategory[categoryName][i]['price'];
			}
			return summa_2;
		}

		for (let i = 0; i < backToArray.length; i++) {
			html.push(`<button class="accordion"><span class="accordion-span">${backToArray[i]} : ${sumPricesByCategory(backToArray[i])}</span></button>`);
			html.push(`<div class="panel">`);
			for (let j = 0; j < size; j++) {
				if (response[j]['category'] === backToArray[i]) {
					html.push(`<p class="accordion-p"><span class="accordion-p-span">&#8226; </span>${timeConversion(response[j]['date'])} : <b>${response[j]['title']}</b> <b>${response[j]['price'] + ' руб.'}</b></p>`);
				}
			}
			html.push(`</div>`);
		}

		// сумма всех цен товаров
		for (let j = 0; j < size; j++) {
			summa = response[j]['price'] + summa;
		}

		html.push(`<li class="accordion-body-li"><span class="accordion-body-li-span">Итого : <b>${summa}</b></span></li>`);
		elResultStatistics.innerHTML = html.join('');

		// Вторая раскрывающаяся панель (аккордеон)
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
	}
	xhr.send(formData);
	// elResultStatistics.textContent = 'Общая сумма выведена';
}

// запуск функции отправки запроса на создание таблицы
// в базе данных при отправке формы
elFormStat.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormSummPrice();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// функция удаления категории из общего списка
// категорий расходов
function deleteCategory() {
	const form = document.querySelector('[name="category-delete-input"]');
	const category = encodeURIComponent(form.value);
	if (category === 'none') {
		alert('Выберите категорию');
		return;
	}
	// console.log(category);
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
// Список констант для формы добавления новой
// категории расходов
const elNewCategoryForm = document.querySelector('[name="add-new-category"]');
const elNewCategory = document.querySelector('[name="category-input"]');
// const elResultAddPurchase = document.querySelector('#result-add-purchase');
const requestURLNewCategoryForm = elNewCategoryForm.action;

// Функция передачи значения формы Добавить категорию расходов
// через Ajax запрос в php скрипт
function sendFormAddNewCategory() {
	const category = encodeURIComponent(elNewCategory.value);
	if (category === '') {
		alert('Введите категорию');
		return;
	}
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
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Функция сброса введённых данных в форму
// добавления расходов
function buyListFormReset() {
	let date = document.getElementById("date");
	date.value = 'none';
	let category = document.getElementById("category");
	category.value = '';
	let title = document.getElementById("title");
	title.value = '';
	let price = document.getElementById("price");
	price.value = '';
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Панель доходов
//
// Функция передачи значений формы Панели доходов
// через Ajax запрос в php скрипт
function sendFormAddIncomeList() {
	const date = encodeURIComponent(document.querySelector('[name="income-date"]').value);
	const category = encodeURIComponent(document.querySelector('[name="income-category"]').value);
	const title = encodeURIComponent(document.querySelector('[name="income-title"]').value);
	const price = encodeURIComponent(document.querySelector('[name="income-price"]').value);
	if (date === '' || category === '' || title === '' || price === '') {
		alert('Введите данные');
		return;
	}
	const formData = 'date=' + date + '&category=' + category + '&title=' + title + '&price=' + price;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', document.querySelector('[name="income-list-form"]').action);
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
	fullBalance();
	// elResultAddPurchase.textContent = 'Расходы добавлены';
}

// запуск функции отправки запроса на добавление
// доходов в соответствующие колонки
// в таблице базы данных
document.querySelector('[name="income-list-form"]').addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormAddIncomeList();
});

// Функция передачи значения формы Добавить категорию
// панели доходов через Ajax запрос в php скрипт
//
function sendFormAddNewIncomeCategory() {
	const category = encodeURIComponent(document.querySelector('[name="category-income-input"]').value);
	if (category === '') {
		alert('Введите категорию');
		return;
	}
	const formData = 'category=' + category;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', document.querySelector('[name="add-new-income-category"]').action);
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	requestCategoriesIncomeFromDB();
}

// запуск функции отправки запроса на добавление
// новой категории доходов в соответствующую таблицу
// базы данных
document.querySelector('[name="add-new-income-category"]').addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormAddNewIncomeCategory();
	// делаем поле ввода пустым после отправки данных на сервер
	document.getElementById("category-income-input").value = "";
});

// функция удаления категории из общего списка
// категорий доходов
function deleteIncomeCategory() {
	const form = document.querySelector('[name="category-income-delete-input"]');
	const category = encodeURIComponent(form.value);
	if (category === 'none') {
		alert('Выберите категорию');
		return;
	}
	console.log(category);
	const formData = 'category=' + category;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/delete-category-in-income-table.php');
	xhr.responseType = 'json';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
	}
	xhr.send(formData);
	requestCategoriesIncomeFromDB();
}

document.querySelector('[name="delete-new-income-category"]').addEventListener('submit', (e) => {
	e.preventDefault();
	deleteIncomeCategory();
});

// функция передачи списка категорий доходов в
// выпадающий список
function requestCategoriesIncomeFromDB() {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/request-categories-income-from-table.php');
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
		document.querySelector('#income-category').innerHTML = html.join('');
		document.querySelector('#category-income-delete-input').innerHTML = html.join('');
	}
	xhr.send();
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Функция сброса введённых данных в форму
// добавления доходов
function incomeListFormReset() {
	let date = document.getElementById("income-date");
	date.value = 'none';
	let category = document.getElementById("income-category");
	category.value = '';
	let title = document.getElementById("income-title");
	title.value = '';
	let price = document.getElementById("income-price");
	price.value = '';
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Функция вывода баланса с учётом расходов и
// доходов
function fullBalance() {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/php/request-full-balance.php');
	// xhr.responseType = 'json';
	// xhr.responseType = 'text';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		const response = xhr.response;
		// console.log(response);
		// console.log(typeof response);

		let numberResponse = Number(response);
		// console.log(testOne);
		// console.log(typeof testOne);

		let html = [];
		html.push(`<span class="header-output-span" id="header-output-span">Баланс ${response} Руб</span>`);
		document.querySelector('#header-output').innerHTML = html.join('');
		// если общий баланс меньше нуля, то цвет блока меняется на красный
		if (numberResponse < 0) {
			let spanHeaderElement = document.querySelector('#header-output-span');
			spanHeaderElement.style.backgroundColor = 'red';
		}
	}
	xhr.send();
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Функция содержащая три функции, которые
// должны выполняться при загрузке страницы
function unionThreeFunctionsForWindowOnload() {
	fullBalance();
	requestCategoriesFromDB();
	requestCategoriesIncomeFromDB();
}

// Загрузка списка категорий из БД в выпадающий
// список категорий при загрузке страницы сайта
window.onload = unionThreeFunctionsForWindowOnload;

// Функция конвертации даты
//
function timeConversion(date_string) {
	let monthString = date_string.substring(6, 7);
	let new_string = '';
	if (monthString === '1') {
		new_string = ' янв.';
	} else if (monthString === '2') {
		new_string = ' фев.';
	} else if (monthString === '3') {
		new_string = ' марта';
	} else if (monthString === '4') {
		new_string = ' апр.';
	} else if (monthString === '5') {
		new_string = ' май';
	} else if (monthString === '6') {
		new_string = ' июнь';
	} else if (monthString === '7') {
		new_string = ' июль';
	} else if (monthString === '8') {
		new_string = ' авг.';
	} else if (monthString === '9') {
		new_string = ' сен.';
	} else if (monthString === '10') {
		new_string = ' окт.';
	} else if (monthString === '11') {
		new_string = ' ноя.';
	} else if (monthString === '12') {
		new_string = ' дек.';
	}

	return (date_string.substring(date_string.length - 2) + new_string);
}

// Функция скрытия/появления панели расходов на экране
//
function showHideExpensePanel() {
	if (document.getElementById('shopping-panel').className === 'shopping-panel') {
		document.getElementById('work-with-sqlite').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
	} else if (document.getElementById('shopping-panel').className === 'hidden') {
		document.getElementById('shopping-panel').className = 'shopping-panel';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('work-with-sqlite').className = 'hidden';
	}
}

// Функция скрытия/появления панели статистики на экране
//
function showHideStatisticsPanel() {
	if (document.getElementById('statistics-panel').className === 'statistics-panel') {
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('work-with-sqlite').className = 'hidden';
	} else if (document.getElementById('statistics-panel').className === 'hidden') {
		document.getElementById('statistics-panel').className = 'statistics-panel';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('work-with-sqlite').className = 'hidden';
	}
}

// Функция скрытия/появления панели доходов на экране
//
function showHideIncomePanel() {
	if (document.getElementById('income-panel').className === 'income-panel') {
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('work-with-sqlite').className = 'hidden';
	} else if (document.getElementById('income-panel').className === 'hidden') {
		document.getElementById('income-panel').className = 'income-panel';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('work-with-sqlite').className = 'hidden';
	}
}

// Функция скрытия/появления панели настроек на экране
//
function showHideSettingsPanel() {
	if (document.getElementById('work-with-sqlite').className === 'work-with-sqlite') {
		document.getElementById('work-with-sqlite').className = 'hidden';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	} else if (document.getElementById('work-with-sqlite').className === 'hidden') {
		document.getElementById('work-with-sqlite').className = 'work-with-sqlite';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	}
}

// Ждём события клик на кнопку Выйти(Logout)
const buttonLogout = document.querySelector('[id="header-button-logout"]');
buttonLogout.addEventListener("click", () => window.location.href="../index.html");