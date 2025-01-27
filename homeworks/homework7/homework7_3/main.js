function test() {
    let input;
    const maxIterations = 10;

    for (let i = 0; i < maxIterations; i++) {
        input = prompt("Введіть число більше 100");

        if (isNaN(input)) {
            alert('Ви ввели не число');
            continue;
        }
        if (input > 100) {
            console.log(`Ваше число ${input}`)
            return;
        }
    }
    console.log("Останнє введення:", input);
}
test()