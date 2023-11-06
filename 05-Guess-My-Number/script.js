'use strict';

// Dom (Document Object Model: Connection between JS and HTML
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // Use value for input fields
console.log(document.querySelector('.guess').value);
