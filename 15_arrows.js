/*const user={
    username:"Mahi",
    price:222,

    welcomeMessaage:function(){
      console.log(`${this.username} welcome to website`)
   //   console.log(this)
    }
}
user.welcomeMessaage()
console.log(this)*/



/*function chai(){
    let name="xyz"
    console.log(this.name);
}
chai()*/

/*const chai = function(){
    let username="Mahi"
    console.log(this.username);
}
chai()*/
//+++++++++++++++++ARROW FUNCTION++++++++++++++++++
const chai=()=>{
    let username="Mahi"
    console.log(this.username);
}
chai()
//arrow with parameters
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(4,6));
//arrow implicit functions
const sub=(x,y)=>(x-y)
console.log(sub(5,3));

//no parameter
const user=()=>{
    console.log("hello babyyy!");
}
user();
//returning an object
const cars=()=>({name:"Mahi",age:21})
console.log(cars())
//arrow function with array methods
const myArr=[1,2,3,4]
let square=myArr.map(num=>num*num);
console.log(square);