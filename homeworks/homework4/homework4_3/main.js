function showBiography() {
    const birthYear = prompt("Введіть свій рік народження:");
    const city = prompt("В якому місті ви живете?");
    const favoriteSport = prompt("Ваш улюблений вид спорту:");

    let errorMessage = "";
    if (birthYear === null) {
        errorMessage += "Ви не ввели свій рік народження.\n";
    }
    if (city === null) {
        errorMessage += "Ви не ввели своє місто.\n";
    }
    if (favoriteSport === null) {
        errorMessage += "Ви не ввели свій улюблений вид спорту.\n";
    }

    if (errorMessage) {
        alert(errorMessage.trimStart());
    } else {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;

        let cityMessage;
        const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        if (formattedCity === "Київ") {
            cityMessage = "Ти живеш у столиці України.";
        } else if (formattedCity === "Вашингтон") {
            cityMessage = "Ти живеш у столиці США.";
        } else if (formattedCity === "Лондон") {
            cityMessage = "Ти живеш у столиці Великобританії.";
        } else {
            cityMessage = `Ти живеш у місті ${formattedCity}.`;
        }

        let sportMessage;

        if (favoriteSport === "теніс") {
            sportMessage = "Круто! Хочеш стати як Ві́ктор І́горович Дідух?";
        } else if (favoriteSport === "танці") {
            sportMessage = "Круто! Хочеш стати як Чапкіс Григорій Миколайович?";
        } else if (favoriteSport === "шахи") {
            sportMessage = "Круто! Хочеш стати як Доммараджу Гукеш?";
        } else {
            sportMessage = `Цікавий вибір спорту: ${favoriteSport}.`;
        }

        alert(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
    }
}