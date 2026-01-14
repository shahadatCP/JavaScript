const prompt = require("prompt-sync")();

const mark = prompt("Enter your mark : ");

if (mark > 100 || mark < 0) {
    console.log('Invalid Input');
} else if(mark <= 100 && mark >=80){
    console.log('A+');
} else if(mark < 80 && mark >= 75){
    console.log('A');
} else if(mark < 75 && mark >= 70){
    console.log('A-');
}else if(mark < 70 && mark >= 65){
    console.log('B+');
}else if(mark < 65 && mark >= 60){
    console.log('B');
}else if(mark < 60 && mark >= 55){
    console.log('B-');
}else if(mark < 55 && mark >= 50){
    console.log('C+');
}else if(mark < 50 && mark >= 45){
    console.log('C');
}else if(mark < 45 && mark >= 40){
    console.log('D');
}else if(mark < 40 && mark >= 0){
    console.log('Fail');
}
