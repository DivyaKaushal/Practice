
function num (a,b){
    return( a+b);
}

const Array = [0,23,56,6,5];
document.getElementById("number1").innerHTML = Array;
const Number = document.getElementById("number2").innerHTML = Array.reduce(num);
console.log(Number);