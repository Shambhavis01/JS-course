//sum,without scope
const num=[1,2,3,4,5]
const sum=num.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
//multiplication,with scope-return
const mynum=[2,3,4,5]
const mul=mynum.reduce((acc,curr)=>{
    return acc*curr
},1);
console.log(mul);
//to find maximum
const arr=[20,3,40,35,67,91]
const max=arr.reduce((acc,curr)=>{
    return curr>acc?curr:acc
});
console.log(max)



//accumulator(acc)=store
//current value(curr)=current element
//initial value=starting value of acc ,for ex- in sum ,it is 0.
