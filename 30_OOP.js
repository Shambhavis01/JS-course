//to study-------------------------------------------
///javascript and classes
//OOP
//Object-basic unit
//-collection and properties and methods
//-toLowerCase  ,toUpperCase   
//Constructor,Prototypes,classes,instances(new,this)                 
//Abstraction,Polymorphism,Encapsulation,Inheritance
//----------------------------------------------------------------
//object literal,this keyword
/*const user={
    username:"Allie",
    loginCount:5,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user details from database");
      //  console.log(`Username:${username}`)//will not print like 
        console.log(`Username:${this.username}`)//use this. keyword,define current context
        console.log(this);//whatever inside exec.context will print
    }
}
console.log(user);
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//what's in global execution,if nothing then {} will be the output
*/
//----------new keyword-----------------------------
/*const promiseOne= new Promise()
//or
const date =new Date()*/
//new keyword is used to generate new context,we call it CONSTRUCTOR FUNCTION.
function User(username,loginCount,isLoggedIn){
  this.username=username;//identiy both differently using this
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn;
  return this// even if we don't write return,still will get the output
  //we may use methods here
}
 const userOne=User("ken",10,true)
 const userTwo=User("Arya",12,false)//userTwo overwrites when we run even without console.log
 console.log(userOne);
 //to prevent this overwriting we use new keyword
 const userThree= new User("Anushree",14,true)
 const userFour= new User("Riya",15,false)//doesn't overwrites userThree
 console.log(userThree);

 // on using 'new' keyword an empty object is created that we call as instance
 //A constructor function is called using 'new' keyword,packs all arguemnts you write in this
 //using this keyword arguments get injected 