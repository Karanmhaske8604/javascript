
const prom=new Promise((res,rej)=>{
    let age=20;

    if(age>18)
    {
        return res("Yes..You Can Vote");
    }
    else
        {
            return rej("Sorry.. You are underage");
        } 
});

prom.then((v)=>{
    console.log("Success");
}).catch((r)=>{
    console.log("Denied");
});

console.log("Second layer to execute");
setTimeout(()=>{
    console.log(prom);},3000);