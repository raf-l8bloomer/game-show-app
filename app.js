// SELECTORS

const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const mainContainer = document.querySelector('.main-container');
const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const hintDiv= document.querySelector("#hint");
const keyboard = document.querySelector("#qwerty")


// Variables
let missed = 0;
let matchedLetters = [];
const phrases = [
    {
        phrase: "its not you its me",
        hint: "hids nod hue wets may"
    },
    {
        phrase: "throwback thursday",
        hint: "the row pack thirst hay"
    },
    {
        phrase: "i like big butts and i cannot lie",
        hint: "aisle hike peg bus hike an hot done high",
    },
    {
        phrase: "sunday night football",
        hint: "son dane knived vote bowl"
    },
    {
        phrase: "im sexy and i know it",
        hint: "aims heck see hand eye note"
    },

]


startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
})

/**
 * getRandomPhraseAsArray
 * @param {*} arr 
 * 
 * generates a random number to pull a random phrase and hint
 * @returns random phrase and hint
 */

function getRandomPhraseAsArray(arr) {
    const phraseIndex = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[phraseIndex].phrase;
    const matchingHint = arr[phraseIndex].hint;
    console.log(matchingHint)
    const p = document.createElement('p');
    p.innerHTML = `Your hint: ${matchingHint}`;
    hintDiv.innerHTML = "";
    hintDiv.appendChild(p);
    return randomPhrase;

}

let randomPhrase = getRandomPhraseAsArray(phrases);
const phraseList = document.querySelector('#phrase ul');


/**
 * addPhraseToDisplay
 * @param arr 
 * 
 * takes phrase and splits the characters into an array 
 * takes array of characters and creates them into list item within unordered list
 */

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

/** checkLetter
 * checks the guessed letter clicked on keyboad against the phrase and returns matchedLetter or null
 */

function checkLetter(guess) {
    console.log(guess);
    const letters = document.querySelectorAll(".letter");
    const matchedLetters = []
    console.log(`these are matched letters: ${matchedLetters.length}`)
    for (let letter of letters) {
        if (letter.textContent == guess.textContent) {
            console.log(`this is a letter: ${letter.textContent}`);
            letter.classList.add("show");
            matchedLetters.push(letter.textContent)
            console.log(`these are matched letters: ${matchedLetters}`)
        }
    }
    if (matchedLetters.length > 0) {
        return matchedLetters
    } else {
        return null;
    }
};

/**
 * allows keyboard functionality when letter is clicked and runs checkLetter
 * after runs checkWin
 */


keyboard.addEventListener("click", (e) => {
    const clicked = e.target;
    console.log(`clicked text content: ${clicked.textContent}`);
    if (clicked.tagName === "BUTTON") {
        clicked.classList.add('chosen');
        clicked.setAttribute("disabled", "true");
        const letterFound = checkLetter(clicked);
        if (letterFound === null) {
            console.log(`letter found is null`)
            const liveHearts = document.querySelectorAll(".tries img");
            liveHearts[missed].src = "images/lostHeart.png";
            missed += 1;
        }
    }
    console.log(`Missed: ${missed}`);
    checkWin();
});


/**
 * checkWin
 * 
 * checks if the amount of letters displayed equals the amount of letters in the final phrase
 * also checks if user made 5 or more incorrect guesses
 */
function checkWin() {
    const letters = document.querySelectorAll(".letter");

    const shown = document.querySelectorAll(".show");
    console.log(`This is how many shown: ${shown.length}`)
    console.log(`This is how many letters: ${letters.length}`)

    if (shown.length === letters.length) {
        overlay.className = "win"
        overlay.style.display = "inherit";
        resetGame();
    }

    if (missed >= 5) {
        overlay.className = "lose"
        overlay.style.display = "inherit";
        resetGame();
    }
}

/** resetGame
 * clears the hint, phrase, keyboard, and hearts
 */

function resetGame() {
    startGame.innerHTML = "Reset Game";
    phraseList.innerHTML = "";
    missed = 0;

    const chosen = document.querySelectorAll('.chosen');
    chosen.forEach(chose => {
        chose.disabled = false;
        chose.classList.remove('chosen');
    })

    const shown = document.querySelectorAll(".show");
    shown.forEach(shownLetters => {
        shownLetters.classList.remove('show');
    })

    const liveHearts = document.querySelectorAll(".tries img");
    liveHearts.forEach(liveHeart => {
        liveHeart.src = "images/liveHeart.png";
    })

    const newRandomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(newRandomPhrase);
}
