const myArray=[1,2,3,4,5,6]
// console.log(myArray[1]);

// Array Methods

myArray.push(8)
// console.log(myArray);
myArray.pop()

// console.log(myArray)

myArray.unshift(9)
myArray.shift()

//console.log(myArray.includes(9));

// const newArr=myArray.join()
// console.log(myArray)
// console.log(newArr);

//slice splice

console.log("A ",myArray);

const myn1=myArray.slice(1,3)

console.log(myn1);


console.log("B ",myArray);


const myn2=myArray.splice(1,3)
console.log("C ",myArray);

console.log(myn2);


