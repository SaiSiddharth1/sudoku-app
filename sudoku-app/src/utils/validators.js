export function isValidMove(borard, row, col, number) {

    for (let c = 0; c < 9; c++) {
        if (borard[row][c] === number) {
            return false;
        }
    }

    for (let r = 0; r < 9; r++) {
        if (borard[r][col] === number) {
            return false;
        }
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (borard[r][c] === number) {
                return false;
            }
        }
    }

    return true;
}