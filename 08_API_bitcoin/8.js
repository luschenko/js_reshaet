$(document).ready(function(){
	//getRate();
	//getHistoryRate();
	$('input[type="date"]').on('input', getHistoryRate);
});

function getRate(){
	// https://api.coindesk.com/v1/bpi/currentprice.json
	$.get(
		"https://api.coindesk.com/v1/bpi/currentprice.json",
		function(data){
			data = JSON.parse(data);
			console.log(data);
		}
	);
}

function getHistoryRate(){
	// https://api.coindesk.com/v1/bpi/currentprice.json
	$.get(
		"https://api.coindesk.com/v1/bpi/historical/close.json",
		{
			"start" : $('#date1').val(),
			"end" : $('#date2').val()
		},
		function(data){
			data = JSON.parse(data);
			console.log(data);
		}
	);
}