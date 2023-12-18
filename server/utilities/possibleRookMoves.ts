import { BoardType } from "../types/types.js";

export const findRookMoves = (
  board: BoardType,
  rookPosition: { x: number; y: number }
) => {
  const { x, y } = rookPosition;
  const moves: { x: number; y: number }[] = [];
  const color = board[x][y].color;
  const isCellOccupied = (x: number, y: number) => {
    return board[x][y]?.piece !== null;
  };

  const isCellOccupiedByOpponent = (x: number, y: number) => {
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
