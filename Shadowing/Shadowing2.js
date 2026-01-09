
//legal Shadowing.

var name="CAT";  //if you have let outside you can't use var inside bez its illegal shadowing.

if(true)
{
    let name="LOin";

    console.log("1",name);
    
}
console.log("2",name);
