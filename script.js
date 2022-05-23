'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!🎉';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number ⛔️';
    }
    else if (!(guess > 0 && guess < 21)) {
        document.querySelector('.message').textContent = 'Number is out of bounds 👎';
    }
    else if (guess > 0 && guess < 21) {
        if (score > 1) {
            if (guess === number) {
                document.querySelector('.message').textContent = 'Correct Number!🎉';
                document.querySelector('.number').textContent = number;
                score = score + 5;
                document.querySelector('.score').textContent = score;
            }
            else {
                score--;
                document.querySelector('.score').textContent = score;
                if (guess < number) {
                    document.querySelector('.message').textContent = 'Too low 📉';
                }
                else {
                    document.querySelector('.message').textContent = 'Too high 📈';
                }
            }
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game 💥';
            score = 0;
            document.querySelector('.score').textContent = 0;
        }
    }
});

function checkNumber(guess) {

}