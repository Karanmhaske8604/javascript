
//Illegal Shadowing
//var => Function Level Scope

var name="Sunny";

if(true)
{
    var name="Mia";  // var only takes updates values.
    console.log(name);//Mia
}
console.log(name);//Mia