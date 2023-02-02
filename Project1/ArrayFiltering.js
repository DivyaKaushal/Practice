
function shorting (a){
    return(a > 25);
}

const array = [1,23,45,22,2,12,54,18,43.29];
document.getElementById("number1").innerHTML = array;
const Number = document.getElementById("number2").innerHTML = array.filter(shorting);
console.log(Number);