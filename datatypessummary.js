//primitive data types
// string, number, boolean, null, undefined, symbol,bigint
//not need to define type in ,it is automatically assigned by js engine 

const score=100;//number
const name="Mahi";//string
const isLoggedIn=true;//boolean
const userNull=null;//null
const userUndefined=undefined;//undefined
const symbol=Symbol('key');//symbol
const bigInt=9007199254740991n;//bigint

//non primitive ,reference data type
//object, array, function

const heros=["shaktiman","doga","nagraj"];//array
//object
let myobject={
    name:"Mahi",
    age:22,
    isLoggedIn:true
}
const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof score);//typeof operator is used to find the data type of a variable
console.log(typeof myFunction);//nonprimitive datatype is object in js