import { solveSudoku } from "./solver";
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function generateSudoku(clues = 0) {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    for (let i = 0; i < 9; i += 3) {
        fillBox(board, i, i);
    }
    board = solveSudoku(board);

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