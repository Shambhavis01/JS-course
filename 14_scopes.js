if (true){
    let a=10
   const b= 20
    var c= 30
}

//console.log(a);
//console.log(b);
console.log(c);


let e=300
if(true){
    let e= 10
    const k=20
    console.log("inner:",e)
}
console.log(e);

/***********************Nested scopes ***********************************/

function one(){
    const username="Mahi"
    function two()
    {
        const website="youtube"
        console.log(username);     
        
    }
    //console.log(website)//website is defined inside scope so give error
   // two()//will give Mahi
}
one()//will not execute if two will not