const board = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

board.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent === "" && !gameOver) {
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

function checkWin() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            board[a].textContent &&
            board[a].textContent === board[b].textContent &&
            board[a].textContent === board[c].textContent
        ) {
            alert(`${board[a].textContent} wins!`);
            gameOver = true;
        }
    }
}
