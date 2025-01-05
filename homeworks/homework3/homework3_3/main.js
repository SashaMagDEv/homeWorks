/*Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл*/

function showNumber() {
    let num = 10369;
    let array = num.toString().split('').join(' ');

    console.log(array);
}