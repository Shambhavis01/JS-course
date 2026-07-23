class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    //in this case ,gives max call size stack size exceed,as construtorGET SET both setting passwords
   //to resolve this error we can use _password,a new variable
    get password(){
      //  return this._password.toUpperCase()
        return`${this._password}hhkk`//return ddrghhkk,changed value from what we actually stored
    }
    set password(value){
      //  this._password=value.toUpperCase()
        this._password=value
    }
}
const Shambhavi = new User("sham@12.com","ddrg")
console.log(Shambhavi.password);