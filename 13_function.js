function calculateCartPrice(val1,val2,...num1){//rest,spread operator ,depends on use case
return num1
}
console.log(calculateCartPrice(200,400,500,2000))

//functions with objects
/*const cars={
    name:"BMW",
    price:4800000,
}*/
function handleObject(anyObject){
    console.log(`carname is ${anyObject.name} and price is ${anyObject.price}`)

}
//handleObject(cars)
//directly passing object into funtion without firstly creating it with a name
handleObject({
    name:"BMW",
    price:4800000
})
//passing arrays into function
const myNewArray=[1,2,3,4]//predefine array
//function define
function returnvalue(getArray){
    return getArray[1]
}
console.log(returnvalue(myNewArray));
//directly use array in function
console.log(returnvalue([200,400,500]));

