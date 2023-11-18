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

const splitPhrase= [];

function getRandomPhraseAsArray(phraseList) {
    const phraseIndex = Math.floor(Math.random() * arr.length) + 1
    const randomPhrase = arr[phraseIndex];
    console.log(randomPhrase);
    splitPhrase.push(randomPhrase).split(""));
    console.log(splitPhrase)
}

getRandomPhraseAsArray(phrase);

function addPhraseToDisplay (arr) {

}