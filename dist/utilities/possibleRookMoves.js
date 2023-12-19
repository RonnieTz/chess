export const findRookMoves = (board, rookPosition) => {
    const { x, y } = rookPosition;
    const moves = [];
    const color = board[x][y].color;
    const isCellOccupied = (x, y) => {
        return board[x][y]?.piece !== null;
    };
    const isCellOccupiedByOpponent = (x, y) => {
        return board[x][y]?.piece !== null && board[x][y]?.color !== color;
    };
    for (let i = x - 1; i >= 0; i--) {
        if (isCellOccupied(i, y)) {
            if (isCellOccupiedByOpponent(i, y)) {
                moves.push({ x: i, y });
            }
            break;
        }
        moves.push({ x: i, y });
    }
    for (let i = x + 1; i <= 7; i++) {
        if (isCellOccupied(i, y)) {
            if (isCellOccupiedByOpponent(i, y)) {
                moves.push({ x: i, y });
            }
            break;
        }
        moves.push({ x: i, y });
    }
    for (let i = y - 1; i >= 0; i--) {
        if (isCellOccupied(x, i)) {
            if (isCellOccupiedByOpponent(x, i)) {
                moves.push({ x, y: i });
            }
            break;
        }
        moves.push({ x, y: i });
    }
    for (let i = y + 1; i <= 7; i++) {
        if (isCellOccupied(x, i)) {
            if (isCellOccupiedByOpponent(x, i)) {
                moves.push({ x, y: i });
            }
            break;
        }
        moves.push({ x, y: i });
    }
    return moves;
};
