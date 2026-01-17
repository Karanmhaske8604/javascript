
function login(){

let username="asd";
let password="asd";
const token =btoa(username,password);

console.log(token);



fetch("http://localhost:8080/get-users",{
    method:"GET",
   headers:
   {  
    "Authorization":token
   }
}
).then((v)=>
{
    return v.json();
})
.then((v)=>
{
    console.log(v);
}).catch((e)=>
{
    console.log(e);
    
})

}

login();