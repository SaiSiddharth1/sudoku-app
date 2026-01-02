import { isValidMove } from "./validators";

export function solveSudoku(board) {
    const newBoard = board.map(row => [...row]);

    function solve() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (newBoard[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValidMove(newBoard, row, col, num)) {
                            newBoard[row][col] = num;
                            if (solve()) {
                                return true;
                            }
                            newBoard[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    solve();
    return newBoard;
}