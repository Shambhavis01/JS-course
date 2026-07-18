//singleton in object2 part

//literals
//Object.create//constructor method
const mySym=Symbol("keys1")//declaration of the symbol
const JsUser={
    name:"Mahi",
    "full name":"Mahi XYZ",
    age:22,
    location:"Lucknow",
    email:"xy11@gmail.com",
    isloggedIm:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"mykeys1"//use square brackets for symbol
    }
console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser."full name") not allowed
console.log(JsUser["full name"])
console.log[JsUser[mySym]]//[Symbol(keys1)]:'mykeys1'
console.log(JsUser)


JsUser.email="abc@gmail.com"
//Object.freeze(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greeting2=function(){
    console.log(`hello Js user ${this.name}`);//interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());