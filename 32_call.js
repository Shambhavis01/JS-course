function SetUsername(username){
    //complex DB calls 
    this.username=username
    console.log("called")
}
function createUser(username,email,passwords){
   // SetUsername(username)//not called in output
    SetUsername.call(this,username)//using call,holds the reference,passes current exec context to some other function
    this.email=email
    this.passwords=passwords
}
const kiki= new createUser("kiki","kiki@111.com","999")
console.log(kiki);