function someFunction (name) {
    console.log(`Hi, ${name}!`);
} 

function slower(func, seconds) {
    function wrapper(...args) {
        console.log('Chill out, you will get you result in 5 seconds');
        setTimeout(() => {
            func(args)
        }, seconds * 1000)
    }
    return wrapper;
}

let slowedSomeFunction = slower(someFunction, 5); 

