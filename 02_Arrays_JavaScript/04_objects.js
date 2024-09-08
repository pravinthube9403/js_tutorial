//singleton

const tinderUser=new Object() //singleTon object
const tinderUser1={} //Non-SingleTon Object

tinderUser1.id="134abc"
tinderUser1.name="pravin"

tinderUser1.isLoggedIn=false

//console.log(tinderUser1);

const regularUser={
    email:"thube@gmail.com",
    fullname:{
        userfullname:{
            firstName:"pravin",
            lastName:"Thube"
        },
    },
}


// console.log(regularUser.fullname.userfullname.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"
    },
    
]
users[1].email
// console.log(tinderUser1);
// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));

//console.log(tinderUser1.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.price

const {courseInstructor:instructor} =course
//console.log(courseInstructor);
console.log(instructor);

