//Dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());


let myCreatedDate=new Date(2026,0,1,12,30,0)
console.log(myCreatedDate.toString());


let myTimestamp=Datenow()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//to get in seconds

letnewDate=new Date()
console.log(newDate.getMonth()+10);
console.log(newDate.getDay());
console.log(`${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`);//to get in dd-mm-yyyy format