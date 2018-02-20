document.getElementById('calc').onclick = function(){
	let flat = document.getElementById('flat').value;
	//внутри flat строка
	flat = parseInt(flat);
	//число
	if (flat>=1 && flat <=20) alert('Первый подьезд');
	else if (flat >= 21 && flat <=48) alert ('Второй');
	else if (flat>=49 && flat <=90) alert ('Третий');
	else alert('Ошибка! Повторите ввод');
}