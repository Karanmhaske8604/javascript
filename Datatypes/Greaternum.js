let arr=[23,45,54,32,22,78];
/**
 * Some => True /False . Logical  Or even if the Single  element is passing the 
 * Given Condtion. you will get the answer as True.
 */

/**
 * 
 * 
 * Every => Each element of the given array must pass the given condition.
 * It works as the logical and and return value accordingly.
 */
 function greaterthan50(i)
 {

    return i>50;
 }

 console.log(arr.every(greaterthan50));