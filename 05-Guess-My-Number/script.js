'use strict';
/*
// Dom (Document Object Model: Connection between JS and HTML
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // Use value for input fields
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    // When there is no input
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    // When the player wins
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');

      document.querySelector('.score').textContent = 0;
    }

    //   // When guess it too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

/*
Implement a game reset functionality, so that the player can make a new guess? Here's how:

1. Select the element witht 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number and guess input field
4. Also restore the original background color (#222) and number with (15rem)
*/
