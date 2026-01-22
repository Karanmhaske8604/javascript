
let obj={
    Name:'Ram',
    Age:18,
}
let obj2={
    place:"pune",
}

let arr=[50,34,99,67];

let obj3={...arr,...obj2}//Array can be spread into Object but not vice versa.

console.log(obj3);
