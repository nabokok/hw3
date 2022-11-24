function someFunction (name) {
    console.log(`Hi, ${name}!`);
} 

//first method
function slower(func, seconds) {
    function wrapper(...args) {
        console.log(`Chill out, you will get you result in ${seconds} seconds`);
        setTimeout(() => {
            func(args)
        }, seconds * 1000)
    }
    return wrapper;
}

let slowedSomeFunction = slower(someFunction, 5); 
slowedSomeFunction('Mykola');

//second method
function slower2(func, seconds) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    return function() {
        setTimeout(() => {
            func.apply(this, arguments);
        }, seconds * 1000);
      };      
}

let slowedSomeFunction2 = slower2(someFunction, 4); 
slowedSomeFunction2('Mykola');

//third method

function slower3(func, seconds) {
    console.log(`Chill out, you will get you result in ${seconds} seconds`);
    return function() {
        setTimeout(() => {
            func.call(this, ...arguments);
        }, seconds * 1000);
      };      
}

let slowedSomeFunction3 = slower3(someFunction, 3); 
slowedSomeFunction3('Mykola');