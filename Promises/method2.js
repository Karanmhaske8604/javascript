
let array=[0,12,10,89,45,14];

const prom=new Promise(check);

function success(v)
{
    console.log(v+"Successfully");
    
}

function failure(e)
{
    console.log(e+"Failure");
    
}

function check(resolve,reject)
{
    function find()
    {
        if(array.includes(110))
        {
            return resolve("Element is Present..")
        }
        return reject("Element not found.")
    }
    setTimeout(find,3000);
}

    console.log(prom);
    prom.then(success).catch(failure);

    setTimeout(()=>{
    console.log(prom);
    
    },4000)
