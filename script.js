'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎳';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent = secretNumber;
const scores = [];

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️  NO NUMBER!';

    //When Player Wins
  } else if (guess === secretNumber) {
    let gameScore = Number(document.querySelector('.score').textContent);
    scores.push(gameScore);

    document.querySelector('.message').textContent = 'Correct Number! 🥳';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = `${scores[0]}`;
    document.querySelector('.number').textContent = secretNumber;

    console.log(scores);

    if (scores[1] > scores[0]) {
      scores.shift();
      console.log(scores);
      document.querySelector('.highscore').textContent = `${scores[0]}`;
    } else if (scores[0] > scores[1]) {
      scores.pop();
      console.log(scores);
      document.querySelector('.highscore').textContent = `${scores[0]}`;
    } else if (scores[1] === scores[0]) {
      document.querySelector('.highscore').textContent = `${scores[0]}`;
      scores.pop();
      console.log(scores);
    }
    // If guess is different than secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Oh No! You have guessed wrong too many times! Game Over! 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
  //    Code no longer needed after refactor
  //     //When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High! 📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'Oh No! You have guessed wrong too many times! Game Over! 😭';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low! 📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'Oh No! You have guessed wrong too many times! Game Over! 😭';
  //       document.querySelector('.score').textContent = 0;
  //     }
});

// The 'Again!' button resets game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  //   document.querySelector('.number').textContent = '?';
  score = document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
});
