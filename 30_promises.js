const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task one is completed');
        resolve(); // connects resolve to then
    }, 1000);
});

promiseOne.then(() => {
    console.log('Promise one is completed');
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "kiki", email: "kiki@gmail.com" });
    }, 1000);
});

promiseThree.then(function(userData) {
    console.log(userData);
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "Edla", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then ((usename)=>{
        console.log(username);
    })
    .catch((err) => {
       console.log(err);
    }).finally(()=>console.log("The promise is either resolved or rejected"))

    const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "Garret", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});
async function consumePromiseFive(){
    try{
   const response = await promiseFive
console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumePromiseFive()

