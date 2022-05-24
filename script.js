'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
    message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
    score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No Number ⛔️');
    }
    else if (!(guess > 0 && guess < 21)) {
        displayMessage('Number is out of bounds 👎');
    }
    else {
        if (score > 1) {
            if (guess === number) {
                displayMessage('Correct Number!🎉');
                document.querySelector('body').style.backgroundColor = '#5A6453';
                document.querySelector('.btn').style.color = '#5A6453';
                document.querySelector('.check').style.color = '#5A6453';
                document.querySelector('.again').style.color = '#5A6453';
                document.querySelector('.number').style.color = '#5A6453';

                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = number;
                score = score + 5;
                displayScore(score);

                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }
            }
            else {
                score--;
                displayScore(score);
                displayMessage(guess > number ? 'Too high 📈' : 'Too low 📉');
            }
        }
        else {
            displayMessage('You lost the game 💥');
            score = 0;
            document.querySelector('.score').textContent = 0;
        }
    }
});



document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#3B3C54';
    displayMessage('Start guessing...');
    score = 20;
    displayScore(score);
})