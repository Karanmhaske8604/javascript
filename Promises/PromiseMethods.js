
//.all()=>[prom1,prom2]

const prom1=new Promise((res,rej)=>{

    let age=15;
    if(age<16)
    {
        return res("You are minor");
    }
    else
    {
        return rej("Yes dear you can enter.");
    }

});

const prom2=new Promise((res,rej)=>{

    let age=15;
    if(age>16)
    {
        return res("You are minor");
    }
    else
    {
        return rej("Yes dear you can enter.");
    }

});

Promise.all([prom1,prom2]).then((v)=>{
    console.log(v);
})


