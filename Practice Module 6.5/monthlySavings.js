const prompt = require("prompt-sync")();

function monthlySavings(num1, num2) {
  const cal = num1;
  const num = num2;
  let sum = 0;
  for (let i = 0; i < cal.length; i++) {
    if (cal[i] >= 3000) {
      const temp = cal[i] * 0.2;
      cal[i] -= temp;
      sum += cal[i];
    } else {
      sum += cal[i];
    }
  }
  let final = sum - num;
  if (final == 0) {
    console.log(0);
  } else if (final > 0) {
    console.log(final);
  } else {
    console.log("earn more");
  }
}


const input1 = prompt("Enter the array: ");
const input2 = prompt("Enter the number : ");

const isArray = input1.includes(",");

if (!isArray) {
  console.log("Invalid Input");
} else {
  const array = input1.split(",").map(Number);
  const num = Number(input2);
  const ans = monthlySavings(array, num);
}
