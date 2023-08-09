function calculator(num1, num2, op, cb) {
  switch (op) {
    case "+":
      cb(num1, num2);
      break;
    case "-":
      cb(num1, num2);
      break;
    case "*":
      cb(num1, num2);
      break;
    case "/":
      cb(num1, num2);
      break;
    default:
      console.log("Number is not valid!");
  }
}

function add(num1, num2) {
  console.log(num1 + num2);
}
function sub(num1, num2) {
  console.log(num1 - num2);
}
function mul(num1, num2) {
  console.log(num1 * num2);
}
function div(num1, num2) {
  console.log(num1 / num2);
}

calculator(5, 6, "+", add);
calculator(20, 6, "-", sub);
calculator(5, 6, "*", mul);
calculator(30, 6, "/", div);
