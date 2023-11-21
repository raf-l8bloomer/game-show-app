const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');


let missed = 0;

const mainContainer = document.querySelector('.main-container');
const startGame = document.querySelector('.btn__reset');

startGame.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    mainContainer.removeChild(overlay)
})

const hints = [
    "hids fie fold logs hum aware",
    "the row pack thirst hay",
    "aisle hike peg bus hike an hot done high",
    "son dane knived vote bowl",
    "hids nod hue wets may"
]

const phrases = [
    "its not you its me",
    "throwback thursday",
    "i like big butts and i cannot lie",
    "sunday night football",
    "its 5 oclock somewhere"
]

const characterList = [];

function getRandomPhraseAsArray(arr) {
    const phraseIndex = Math.floor(Math.random() * arr.length) + 1;
    console.log(phraseIndex);
    const randomPhrase = arr[phraseIndex];
    console.log(randomPhrase);
    return characterList.push(randomPhrase.split(""));
}

getRandomPhraseAsArray(phrases);
console.log(characterList);
const phraseList = document.querySelector('#phrase > ul');


function addPhraseToDisplay(arr) {
    characterHTML = ""
    arr.forEach(character => {
        if (character == " ") {
            characterHTML += `<li>${character}</li>`
        } else {
            characterHTML += `<li class="letter">${character}</li>`
        }
    });
    return characterHTML
}

console.log(addPhraseToDisplay(characterList));