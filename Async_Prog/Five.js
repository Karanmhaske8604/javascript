
//setInterwal

let counter=1;

let id = setInterval(()=>{
    console.log("bye sir");
    counter++;
    if(counter==3)
    {
        clearInterval(id);
    }
},3000);

console.log("Bye Siera");