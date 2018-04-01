let h = document.getElementsByTagName('a'); // h - коллекция

for (let i = 0; i<h.length; i++){
	//console.log( h[i].href );
	if (h[i].getAttribute('href') == '#') {
		h[i].style.color = 'red';
	}
}