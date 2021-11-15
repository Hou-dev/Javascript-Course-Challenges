'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);

*/

let secNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(document.querySelector('.guess').value);
  displayMessage('Correct Number!');
  console.log(typeof guess);
  // no input
  if (!guess) {
    displayMessage('No Number!');

    //win condition
  } else if (guess == secNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secNumber) {
    if (score > 1) {
      displayMessage(guess > secNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // too high
  // else if (guess > secNumber) {
  //   document.querySelector('.message').textContent = 'Too High';
  //   if (score > 0) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //too low
  // } else if (guess < secNumber) {
  //   document.querySelector('.message').textContent = 'Too Low';
  //   if (score > 0) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  document.querySelector('.again').addEventListener('click', function () {
    //restore score and secretNumber
    secNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secNumber;
    //restore initial conditions of message, number and guess
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
