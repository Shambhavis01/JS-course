class User{
    constructor(name){
        this.name=name
    }
    logMe(){
        console.log(`name:${this.name}`);
    }
   // static createId(){// i dont want this to show up,create id is not a function
     createId(){
   return `123`
    }
}
const shh=new User("shh")
console.log(shh.createId())
console.log(shh.logMe())