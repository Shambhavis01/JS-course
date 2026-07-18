//Immediately Invoked Function Expression
(function chai(){//named IIFE
    console.log("DB CONNECTED");
})();

((name)=>{//unnamed IIFE
    console.log(`DB CONNECTED ${name}`);//parameter pass
}
)('mahi');