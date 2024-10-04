const user={
    username: "pravin",
    price:999,

    welcomeMessage : function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="pravin"
//     console.log(this.username);
    
// }

// chai()

// const chai=function(){
//     let username="pravin"
//     console.log(this.username);
    
// }

// chai()  Result will be same as above


// **************Note*****************8
// this keyword is not work in fumctions it works in objects

//************Arrow Function***********************/

// const chai= () =>{
//     let username="pravin"
//     console.log(this.username);
    
// }

// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }  explicit

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2) implicit

const addTwo=(num1,num2)=> ({username:"thube"})

console.log(addTwo(9,3));


