function multiply(a) {
    return function (b) {
        return a * b;
    };
}
const  result = multiply(3)(7);
console.log(result);