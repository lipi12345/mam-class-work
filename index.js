const num1 = Number(prompt("enter your first number"));
const num2 = Number(prompt("enter your second number"));
const num3 = Number(prompt("enter your third number"));

function finalResult() {
  document.write("Addition is" + (num1 + num2 + num3) + "<br />");
  document.write("Subtraction is" + (num1 - num2 - num3) + "<br/>");
  document.write("Multiplication is" + num1 * num2 * num3 + "<br/>");
  document.write("Division is" + num1 / num2 / num3 + "<br />");
}
finalResult();
