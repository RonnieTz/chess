import { BoardType } from "../types/types.js";

export const findPawnMoves = (
  board: BoardType,
  previousBoard: BoardType,
  pawnPosition: { x: number; y: number }
) => {
  const { x, y } = pawnPosition;
  const moves: { x: number; y: number }[] = [];
  const color = board[x][y].color;
  const isCellOccupied = (x: number, y: number) => {
    return board[x][y]?.piece !== null;
  };

  const isCellOccupiedInPreviousBoard = (x: number, y: number) => {
    return previousBoard[x][y]?.piece !== null;
  };

  const isCellOccupiedByOpponent = (x: number, y: number) => {
    return board[x][y]?.piece !== null && board[x][y]?.color !== color;
  };

  const isCellOccupiedByOpponentInPreviousBoard = (x: number, y: number) => {
    return (
      previousBoard[x][y]?.piece !== null &&
      previousBoard[x][y]?.color !== color
    );
  };
  if (color === "white") {
    if (x === 6) {
      if (!isCellOccupied(x - 1, y) && !isCellOccupied(x - 2, y)) {
        moves.push({ x: x - 2, y });
      }
    }
    if (x > 0) {
      if (!isCellOccupied(x - 1, y)) {
        moves.push({ x: x - 1, y });
      }
      if (y > 0) {
        if (isCellOccupiedByOpponent(x - 1, y - 1)) {
          moves.push({ x: x - 1, y: y - 1 });
        }
      }
      if (y < 7) {
        if (isCellOccupiedByOpponent(x - 1, y + 1)) {
          moves.push({ x: x - 1, y: y + 1 });
        }
      }
    }

    if (
      x === 3 &&
      y > 0 &&
      board[x][y - 1].piece === "pawn" &&
      board[x][y - 1].color === "black" &&
      board[x - 2][y - 1].piece === null &&
      previousBoard[x - 2][y - 1].piece === "pawn" &&
      previousBoard[x - 2][y - 1].color === "black" &&
      previousBoard[x][y - 1].piece === null
    ) {
      moves.push({ x: x - 1, y: y - 1 });
    }
    if (
      x === 3 &&
      y < 7 &&
      board[x][y + 1].piece === "pawn" &&
      board[x][y + 1].color === "black" &&
      board[x - 2][y + 1].piece === null &&
      previousBoard[x - 2][y + 1].piece === "pawn" &&
      previousBoard[x - 2][y + 1].color === "black" &&
      previousBoard[x][y + 1].piece === null
    ) {
      moves.push({ x: x - 1, y: y + 1 });
    }
  }
  if (color === "black") {
    if (x === 1) {
      if (!isCellOccupied(x + 1, y) && !isCellOccupied(x + 2, y)) {
        moves.push({ x: x + 2, y });
      }
    }
    if (x < 7) {
      if (!isCellOccupied(x + 1, y)) {
        moves.push({ x: x + 1, y });
      }
      if (y > 0) {
        if (isCellOccupiedByOpponent(x + 1, y - 1)) {
          moves.push({ x: x + 1, y: y - 1 });
        }
      }
      if (y < 7) {
        if (isCellOccupiedByOpponent(x + 1, y + 1)) {
          moves.push({ x: x + 1, y: y + 1 });
        }
      }
    }
    if (
      x === 4 &&
      y > 0 &&
      board[x][y - 1].piece === "pawn" &&
      board[x][y - 1].color === "white" &&
      board[x + 2][y - 1].piece === null &&
      previousBoard[x + 2][y - 1].piece === "pawn" &&
      previousBoard[x + 2][y - 1].color === "white" &&
      previousBoard[x][y - 1].piece === null
    ) {
      moves.push({ x: x + 1, y: y - 1 });
    }
    if (
      x === 4 &&
      y < 7 &&
      board[x][y + 1].piece === "pawn" &&
      board[x][y + 1].color === "white" &&
      board[x + 2][y + 1].piece === null &&
      previousBoard[x + 2][y + 1].piece === "pawn" &&
      previousBoard[x + 2][y + 1].color === "white" &&
      previousBoard[x][y + 1].piece === null
    ) {
      moves.push({ x: x + 1, y: y + 1 });
    }
  }

  return moves;
};
