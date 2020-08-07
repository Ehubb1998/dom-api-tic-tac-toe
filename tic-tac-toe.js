window.addEventListener("DOMContentLoaded", event => {

    let currentPlayer = "x";
    const gameArr = ["", "", "", "", "", "", "", "", ""];

    let gameboard = document.getElementById("tic-tac-toe-board");
    gameboard.addEventListener("click", event => {
        const target = event.target.id;

        if (!target.startsWith("square-")) {
            return;
        }

        let num = Number.parseInt(target[target.length - 1]);

        if (gameArr[num] !== "") {
            return;
        }

        const img = document.createElement("img");
        img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayer}.svg`;
        event.target.appendChild(img);

        gameArr[num] = currentPlayer;

        if (currentPlayer === "x") {
            currentPlayer = "o";
        } else {
            currentPlayer = "x";
        }

        gameRow();
        gameColumn();
        gameDiagonal();
        tie();
        reloadButton();
    })

    let whoWon = "";
    function gameRow() {
        let winner = document.getElementById("game-status");
        if (gameArr[0] !== "" && gameArr[0] === gameArr[1] && gameArr[0] === gameArr[2] && gameArr[1] === gameArr[2]) {
            whoWon = gameArr[0];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }

        if (gameArr[3] !== "" && gameArr[3] === gameArr[4] && gameArr[3] === gameArr[5] && gameArr[4] === gameArr[5]) {
            whoWon = gameArr[3];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }

        if (gameArr[6] !== "" && gameArr[6] === gameArr[7] && gameArr[6] === gameArr[8] && gameArr[7] === gameArr[8]) {
            whoWon = gameArr[6];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }
    }

    function gameColumn() {
        let winner = document.getElementById("game-status");
        if (gameArr[0] !== "" && gameArr[0] === gameArr[3] && gameArr[0] === gameArr[6] && gameArr[3] === gameArr[6]) {
            whoWon = gameArr[0];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }

        if (gameArr[1] !== "" && gameArr[1] === gameArr[4] && gameArr[1] === gameArr[7] && gameArr[4] === gameArr[7]) {
            whoWon = gameArr[1];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }

        if (gameArr[2] !== "" && gameArr[2] === gameArr[5] && gameArr[2] === gameArr[8] && gameArr[5] === gameArr[8]) {
            whoWon = gameArr[2];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }
    }

    function gameDiagonal() {
        let winner = document.getElementById("game-status");
        if (gameArr[0] !== "" && gameArr[0] === gameArr[4] && gameArr[0] === gameArr[8] && gameArr[4] === gameArr[8]) {
            whoWon = gameArr[0];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }

        if (gameArr[2] !== "" && gameArr[2] === gameArr[4] && gameArr[2] === gameArr[6] && gameArr[4] === gameArr[6]) {
            whoWon = gameArr[2];
            winner.innerHTML = whoWon.toUpperCase() + " Wins";
        }
    }

    let counter = 0;
    function tie() {
        counter++;
        console.log(counter);
        let winner = document.getElementById("game-status");
        if (counter === 9 && whoWon === "") {
            winner.innerHTML = "Y'all Suck..."
        }
    }

    function reloadButton() {
        let winner = document.getElementById("game-status");
        let reload = document.getElementById("new-game");
        if (whoWon !== "" || winner.innerHTML === "Y'all Suck...") {
            reload.addEventListener("click", event => {
                location.reload();
            })
        } else {
            giveup();
        }
    }

    function giveUp() {
        
    }

});