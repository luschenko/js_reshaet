document.getElementById('check').onclick = function(){
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if (login == 'ivan' && password == '334455')
		alert('Welcome');
	else if (login == 'alex' && password == '777')
		alert('Welcome');
	else if (login == 'petr' && password == 'b5678')
		alert('Welcome');
	else alert('Incorrect login or pass');
}