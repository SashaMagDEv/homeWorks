function deleteChars(string, symbols) {
    let result = "";

    for (let char of string) { 
        if (!symbols.includes(char)) { 
            result += char; 
        }
    }

    return result;
}

let inputString = prompt("Введіть рядок:"); 
let charsToDelete = prompt("Введіть символи для видалення через кому:").split(","); 

let output = deleteChars(inputString, charsToDelete);
alert(output + ' ;)'); 