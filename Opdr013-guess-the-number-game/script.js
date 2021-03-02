const userName = prompt('Wat is jouw naam?');

const congratulateUser = function (name) {
    alert (`Gefeliciteerd! 🎉 Je hebt het goed geraden! 🥳`);
    alert (`Bedankt voor het spelen ${name}. 🙏  Tot de volgende keer! 😘`);
}

const anotherGuess = function(guessedNumber, randomNumber, name) {
        const guess = prompt(`Helaas, ${guessedNumber} is niet goed. 🙃  Probeer het nog een keer. 💪 `);
         checkNumber(parseInt(guess), randomNumber, name);
}

const checkNumber = function (guessedNumber, randomNumber, name) {
    if (guessedNumber === randomNumber){
        congratulateUser(name);
    } else {
        anotherGuess(guessedNumber, randomNumber, name);
    }
}

const firstGuess = function (randomNumber, min, max, name) {
    const guess = prompt(`Voer een nummer tussen ${min} en ${max} in om te beginnen...`);
    checkNumber(parseInt(guess), randomNumber, name);
}

function getNumber(name, min, max) {
    alert(`${name}, je mag zelf bepalen in welke cijfer range je wilt gaan raden...`);
    const lowest = prompt(`Wat is het laagste cijfer?`);
    const highest = prompt(`En voer nu het hoogste cijfer in.`);
    min = Math.ceil(lowest);
    max = Math.floor(highest);
    firstGuess(Math.floor(Math.random() * (max - min + 1) + min), min, max, name);
}

const greetUser = function (name) {
    alert(`Hoi ${name}! 🤗`);
    getNumber(name);
}

greetUser(userName);

