let number = parseInt(prompt('Введіть число'));

if (isNaN(number)) {
    alert(`це не число!`);
} else if (number <= 1) {
    alert(`число не є простим`)
} else {
    let isSimple = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        alert(`число є простим`);
    } else {
        alert(`число не є простим`);
    }
}