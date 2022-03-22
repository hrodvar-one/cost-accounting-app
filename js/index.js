// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Список констант для формы добавления покупок
const formSignin = document.querySelector('[name="form-signin"]');
const formLogin = document.querySelector('[name="login"]');
const formPassword = document.querySelector('[name="password"]');
const requestURLformSignin = formSignin.action;

// Функция передачи значений формы Панели покупок
// через Ajax запрос в php скрипт
function sendFormSignin() {
	const login = encodeURIComponent(formLogin.value);
	const password = encodeURIComponent(formPassword.value);
	const formData = 'login=' + login + '&password=' + password;
	const xhr = new XMLHttpRequest();
	xhr.open('POST', requestURLformSignin);
	// xhr.responseType = 'json';
	xhr.responseType = 'text';
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status !== 200) {
			return;
		}
		const response = xhr.response;
		console.log(response);

		if (response === '1') {
			window.location.href="../app.html";
		} else {
			alert('Введите верный пароль');
		}
		// elResult.innerHTML = `<ul><li>Имя: <b>${response.test}</b></li></ul>`;
	}
	xhr.send(formData);
	// elResultAddPurchase.textContent = 'Расходы добавлены';
}

// запуск функции отправки запроса на добавление
// расходов в соответствующие колонки
// в таблице базы данных
formSignin.addEventListener('submit', (e) => {
	e.preventDefault();
	sendFormSignin();
});
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<