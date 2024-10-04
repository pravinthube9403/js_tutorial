const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,val){
//     console.log(`acc: ${acc} and curr : ${val}`);
    
//     return acc+val
// }, 0)


const myTotal=myNums.reduce((acc,val)=> acc+val ,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price:299
    },
    
    {
        itemName:"py course",
        price:299
    },
    
    {
        itemName:"Data Science course",
        price:12999
    }
    
]

const total=shoppingCart.reduce( (acc,val)=> acc+val.price ,0 )
console.log(total);
