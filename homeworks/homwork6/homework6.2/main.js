function averageOfNumbers(array) {
    const numbers = array.filter((item) => typeof item === 'number');

    if (numbers.length === 0) {
        return null;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    const average = sum / numbers.length;

    return average;
}

const mixedArray = ['hi', true, 8, 'Kate', 50, 'cat', 44];
const result = averageOfNumbers(mixedArray);

console.log(result);