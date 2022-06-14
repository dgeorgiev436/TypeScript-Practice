function add(n1: number, n2: number, showResult: boolean, result: string) {
  if (showResult) {
    console.log(result + (n1 + n2));
  } else {
    return n1 + n2;
  }
}

const number1 = 55;
const number2 = 2.8;
const printResult = true;
const result = "Result is : ";

add(number1, number2, printResult, result);
