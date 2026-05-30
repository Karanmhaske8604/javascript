//Closure =>A closure gives a function access to variables outside itself.


function Booking()
{
    let bb=1000;

    function deposit(v)
    {
        bb=bb+v;
        return bb;
    }
    return deposit;
}

let depo=Booking();
console.log(depo(1000));