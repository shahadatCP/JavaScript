const array = [
  2, 5, 1, 7, 4, 9, 11, 10, 20, 18, 17, 13, 15, 6, 3, 8, 12, 14, 16, 19,
];

console.log(array.sort((a, b) => a - b)); // Ascending Order

console.log(array.sort((a, b) => b - a)); // Descending Order
