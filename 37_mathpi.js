//Object.getOwnPropertyDescriptor(Math)
console.log(Math.PI);
Math.PI = 5//trying to overwrite value of PI
console.log(Math.PI);//same value in output,no overwrite occurred.
//why ?
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
const car={
      name:"BMW M5",
        price:"22000000",
        isAvailable:true,
        orderCar:function(){
            console.log("car ordered")
        }
}
console.log(car);
console.log(Object.getOwnPropertyDescriptor(car,"name"));
//here we can make changes
Object.defineProperty(car,'name',{
   // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(car,"name"));

//trying loop
for (let [key,value] of Object.entries(car)) {
    if(typeof value!=='function'){
    console.log(`${key} : ${value} `)
    }
}