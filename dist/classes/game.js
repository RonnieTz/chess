import { Board } from "./board.js";
import { findPossibleMoves } from "../utilities/allPossibleMoves.js";
import lodash from "lodash";
import { getLegalMoves } from "../utilities/getLegalMoves.js";
import { movePiece } from "../utilities/movePiece.js";
const { cloneDeepWith } = lodash;
export class Game {
    board;
    playerTurn;
    player_1;
    player_2;
    name;
    history;
    selected;
    whiteKing;
    blackKing;
    constructor(player_1, player_2) {
        this.board = new Board().board;
        this.playerTurn = "white";
        this.player_1 = player_1;
        this.player_2 = player_2;
        this.name = `${player_1} vs ${player_2}`;
        this.history = [cloneDeepWith(this.board)];
        this.selected = null;
        this.whiteKing = { x: 7, y: 4 };
        this.blackKing = { x: 0, y: 4 };
    }
    getGame() {
        return {
            board: this.board,
            playerTurn: this.playerTurn,
            player_1: this.player_1,
            player_2: this.player_2,
            name: this.name,
            history: this.history,
            selected: this.selected,
        };
    }
    movePiece(x, y, x2, y2) {
        const piece = this.board[x][y].piece;
        const color = this.board[x][y].color;
        if (x !== x2 && !this.board[x2][y2].piece && piece === "pawn") {
            this.board[x][y2].piece = null;
            this.board[x][y2].color = null;
        }
        this.board[x][y].piece = null;
        this.board[x][y].color = null;
        this.board[x][y].pieceMoved = true;
        this.board[x][y].legalMoves = [];
        if (piece === "pawn" && (x2 === 0 || x2 === 7)) {
            this.board[x2][y2].piece = "queen";
        }
        else {
            this.board[x2][y2].piece = piece;
        }
        if (piece === "king") {
            if (x === 0 || x === 7) {
                if (y === 4) {
                    if (y2 === 2) {
                        this.board[x][0].piece = null;
                        this.board[x][0].color = null;
                        this.board[x][0].pieceMoved = true;
                        this.board[x][0].legalMoves = [];
                        this.board[x][3].piece = "rook";
                        this.board[x][3].color = color;
                        this.board[x][3].pieceMoved = true;
                        this.board[x][3].legalMoves = [];
                    }
                    if (y2 === 6) {
                        this.board[x][7].piece = null;
                        this.board[x][7].color = null;
                        this.board[x][7].pieceMoved = true;
                        this.board[x][7].legalMoves = [];
                        this.board[x][5].piece = "rook";
                        this.board[x][5].color = color;
                        this.board[x][5].pieceMoved = true;
                        this.board[x][5].legalMoves = [];
                    }
                }
            }
        }
        this.board[x2][y2].color = color;
        this.board[x2][y2].pieceMoved = true;
        this.playerTurn = this.playerTurn === "white" ? "black" : "white";
        this.history.push(cloneDeepWith(this.board));
    }
    findMoves() {
        this.board.forEach((row, x) => {
            row.forEach((square, y) => {
                square.legalMoves = findPossibleMoves(this.board, this.history[this.history.length > 1 ? this.history.length - 2 : 0], {
                    x,
                    y,
                });
            });
        });
    }
    filterLegalMoves() {
        this.board.forEach((row, x) => {
            row.forEach((square, y) => {
                square.legalMoves = [];
                square.legalMoves = findPossibleMoves(this.board, this.history[this.history.length > 1 ? this.history.length - 2 : 0], {
                    x,
                    y,
                }).filter((move) => {
                    const newLegalMoves = getLegalMoves(this, x, y, move.x, move.y);
                    const newBoard = movePiece(this, x, y, move.x, move.y);
                    if (newLegalMoves.some((row, i) => row.some((box, j) => box.some((newLegalMove) => {
                        return ((newBoard[newLegalMove.x][newLegalMove.y].piece ===
                            "king" &&
                            newBoard[newLegalMove.x][newLegalMove.y].color ===
                                this.board[x][y].color) ||
                            (x === 7 &&
                                y === 4 &&
                                move.x === 7 &&
                                move.y === 6 &&
                                this.board[7][4].piece === "king" &&
                                newLegalMove.x === 7 &&
                                newLegalMove.y === 5) ||
                            (x === 7 &&
                                y === 4 &&
                                move.x === 7 &&
                                move.y === 2 &&
                                this.board[7][4].piece === "king" &&
                                newLegalMove.x === 7 &&
                                newLegalMove.y === 3) ||
                            (x === 0 &&
                                y === 4 &&
                                move.x === 0 &&
                                move.y === 6 &&
                                this.board[0][4].piece === "king" &&
                                newLegalMove.x === 0 &&
                                newLegalMove.y === 5) ||
                            (x === 0 &&
                                y === 4 &&
                                move.x === 0 &&
                                move.y === 2 &&
                                this.board[0][4].piece === "king" &&
                                newLegalMove.x === 0 &&
                                newLegalMove.y === 3));
                    })))) {
                        return false;
                    }
                    return true;
                });
            });
        });
    }
}
