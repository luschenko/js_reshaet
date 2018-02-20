document.getElementById('calc').onclick = function(){
	let y = document.getElementById('nadbavka').value;
	y = parseInt(y);
	if (y>=0 && y< 3) alert('0%');
	else if (y>=3 && y< 10) alert('10%');
	else if (y>=10 && y< 20) alert('20%');
	else if (y>=20) alert('25%');
	else alert('Error');
}