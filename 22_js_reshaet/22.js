console.log(Math.PI);
let PI = 0;
let a = 1;
let b = 3;

myPi();

function myPi(){
    PI +=(4/a) - (4/b);
    a = a+4;
    b = b+4;
    console.log(PI);
    setTimeout(myPi,300);
}