const name ="Mahi"
const greeting="Hello "+name;//string concatenation
console.log(greeting);
console.log(`${greeting} How are you?`);//string interpolation
const gameName=new String('mario');//string constructor
console.log(gameName);

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.includes('M')) 
console.log(name.endsWith('i'))
console.log(name.indexOf('a'))
console.log(name.slice(1,4))
console.log(name.replace('M','R'))
console.log(name.split(''))
console.log(name.trim())
console.log(name.charAt(0))
console.log(name.charCodeAt(0))