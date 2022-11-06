/* jshint esversion: 11 */ //starts EVERY javascript file for checker

let player1Ready = false;
let player2Ready = false;
let player1Life = 8;
let player2Life = 8;

counterplaceBoat = 0;
counterbuildPhase = 0;


// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    playGame();
})
