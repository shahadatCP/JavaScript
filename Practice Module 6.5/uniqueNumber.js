// using Set and Spread Operator

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var ans = [...new Set(numbers)];
console.log(ans);

