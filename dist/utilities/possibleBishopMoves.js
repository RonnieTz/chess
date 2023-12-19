export const findBishopMoves = (board, bishopPosition) => {
    const { x, y } = bishopPosition;
    const moves = [];
    const color = board[x][y].color;
    const isCellOccupied = (x, y) => {
        return board[x][y]?.piece !== null;
    };
    const isCellOccupiedByOpponent = (x, y) => {
        return board[x][y]?.piece !== null && board[x][y]?.color !== color;
    };
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
        if (isCellOccupied(i, j)) {
            if (isCellOccupiedByOpponent(i, j)) {
                moves.push({ x: i, y: j });
            }
            break;
        }
        moves.push({ x: i, y: j });
    }
    for (let i = x + 1, j = y + 1; i <= 7 && j <= 7; i++, j++) {
        if (isCellOccupied(i, j)) {
            if (isCellOccupiedByOpponent(i, j)) {
                moves.push({ x: i, y: j });
            }
            break;
        }
        moves.push({ x: i, y: j });
    }
    for (let i = x - 1, j = y + 1; i >= 0 && j <= 7; i--, j++) {
        if (isCellOccupied(i, j)) {
            if (isCellOccupiedByOpponent(i, j)) {
                moves.push({ x: i, y: j });
            }
            break;
        }
        moves.push({ x: i, y: j });
    }
    for (let i = x + 1, j = y - 1; i <= 7 && j >= 0; i++, j--) {
        if (isCellOccupied(i, j)) {
            if (isCellOccupiedByOpponent(i, j)) {
                moves.push({ x: i, y: j });
            }
            break;
        }
        moves.push({ x: i, y: j });
    }
    return moves;
};
