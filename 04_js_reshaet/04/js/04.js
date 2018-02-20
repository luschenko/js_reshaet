
//  Сайт: http://w3.org.ua
//  Телеграм: https://t.me/w3orgua

// задача: есть progress bar который должен заполняться за заданное количество времени. Время задает пользователь.

function userProgress(time){
    var start = 0;
    var time = Math.round(time*1000/100);
    var progressElement = document.getElementById('user-progess'); //элемент прогресс бара
    var intervalId=setInterval(function(){
        if (start>100) {
            clearInterval(intervalId);
            userProgressCallBack();
        }
        else {
          progressElement.value = start;
        }
        start++;
    }, time);
}

function userProgressCallBack() {
    //your code
    document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(1);