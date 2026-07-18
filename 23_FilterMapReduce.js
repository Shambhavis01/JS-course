/*const myNum=[1, 2, 3 ,4 ,5 ,6 ,7 ,8, 9, 10]
const num=myNum.filter((num)=> num>5)//returns value.,forEach don't
//const num=myNum.filter((num)=>{
  //  return num>4
//}) in case of using {} scope,return keyword is important
console.log(num);



const newNum =[]
myNum.forEach((num)=>{
    if (num>4){
        newNum.push(num)//use push for return in case of forEach

    }
})
console.log(newNum);*/


const books=[
    {title: 'Book One',genre: 'Fiction',publish: 1981,edition: 2004},

    {title: 'Book Two',genre: 'Non-Fiction',publish: 1992,edition: 2008},

    {title: 'Book Three',genre: 'Fiction',publish: 1999,edition: 2007},

    {title: 'Book Four',genre: 'Non-Fiction',publish: 1989,edition: 2010},

    {title: 'Book Five',genre: 'Fiction',publish: 2009,edition: 2014},

    {title: 'Book Six',genre: 'History',publish: 1987,edition: 2010},

    {title: 'Book Seven',genre: 'Science',publish: 1986,edition: 1996},

    {title: 'Book Eight',genre: 'Fiction',publish: 2011,edition: 2016},

    {title: 'Book Nine',genre: 'History',publish: 1981,edition: 1989},

];
const userBooks = books.filter((item)=>item.genre==='History')
console.log(userBooks);




//***********************MAPS****************************** */

/*const mynumbers=[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ]
const nums=mynumbers.map((num)=>num+10)
console.log(nums);*/
const mynumss=[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
const newnumss=mynumss.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=50)
console.log(newnumss)


 
