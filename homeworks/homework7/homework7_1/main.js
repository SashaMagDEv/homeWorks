function parameter() {
    let total = 0;

    return function (num) {
        total += num;
        return total;
    }
}

const sum = parameter();

console.log(sum(4));