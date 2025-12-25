var counter=0;
var sum=0;

for(i=2;i<200;i++)
{
     var flag=false;
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag = true;
            //console.log("Not Prime"+i);  
        }
                
    }
    if(!flag)
    {
        console.log(i);
        counter++;
        sum+=i;
   }
   if(counter==100)
   {
    break;
   }
        
}
console.log("total prime number:"+counter); 
console.log("total sum of first 100 Prime:"+sum);
