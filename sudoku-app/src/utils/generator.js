import { solveSudoku } from "./solver";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function generatePuzzle(clues = 30) {
    // Step 1: create empty board
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));

    // Step 2: fill diagonal 3x3 boxes randomly
    for (let i = 0; i < 9; i += 3) {
        fillBox(board, i, i);
    }

    // Step 3: solve the board completely
    board = solveSudoku(board);

    // Step 4: remove numbers to create puzzle
    let cellsToRemove = 81 - clues;
    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }

    return board;
}

function fillBox(board, rowStart, colStart) {
    let numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let index = 0;

    for (let r = rowStart; r < rowStart + 3; r++) {
        for (let c = colStart; c < colStart + 3; c++) {
            board[r][c] = numbers[index++];
        }
    }
}
