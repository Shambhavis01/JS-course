//if
const isUserloggedIn = true
const temperature=40
if (temperature===40){
    console.log("less than 50");
//add else
}else{
console.log("temperature is greater than 50");}// out of scope,definitely print
//<,>,<=,>=,==,!=,===
//=== hes data type along with comparison

/*{

}*/ //these curly braces are the scope,what's dedined inside th scope can not be accessed outside(local),but whats define outside or globally (global)can be accessed inside(poperties)
const score =200
if(score>100){
    const power="fly"
    console.log(`User power:${power}`);
}
//console.log(`user power:${power}`);//show not defined because its defined inside the scope.
//thats why we use const and let keyword,because it gives result appropriately based on scope,meanwhile using var can get wrong output,accesses the value thats defined inside the scope

const bal=2000
if (bal>1000)console.log("test") // scope-implicit scope(in one line ,no use of {})

//nested
if (bal<500){
    console.log("less than 500");
}else if(bal<750){
    console.log("less than 750");
}else if(bal<900){
    console.log("less than 950");
}else
{
 console.log(" less than 12000");
}

//multiple condition-logial AND,OR operators
const userLoggedIn=true
const debitCard=true
const userLoggedInfromGoogle=false
const loggedInfromEmail=true
if(userLoggedIn && debitCard &&2==3){
    console.log("Allow to buy course"); 
}
if(loggedInfromEmail||userLoggedInfromGoogle){
    console.log("user logged in")
}