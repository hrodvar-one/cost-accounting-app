
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
		console.log(groupResponseByCategory);
		console.log(Object.keys(groupResponseByCategory).length);
		console.log(groupResponseByCategory['еда']);
		console.log(groupResponseByCategory['еда'].length)
		console.log(groupResponseByCategory['еда'][1]['price']);
		// console.log(test_array_2);

		let html = [];

		// function arraySum() {
		// 	for (let i = 0; i < backToArray.length; i++) {
		// 		for (let j = 0; j < groupResponseByCategory[i].length; j++) {
		// 			summa_2 += groupResponseByCategory['еда'][1]['price'];
		// 		}
		// 		test_array_2.push(summa_2);
		// 	}
		// }


		for (let i = 0; i < backToArray.length; i++) {
			for (let j = 0; j < groupResponseByCategory.length; j++) {
				summa_2 += groupResponseByCategory['еда'][1]['price'];
			}
			test_array_2.push(summa_2);
		}

		console.log(test_array_2);

		for (let i = 0; i < backToArray.length; i++) {
			html.push(`<button class="accordion"><span class="accordion-span">${backToArray[i]}</span></button>`);
			html.push(`<div class="panel">`);
			for (let j = 0; j < size; j++) {
				if (response[j]['category'] === backToArray[i]) {
					html.push(`<p class="accordion-p"><span class="accordion-p-span">&#8226; </span>${timeConversion(response[j]['date'])} : <b>${response[j]['title']}</b> : <b>${response[j]['price'] + ' руб.'}</b></p>`);
				}
			}
			html.push(`</div>`);
		}

		// сумма всех цен товаров
		for (let j = 0; j < size; j++) {
			summa = response[j]['price'] + summa;
		}

		// copy
		// for (let i = 0; i < size; i++) {
		// 	summa = response[i]['price'] + summa;
		// 	// html.push(`<button class="accordion">${response[i]['category']} : <b>${response[i]['SUM(price)']}</b></button>`);
		// 	html.push(`<button class="accordion">${response[i]['category']}</button>`);
		// 	html.push(`<div class="panel">`);
		// 	for (let j = 0; j < size; j++) {
		// 		if (response[i]['category'] === response[j]['category']) {
		// 			// for (let k = j; k < size; i++) {
		// 			// 	html.push(`<li>${response[i]['category']} : <b>${response[i]['SUM(price)']}</b></li>`);
		// 			// 	summa = response[i]['SUM(price)'] + summa;
		// 			// }
		// 			html.push(`<p>${response[j]['date']} : <b>${response[j]['title']}</b> : <b>${response[j]['price']}</b></p>`);
		// 			// html.push(`<p>${response[j]['date']} : <b>${response[j]['title']}</b> : <b>${response[j]['price']}</b></p>`);
		// 		}
		// 	}
		// 	// html.push(`<p>${response[i]['date']} : <b>${response[i]['title']}</b> : <b>${response[i]['price']}</b></p>`);
		// 	html.push(`</div>`);
		// }
		// copy

		html.push(`<li>Итого : <b>${summa}</b></li>`);
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
		document.getElementById('shopping-panel').className = 'hidden';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
	} else if (document.getElementById('shopping-panel').className === 'hidden') {
		document.getElementById('shopping-panel').className = 'shopping-panel';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
	}
}

// Функция скрытия/появления панели статистики на экране
//
function showHideStatisticsPanel() {
	if (document.getElementById('statistics-panel').className === 'statistics-panel') {
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	} else if (document.getElementById('statistics-panel').className === 'hidden') {
		document.getElementById('statistics-panel').className = 'statistics-panel';
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	}
}

// Функция скрытия/появления панели доходов на экране
//
function showHideIncomePanel() {
	if (document.getElementById('income-panel').className === 'income-panel') {
		document.getElementById('income-panel').className = 'hidden';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	} else if (document.getElementById('income-panel').className === 'hidden') {
		document.getElementById('income-panel').className = 'income-panel';
		document.getElementById('statistics-panel').className = 'hidden';
		document.getElementById('shopping-panel').className = 'hidden';
	}
}