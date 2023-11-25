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
    "hids nod hue wets may",
    "the row pack thirst hay",
    "aisle hike peg bus hike an hot done high",
    "son dane knived vote bowl",
    "hids fie fold logs hum aware",
]

const phrases = [
    "its not you its me",
    "throwback thursday",
    "i like big butts and i cannot lie",
    "sunday night football",
    "its 5 oclock somewhere"
]

// const characterList = [];

function getRandomPhraseAsArray(arr) {
    const phraseIndex = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[phraseIndex];
    return randomPhrase;
    // const splitPhrase = randomPhrase.split('');
    // return characterList.push(splitPhrase);
}

const randomPhrase = getRandomPhraseAsArray(phrases);
console.log(`This the new phrase: ${randomPhrase}`);
const phraseList = document.querySelector('#phrase ul');
console.log(`This is a phrase list : ${phraseList}`)

function addPhraseToDisplay(arr) {
    arr.split("").forEach((character) => {
        console.log(character);
        if (character === " ") {
            const li = document.createElement('li');
            li.innerHTML = `<li class="space">${character}</li>`;
            phraseList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.innerHTML = `<li class="letter">${character}</li>`;
            phraseList.appendChild(li);
        }
    });
}

addPhraseToDisplay(randomPhrase);


function checkLetter (guess) {
    console.log(guess);
    const letters = document.querySelectorAll(".letter");
    letters.forEach(letter => {
        console.log(`These are the letters: ${letters}`)
        console.log(`This is the letter: ${letter.textContent}`)

        if (letter.textContent == guess) {
            console.log(`this is a letter: ${letter}`);
            letter.classList.add("show");
            const correct = guess;
            return correct;
        } else {
            return null
        }
    })
}

// const keyboard = document.getElementsByTagName("button");
// const keyboard = document.querySelectorAll(".keyrow");

const keyboard = document.querySelector("#qwerty")
console.log(`This is the keyboard: ${keyboard}`);

keyboard.addEventListener("click", (e) => {
    const clicked = e.target;
    // console.log(`this is clicked ${clicked}`)
    if(clicked.tagName === "BUTTON")
    // console.log(`This letter was clicked: ${e.target.textContent}`);
    clicked.classList.add('chosen');
    // const chosen = document.querySelectorAll(".chosen");
    // chosen.forEach(chose => {
    //     console.log(`This is chosen: ${chose.textContent}`);
    // })
    // console.log(`This is clicked text content: ${clicked.textContent}`)
    clicked.setAttribute("disabled", "true");
    checkLetter(clicked.textContent)
})

