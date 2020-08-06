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
    })
})