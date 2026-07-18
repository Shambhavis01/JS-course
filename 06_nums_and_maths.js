//**************numbers ************************/
const score=400000
const balance=new Number(1000)
console.log(balance);
console.log(score.toString());
console.log(score.toString(16).length);//hexadecimal
console.log(score.toFixed(2));
console.log(score.toExponential(2));
console.log(score.toPrecision(3));
console.log(score.valueOf());
console.log(score.toLocaleString('en-US'));
console.log(score.toLocaleString('en-IN'));
console.log(balance.toLocaleString('en-US'));

//*******************maths********************
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.7));//rounds to the nearest integer
console.log(Math.ceil(4.3));//upper value 
console.log(Math.floor(4.7));//lower value
console.log(Math.abs(-5));//absolute value..negative vaue becomes positive
console.log(Math.max(1, 2, 3, 4, 5));//returns the maximum value among the given numbers
console.log(Math.min(1, 2, 3, 4, 5));//returns the minimum value among the given numbers
console.log(Math.random());//any value from 0 to 1
console.log(Math.floor(Math.random() * 10) + 1);//to get in speciic range
console.log(Math.random());//values always between 1 and 0
const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//to get in specific range between min and max