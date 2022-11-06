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
        createMap();
        fogMap(0);
        buildPhase();
    });
}

function buildPhaseEventListener() {
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.addEventListener("mouseover", higlightPlacement);
        cell.addEventListener("mouseout", normal);
        cell.addEventListener("click", clickPlaceBoat);
    }
}

function removeBuildPhaseEventListener() {
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.removeEventListener("mouseover", higlightPlacement);
        cell.removeEventListener("mouseout", normal);
        cell.removeEventListener("click", clickPlaceBoat);
    }
}

function clickPlaceBoat() {
    if (this.className === "cell boat") {
        this.classList.remove("boat");
    } else if (this.className === "cell highlight-cell") {
        this.classList.add("boat");
    }
}

/**
 * Select player to place boats or ready to go to next phase
 */
 function buildPhase() {
    counterbuildPhase++;
    fogMap(0);
    document.getElementById("menu").innerHTML =
        `<button id="player1">Player 1</button>
        <button id="player2">Player 2</button>
        <button id="ready">Ready</button>`;
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.id === "player1") {
                if (!player1Ready) {
                    fogMap(1);
                    buildPhaseEventListener();
                    placeBoat(1, 1);
                }
            } else if (this.id === "player2") {
                if (!player2Ready) {
                    fogMap(2);
                    buildPhaseEventListener();
                    placeBoat(2, 1);
                }
            } else if (this.id === "ready") {
                removeBuildPhaseEventListener();
                fogMap(0);
                battlePhase(1);
            }
        })
    }
    if (player1Ready === true) {
        document.getElementById("player1").classList.add("player-ready");
    }
    if (player2Ready === true) {
        document.getElementById("player2").classList.add("player-ready");
    }
}

function placeBoat(player, boat) {
    counterplaceBoat++;
    if (boat === 3) {
        if (player === 1) {
            player1Ready = true;
        } else if (player === 2) {
            player2Ready = true;
        }
        buildPhase();
    } else {
        //create contents of page    
        document.getElementById("menu").innerHTML = `<h2>Player ${player}, place boat ${boat}</h2><button id="ok">OK</button>`;
        //boat placement
        //    buildPhaseEventListener();
        let correct = 0;
        document.getElementById("ok").addEventListener("click", function () {
            document.getElementById("ok").removeEventListener("click", function () {
                correct = parseInt(checkPlacement(player));
                if (correct === 1) {
                    boat++;
                    confirmBoat(player, boat);
                }
            });
            correct = parseInt(checkPlacement(player));
            if (correct === 1) {
                boat++;
                confirmBoat(player, boat);
            }
        });
    }
}