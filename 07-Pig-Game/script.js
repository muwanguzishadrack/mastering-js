'use strict';

// Selecting elemes
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Resetting scores to o
score0El.textContent = 0;
score1El.textContent = 0;
// Adding hiddent element on dice class to hide it at the start
diceEl.classList.add('hidden');
