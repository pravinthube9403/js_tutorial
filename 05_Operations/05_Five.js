const coding=["js","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (val)=>{
//   console.log(val);
  
// } )


// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)


// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// } )

const myCoding=[
    {
        langugename:"javascript",
        languagefilename:"js"
    },
    {
        langugename:"java",
        languagefilename:"java"
    },
    {
        langugename:"python",
        languagefilename:"py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.langugename);
    
} )