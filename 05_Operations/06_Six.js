// const coding=["js","java","python","cpp"]

// const values = coding.forEach ( (item)=>{
//     //console.log(item);
//     return item
    
// } )
// console.log(values);

//using filter
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newnu = myNums.filter( (item)=> (item>4)) Implici
// const newNums=myNums.filter( (num)=> {
//    return num>4
// } )   Explicit
// console.log(newNums);


//With out using filter
const  newNums=[]
myNums.forEach( (num)=>{
    if(num>4){
       newNums.push(num)
    }
} )
console.log(newNums);


 
