class User{
    constructor(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password
    }
    encryptPassword(){
        return`$(this.password)abc`
    }
    changedName(){
        return `${this.name.toUpperCase()}`
    }
}
 const hzz = new User("hzz","hzz122@gmail.com","123")
 console.log(hzz.encryptPassword());
  console.log(hzz.changedName());

