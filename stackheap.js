//stack(Primitive),heap(Reference,non-primitive)
//stack is used to store primitive data types and heap is used to store non-primitive data types
/*let myname="Mahi"//stored in stack
let anothername=myname//stored in stack
console.log(myname);//Mahi
console.log(anothername);//Mahi
anothername="Rohit"//changed the value of anothername but it does not affect myname because they are stored in different memory locations in stack
console.log(myname);//Mahi
console.log(anothername);//Rohit*/
//heap
let myobject={
    name: "Mahi",
    age: 25
};
let anotherobject=myobject;
console.log(myobject.name);//Mahi
console.log(anotherobject.name);//Mahi
anotherobject.name="Rohit";//changed the value of anotherobject.name and it also affects myobject.name because they are stored in the same memory location in heap
console.log(myobject.name);//Rohit
console.log(anotherobject.name);//Rohit