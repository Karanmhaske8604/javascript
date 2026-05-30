//let => Block level scope and Function level Scope

let name="karan";

if(true)
{
    let name="arun";//only inside the block
    console.log(name);//arun
}
console.log(name);//karan

function demo()
{
    let name="Sahil";//only for function level
    console.log(name);
}
demo();//sahil
console.log(name);//karan
