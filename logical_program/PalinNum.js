let num=112;

function isPalindrome(i)
{
    let str=""+i;
    let str2="";
    for(i=str.length-1;i>=0;i--)
    {
        str2=str2+str.charAt(i);
    }
    console.log(str);
    console.log(str2);
    console.log(str==str2);
    
    // if(str==str2)
    // {
    //    console.log("true");
       
    // }
    // console.log(false);
        
}
isPalindrome(121);