//delaration without parameters
function greet()
{ console.log("hello!");
}
greet()
//with parameters
function sum(a,b)
{
    console.log(a+b);
}
sum(3,4);
//return
function add(x,y)
{ 
    return x+y;
}
let result=add(1,2);
console.log(result);

//function expresssion
const wish=function(){
    console.log("hello");
};
wish();
function loginUserMessage(username){//or just define with a default name,if u dont pass any value than it will get print , then no need of i statement to check
    if(username===undefined){ // or write (!username)
        console.log("Please enter the user name");//to check
        return//so that it do not print further
    }
    return `${username} just logged in`
} 
console.log(loginUserMessage())