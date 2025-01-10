function numberUser() {
    const number = prompt('Enter three numbers');
    console.log(number);
    
    if (number.length === 3 && !isNaN(number)) {
        const [a, b, c] = number;
        const areSimilar = a === b && b === c;
        const  someAreSimilar = a === b || b === c || a === c;

        if (areSimilar) {
            console.log(`Усі цифри однакові`);
        } else {
            console.log(`Не всі цифри однакові`);
        }
        if (someAreSimilar) {
            console.log(`Є однакові цифри`);
        } else {
            console.log(`Немає однакових цифр`);
        }
    } else {
        console.log(`Ви ввели більше чим тризначне число`)
    }
}