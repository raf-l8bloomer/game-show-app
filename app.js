const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');


let missed = 0;
let matchedLetters = [];


const mainContainer = document.querySelector('.main-container');
const startGame = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');

const hintDiv= document.querySelector("#hint");

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
})


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


// const characterList = [];

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
    // const splitPhrase = randomPhrase.split('');
    // return characterList.push(splitPhrase);
}

let randomPhrase = getRandomPhraseAsArray(phrases);
// console.log(`This the new phrase: ${randomPhrase}`);
const phraseList = document.querySelector('#phrase ul');
// console.log(`This is a phrase list : ${phraseList}`)

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
let letters = document.querySelectorAll(".letter");


function checkLetter(guess) {
    console.log(guess);
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

const keyboard = document.querySelector("#qwerty")
console.log(`This is the keyboard: ${keyboard}`);

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

function checkWin() {
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

    letters = document.querySelectorAll(".letter");

}




// clear out addPhraseToDisplay on reset