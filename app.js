function add(n1, n2, showResult, result) {
    if (showResult) {
        console.log(result + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 55;
var number2 = 2.8;
var printResult = true;
var result = "Result is : ";
add(number1, number2, printResult, result);
