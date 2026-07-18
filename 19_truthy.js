//when we simply assume that there is true value in the string
const userEmail=[]
if (userEmail){//no condition is checked here
    console.log("Got user Email");
} else{ // if empty string no value,false
    console.log("Don't have userEmail");
}//if empty array , true
//falsy values=  false,0,-0.BigInt 0n,"",null,undefined,NaN 
//truthy values="0",'false'," ",[],{},funtion(){}

//for checking array use .length
if(userEmail.length === 0){
    console.log("Array is empty")
}
//to check object
const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");

}//Nullish Coalescing Operator (??):null undefined

let val1;
let val2;
let val3;
let val4;
val1= 5 ?? 10
val2= null ?? 9//assigns value
var3= undefined ?? 15
val4= null ?? 10 ?? 20//first value
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//ternary operator
//condiion ? true : false
const price = 100
price>200 ? console.log("price is greater"): console.log("price is smaller")