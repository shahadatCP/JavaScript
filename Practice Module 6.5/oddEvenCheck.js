const prompt = require("prompt-sync")();

const num = prompt("Enter the number : ");

if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
