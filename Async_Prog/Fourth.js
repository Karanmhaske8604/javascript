
//Arrow Function in setTimeOut

let id=setTimeout(()=>{
    console.log("Arrow Function");
    clearTimeout(id);
},3000);

console.log("Bye");



