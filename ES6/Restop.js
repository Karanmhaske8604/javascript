
function Demo(b,...a)
{
    let sum=a.reduce((i,j)=>{return a+b;});
    return sum+b;
}

console.log(Demo,"a",3,4,2,2);

