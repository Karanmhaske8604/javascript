
//let name="Dani";

if(true)
{
    var name="Chloe";// Illegal Shadowing
    console.log(name);//ERROR name defined already.
}
console.log(name);

var x = 10;
{
    let x = 20; // ✅ Allowed Shadowing
    console.log(x); // 20
}
console.log(x); // 10

let a = 5;

function test() {
    var a = 10; // ✅ Allowed
    console.log(a);//function scope and block scope don’t conflict here.
}

test();