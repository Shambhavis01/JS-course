const User={
    _email:'ddh.com',//underscores are used in private properties
    _password:"adsg",
     get email(){
      return this._email.toUpperCase()
    },
      set email(value){
      this._email= value
    }
}
const obj=Object.create(User)
console.log(obj.email);