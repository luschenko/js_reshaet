//Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком. 
//  w3.org.ua - сайт
//  https://t.me/w3orgua - telegram

document.querySelector('#test').onmousemove = function(event){
	event = event || window.event;
	// console.log(event);
	document.querySelector('#offx').innerHTML = event.offsetX;
	document.querySelector('#offy').innerHTML = event.offsetY;
}

