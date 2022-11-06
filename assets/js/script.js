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
 * Add fog to map
 * player = 1 => fog bottom half
 * player = 2 => fog top half
 * player = 0 => fog all
 */
 function fogMap(player) {
    if (player === 1) {
        for (let x = 50; x <= 99; x++) {
            document.getElementById(x).classList.add("fog"); // fogs player 2's half of map
        }
        for (let x = 0; x <= 49; x++) {
            document.getElementById(x).classList.remove("fog"); // remove fog player 1's half of map
        }
    } else if (player === 2) {
        for (let x = 0; x <= 49; x++) {
            document.getElementById(x).classList.add("fog"); // fogs player 1's half of map
        }
        for (let x = 50; x <= 99; x++) {
            document.getElementById(x).classList.remove("fog"); // remove fog player 2's half of map
        }
    } else if (player === 0) {
        let cells = document.querySelectorAll(".cell"); //Tim's code - use of =>
        cells.forEach(cell => { //Tim's code - use of =>
            cell.classList.add("fog");
        });
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