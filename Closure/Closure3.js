
function greet(name) {
    return function() {
        console.log("Hello " + name);
    };
}

const sayHello = greet("Karan");

sayHello(); // Hello Karan