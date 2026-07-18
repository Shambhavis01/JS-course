const marvel_heroes=["Spiderman","Ironman","Thor"]
const marvel_villains=["Thanos","Loki","Ultron"]
//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const all_characters=marvel_heroes.concat(marvel_villains)
console.log(all_characters);

marvel_heroes.push("Hulk")//push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(marvel_heroes)

/*marvel_heroes.push(marvel_villains)//push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(marvel_heroes)*/

marvel_heroes.pop()//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(marvel_heroes)

const removed_villain=marvel_villains.pop()//pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(removed_villain)
console.log(marvel_villains)

const all_characters2=[...marvel_heroes,...marvel_villains]//spread operator is used to expand an iterable (like an array) into individual elements.
console.log(all_characters2)

const another_array=[1,2,3,[4,5,6],7,[8,[9,10]]]
console.log(another_array)
const flattened_array=another_array.flat(Infinity)//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Infinity means it will flatten all levels of nested arrays.
console.log(flattened_array)

console.log(Array.isArray("Mahi"))//Array.isArray() method determines whether the passed value is an Array. In this case, it returns false because "Mahi" is a string, not an array.
console.log(Array.from("Mahi"))//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, it converts the string "Mahi" into an array of characters.
console.log(Array.from({length:5},(v,i)=>i))//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, it creates an array of length 5 and fills it with the index values (0 to 4).
console.log(Array.from({name:"Mahi"}))//gives empty array because the object does not have a length property, so it cannot be converted into an array.

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));