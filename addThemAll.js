// first method
function addThemAll(...args) {
    let sum = args.reduce((acc, curr) => acc + curr);
    return sum;
};

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

//second method
function addThemAll2(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    };
    return sum;
};

console.log(addThemAll2(2,4)); // 6
console.log(addThemAll2(1,2,3,4)); // 10
console.log(addThemAll2(5,5,10)); // 20