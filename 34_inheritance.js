class user{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const obj= new Teacher("jenny","jenny1@gmail.com","123")
console.log(obj);
obj.addCourse()//fn of same class
const obj1=new user("obj1")
//obj1.addCourse() //fn of diff class
    obj1.logMe()
console.log(obj===obj1);
console.log(obj instanceof Teacher);