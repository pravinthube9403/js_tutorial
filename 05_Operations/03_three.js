// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
};

const greetings="Hello world!"

for (const element of greetings) {
    //console.log(element);
    
}

// *******************Maps**********

const map=new Map()
map.set('IN',"India")
map.set('USA',"United State of America")

//console.log(map);

for (const [Key,value] of map) {
    console.log(Key ,':-',value);
}

// const myObj={
//     'game1':'NFS',
//     "game2":'spiderman'
// }

// for (const [key,value] of myObj) {
//     console.log();
// }   for of loop didn`t work on objects it works on maps



