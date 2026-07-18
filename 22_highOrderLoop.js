//**************ARRAY LOOPS *************************************/

//***********************for of**********************************
// ["" "" ""]
//[{} {} {}]
/*const arr=[1,2,3,4,5]//for array
for(const num of arr){//no for or while loop
    console.log(num);

}
const greetings="hello"//for string
for(const knockknock of greetings){
    console.log(` each char of string is ${knockknock}`);
}*/

//***************MAP******************************** */
/*const map=new Map()// for in can't be used,map is not iterable
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);//gives key-value pair
//for of on array,right syntax
for (const [key,value] of map){
    console.log(key, ':-',value);
}*/
//for of on object,for of loop doesnt work on objects,so for objects we use 'for in'

/*const Obj={
    game1:'NFS',
    game2:'Spiderman',
    game3:'Superman'
}
/*for(const [key,value] of Obj){
    console.log(key,':-',value)
}*///not a right syntax for object


//**************************FOR IN*****************************
/*
for(const key in Obj){
    //console.log(key);//to print keys
 //  console.log(Obj[key]);//to print value
 console.log(`${key} is the key for ${Obj[key]}`)
}

//for in loop on arrays?
const prog=["js","cpp","c","java","ruby","python"]
for ( const key in prog){
  //  console.log(key);//for in gives indexes in case of array 
    console.log(prog[key]);//to pint values
}
*/

//************************For each********************************

const coding=["js","ruby","java","python","cpp"]
/*coding.forEach(function(val){
    console.log(val);
})*/
coding.forEach( (item)=>{
    console.log(item);
})

/*function printMe(item){
    console.log(item);
}
coding.forEach(printMe)*/
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
//["","",""]Strings in array
//[{},{},{}] Objects in array
const mycoding=[
    {
       langName:"js",
        langfileName:"js.file"
    },
    {
       langName:"python",
        langfileName:"py.file"

    },
    {
       langName:"Css",
        langfileName:"cpp.file"
    
    }
]
    mycoding.forEach((item)=>{
        console.log(item.langName);
    })


 

