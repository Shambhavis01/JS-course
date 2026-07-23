function User(email,password){
    this._email=email;
    this._password=password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email=value
        }
    })
}
const obj=new User("gxx@.com","abs33")
console.log(obj.email);