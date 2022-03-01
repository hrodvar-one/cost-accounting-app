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

// // при нажатии на кнопку
// document.querySelector('#get').addEventListener('click', () => {
// 	getData();
// });

// // при нажатии на кнопку
// function clickAdd() {
// 	document.querySelector('#get').addEventListener('click', () => {
// 		getData();
// 	});
// }