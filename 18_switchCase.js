/*switch(key){
    case value:
        break;
    default:
        break;
}*/
const month=2
switch (month) {
    case "jan"://for string
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
//if  a condition is matched then whole rest code is executed even without checking
//but except default statement
//that's why we use break statement,so that it stop after conditon is met

    default:
        console.log("default case matched")
        break;
}