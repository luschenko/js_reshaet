//Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком. 
//  w3.org.ua - сайт
//  https://t.me/w3orgua - telegram

document.onclick = function(event){
	// console.log(event.target.tagName);
	event = event || window.event;
	if (event.target.tagName == 'IMG'){
		event.target.classList.add('bordered');
	}
}