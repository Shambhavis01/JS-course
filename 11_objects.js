////singleton or with help of construtor
//const instaUser={}
//console.log(instaUser); //same output {}
const instaUser=new Object()
instaUser.name="MAHI"
instaUser.id="123abc"
instaUser.isLoggedIn=false
//console.log(instaUser);//{}

const regularUser={
    email:"abc@gmai.com",
    fullname:{
        userfullname:{
            firstname:"Mahi",
            lastname:"Sharma"
        }

    }
}
console.log(regularUser.fullname.userfullname);

const target={a:1,b:2};
const source={a:3,d:4};
//const returnedTarget=Object.assign(target,source);
console.log(target);
//console.log(returnedTarget === target);//true

const returnedTarget={...target,...source}//spread  operator
console.log(returnedTarget);

const user =[
    {
        id:1,
        email:"fjk@gmail.com"
    },
    {
        id:1,
        email:"fjk@gmail.com"
    },
    {
        id:1,
        email:"fjk@gmail.com"
    }
]
user[1].email
console.log(instaUser)
console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('isLoggedIn'));//to check whether object has th specific property or not

 const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"Mahi"
 }
 //course.courseInstructor
 const {courseInstructor:Instructor} = course//destructure
 console.log(Instructor);
/*{
"name":"mahi"
"coursename":"js"
}

 [
    {},
    {},
 ]*///strings ke form me h but this both API format  is json