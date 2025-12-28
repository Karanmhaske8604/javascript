let arr=[3,4,12,13];
console.log(arr.reduce(minus));

//Reduce => APPLIES CALLBACK FUNCTION AS IT IS IN THE SAME ORDER.
//reduceRight()=> Applies the callback function in the descenfing order.
//10-20=>-10-30=>-40-40=>-80
//2*3*4=>24
function minus(i,j)
{
    return i*j;
}