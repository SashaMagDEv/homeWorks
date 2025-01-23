function elementRemove (array, item) {
    return array.filter((currItem) => currItem !== item);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const item = 4;

const result = elementRemove(array, item);

console.log(result);