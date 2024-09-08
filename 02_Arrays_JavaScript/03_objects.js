//singleton
    //singleton means only one objects
    //constructor always create singleton object
    //Object.create //constructor object

//object literal
const mySym=Symbol("key1")

const JsUser={
    name:"pravin",
    "full_Name":"thube peavin",
    age:21,
    [mySym]:"myKey1",
    location:"mumbai",
    isLoggedIn:false,
    latLoggedIn:["monday","Saturday"],
} //object

// console.log(JsUser.name);
// console.log(JsUser["location"]);
// console.log(JsUser["full_Name"]);
// console.log(JsUser[mySym]);

JsUser.name="thube"
///Object.freeze(JsUser)

JsUser.name="thube1"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello js User1,${this.name}`);
    
}

console.log(JsUser.greeting());

console.log(JsUser.greeting2());


