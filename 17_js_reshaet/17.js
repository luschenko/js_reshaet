// Не знаю подойдёт ли вам такая задачка. Есть массив строк в каком находятся значения в рх, ем и тд. Нужно перевести все значения в числа после чего удалить все отрицательные и отсортировать массив.

let size = ['15px', '12pt', '34em', '-3px', '2%'];

function toNum(arr) {
	let out = [];
	for (let i=0; i<arr.length; i++){
		arr[i] = parseFloat(arr[i]);
		if (arr[i]>=0) out.push(arr[i]);
	}
	out.sort(function(a,b){
		return a-b;
	});
	return out;
}

function toNum2(arr){
	let newArr = arr.map(function(sz){
		return parseFloat(sz);
	});
	newArr = newArr.filter(function(sz){
		if (sz>0) return sz;
	});
	newArr.sort(function(a,b){
		return a-b;
	});

	return newArr;
}

console.log( toNum2(size) );
