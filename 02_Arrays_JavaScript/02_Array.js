const marvel_Heroes=["thor","ironman","spiderman"]
const dc=["superman","flash"]

//marvel_Heroes.push(dc)
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

//concat operator
//const allHeroes=marvel_Heroes.concat(dc)
//console.log(allHeroes);

//spread operator
//const allnewHeroes=[...marvel_Heroes,...dc]
//console.log(allnewHeroes);

const anotherArray=[12,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("pravin"));
console.log(Array.from("pravin"));
console.log(Array.from({name:"pravin"}));//interesting

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3));

