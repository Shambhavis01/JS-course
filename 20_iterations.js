//for loop
/*const array=[0,1,2,3,4,5,6,7,8,9]
for (index=0;index<array.length;index++){
    const element=array[index];
    console.log(element);
}*/
//for inside for 
/*for(int i=1;i<=10;i++){
    for(int = 1;i<=10;j++){
        console.log("j");
    }console.log();
}*/
//if inside for
/*for(int i=1;i<=10;i++){
    for(int = 1;i<+10;j++){
    if(2==3){
        console.log("j");}
    }console.log();*/
    // scope access
    /*for(int i=1;i<=10;i++){
    console.log('outer loop value:${i}');
    for(int j= 1;j<=10;j++){
        console.log('inner loop value is ${j} and outer loop ${i}');
    }
    }*/ //now inner loop will access the value of outer loop but outer loop will not be ble to access the value of inner loop
    //that's because of the scope(global,local)


    //break and continue
//normally everything prints
    /*for(let i=0;i<=20;i++){ 
        if(i==5){
        console.log(`detected 5`);//prints further after condition matched if not use break
        break;//prints till the condition and don't print further,5 detected not printed
    }
    console.log(`value of i is ${i}`);
    }*/

        for(let i=0;i<=20;i++){ 
        if(i==5){
        console.log(`detected 5`);
        continue;//detects 5,condition matched but not printed,skips,and print further
    }
    console.log(`value of i is ${i}`);
    }