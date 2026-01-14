const prompt = require("prompt-sync")();
const year = prompt("Enter The year : ");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("The year is leap year");
} else {
  console.log("The is't leap year");
}
