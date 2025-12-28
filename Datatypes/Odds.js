let numbers = [13, 17, 18, 21, 22, 34, 56];
numbers.forEach(checkeven);

function checkeven(i) {

    if (i % 2 == 0) {
       console.log(i);
          }
    else {
        console.log("Odd");
    }
}