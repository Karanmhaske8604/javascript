
function Banking()
{
    let Balance=4000;

    function Deposit(v)
    {
        Balance=Balance+v;
        console.log("Total Balance:"+Balance);
    }

     function Debit(d)
    {
        Balance=Balance-d;
        console.log("Total Balance:"+Balance);
    }
    return [Deposit,Debit];
}

let [a,b]=Banking();
a(100);
b(2000);