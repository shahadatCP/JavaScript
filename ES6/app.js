// const num = 4;
// num = 8;
// console.log(num);
// let name = 'Sourov';
// name = 'Mahmud';
// console.log(name);

// const countryName = 'Bangladest';
// const country = `My county is ${countryName}`;

// console.log(country);

// const num1 = [1,2,3,4,5];
// const num2 = [21,12,33,54,75];

// console.log(...num1, ...num2);

// // console.log(...num1.max());

// console.log(Math.max(...num1), Math.max(...num2));


// const person = {
//     name : 'sourov',
//     age : 21,
//     friends : ['sani', 'mahi', 'rahi'],
// };
// // ---> object Distructuring
// const {name, age, friends} = person;
// console.log(age, name, friends);


// const names = ['mahi', 10, 'rahi'];
// // ---> array Distructuring 
// const [a,b,c] = names;
// console.log(a,b,c);

// // -- >> function return
// function sum(num1, num2){
//     const result = num1 + num2;
//     return result;
// }
// const output = sum(10,20);
// console.log(output);


// // -- >> arrow function 
// const sum2 = (num1, num2) =>{
//     return num1 + num2;
// }
// const output2 = sum(20,50);
// console.log(output2);

// -->> normal loop
const product = [
    {id:0O1, name:'xiaomi', description:'this is a phone', price:500,color:'black'},
    {id:0O2, name:'Nokia', description:'this is a phone', price:400,color:'gray'},
    {id:0O3, name:'vivo', description:'this is a phone', price:550,color:'black'},
    {id:0O4, name:'iPhone', description:'this is a phone', price:300,color:'white'},
    {id:0O5, name:'honor', description:'this is a phone', price:250,color:'black'},
]

// for(let i=0; i<product.length; i++){
//     const element = product[i];
//     if(element.color=='black'){
//         console.log(element);
//     }
// }

// // --- >>> find function
// const result = product.find(pd=>pd.id == 0O1);
// console.log(result);


// // ---- >>>> filter function
// const result = product.filter(products => products.color == 'black');
// console.log(result);

// // ---- >>> map function
// const sum = product.map(pd=>pd.color);
// console.log(sum);

// // ----- >>>> forEach function
// const result = product.forEach(pd => {
//     console.log(pd.id);
// });
// console.log(result);

