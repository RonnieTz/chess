import lodash from "lodash";
const { cloneDeepWith } = lodash;
export const movePiece = (gameProp, x, y, x2, y2) => {
    const game = cloneDeepWith(gameProp);
    const board = game.board;
    const piece = board[x][y].piece;
    const color = board[x][y].color;
    if (x !== x2 && !board[x2][y2].piece && piece === "pawn") {
        board[x][y2].piece = null;
        board[x][y2].color = null;
    }
    board[x][y].piece = null;
    board[x][y].color = null;
    board[x][y].pieceMoved = true;
    board[x][y].legalMoves = [];
    if (piece === "pawn" && (x2 === 0 || x2 === 7)) {
        board[x2][y2].piece = "queen";
    }
    else {
        board[x2][y2].piece = piece;
    }
    if (piece === "king") {
        if (x === 0 || x === 7) {
            if (y === 4) {
                if (y2 === 2) {
                    board[x][0].piece = null;
                    board[x][0].color = null;
                    board[x][0].pieceMoved = true;
                    board[x][0].legalMoves = [];
                    board[x][3].piece = "rook";
                    board[x][3].color = color;
                    board[x][3].pieceMoved = true;
                    board[x][3].legalMoves = [];
                }
                if (y2 === 6) {
                    board[x][7].piece = null;
                    board[x][7].color = null;
                    board[x][7].pieceMoved = true;
                    board[x][7].legalMoves = [];
                    board[x][5].piece = "rook";
                    board[x][5].color = color;
                    board[x][5].pieceMoved = true;
                    board[x][5].legalMoves = [];
                }
            }
        }
        if (color === "white") {
            game.whiteKing = { x: x2, y: y2 };
        }
        if (color === "black") {
            game.blackKing = { x: x2, y: y2 };
        }
    }
    board[x2][y2].color = color;
    board[x2][y2].pieceMoved = true;
    game.playerTurn = game.playerTurn === "white" ? "black" : "white";
    game.history.push(cloneDeepWith(board));
    game.findMoves();
    return board;
};
