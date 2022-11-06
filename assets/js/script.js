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

/**
 * Creates contents of game-area
 */
 function createMap() {
    document.getElementById("game-container").innerHTML = "";
    for (let x = 0; x < 100; x++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = x;
        document.getElementById("game-container").appendChild(cell);
    }
}

/**
 * Menu page
 */
 function playGame() {
    document.getElementById("game-container").innerHTML =
        `<button id="play">Play</button>`;
    document.getElementById("play").addEventListener("click", function () {
        document.getElementById("play").removeEventListener("click", function () {
            createMap();
            fogMap(0);
            buildPhase();
        });
        createMap();
        fogMap(0);
        buildPhase();
    });
}