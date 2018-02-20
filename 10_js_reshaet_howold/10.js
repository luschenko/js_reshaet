document.getElementById('calc').onclick = function(){
	let y = document.getElementById('year').value;
	let old = 2018 - y;
	if (old >= 16) alert ('Добро пожаловать');
	else alert('Ошибка входа');
}