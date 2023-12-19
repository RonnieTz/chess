import { movePiece } from "./movePiece.js";
export const getLegalMoves = (game, x, y, x2, y2) => {
    const board = movePiece(game, x, y, x2, y2);
    const legalMoves = board.map((row, i) => row.map((box, j) => {
        const selectedPieceColor = board[i][j].color;
        if (box.legalMoves.length) {
            return box.legalMoves.map((move) => {
                return { ...move, selectedPieceColor };
            });
        }
        else
            return [];
    }));
    return legalMoves;
};
