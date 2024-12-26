console.log("Making Calculator")
var number1 = +prompt("Enter Number 1");
var number2 = +prompt("Enter Number 2");
var number3 = +prompt("Enter Number 3");
var number4 = +prompt("Enter Number 4");
var number5 = +prompt("Enter Number 5");
var operator = prompt("Enter operator", "+,-,*,/");
console.log(number1, "number1")
console.log(number2, "number2")
console.log(number2, "number3")
console.log(number2, "number4")
console.log(number2, "number5")
console.log(operator, "operator");
if (operator == "+") {
    console.log("Addition", number1 + number2 + number3 + number4 + number5 );
} else if (operator == "-") {
    console.log("Subtraction", number1 - number2 - number3 - number4 - number5 );
} else if (operator == "*") {
    console.log("Multiplication", number1 * number2 * number3 * number4 * number5 );
} else if (operator == "/") {
    console.log("Division", number1 / number2 / number3 / number4 / number5 );
} else {
    console.log("Invalid operator");
}