
//1.Creating a Promise

const prom=new Promise(pr);

//2.Consuming Promise

prom.then(success).catch(wrong)

function success(v)
{
    console.log(v);
    
}

function wrong(e)
{
    console.log(e);
    
}

function pr(resolve,reject)
{
    let age=18;
    if(age>18)
    {
        return resolve("Eligible for vote..");
    }
    else{
        return reject("Not eligible for vote..");
    }
}

function PrintProm()
{
console.log(prom);
}

setTimeout(PrintProm,5000)