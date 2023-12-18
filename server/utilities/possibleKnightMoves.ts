import { BoardType } from "../types/types.js";

export const findKnightMoves = (
  board: BoardType,
  knightPosition: { x: number; y: number }
) => {
  const { x, y } = knightPosition;
  const moves: { x: number; y: number }[] = [];
  const color = board[x][y].color;
  const isCellOccupied = (x: number, y: number) => {
    return board[x][y]?.piece !== null;
  };

  const isCellOccupiedByOpponent = (x: number, y: number) => {
    return board[x][y]?.piece !== null && board[x][y]?.color !== color;
  };

  if (x > 1) {
    if (y > 0) {
      if (!isCellOccupied(x - 2, y - 1)) {
        moves.push({ x: x - 2, y: y - 1 });
      } else if (isCellOccupiedByOpponent(x - 2, y - 1)) {
        moves.push({ x: x - 2, y: y - 1 });
      }
    }
    if (y < 7) {
      if (!isCellOccupied(x - 2, y + 1)) {
        moves.push({ x: x - 2, y: y + 1 });
      } else if (isCellOccupiedByOpponent(x - 2, y + 1)) {
        moves.push({ x: x - 2, y: y + 1 });
      }
    }
  }

  if (x < 6) {
    if (y > 0) {
      if (!isCellOccupied(x + 2, y - 1)) {
        moves.push({ x: x + 2, y: y - 1 });
      } else if (isCellOccupiedByOpponent(x + 2, y - 1)) {
        moves.push({ x: x + 2, y: y - 1 });
      }
    }
    if (y < 7) {
      if (!isCellOccupied(x + 2, y + 1)) {
        moves.push({ x: x + 2, y: y + 1 });
      } else if (isCellOccupiedByOpponent(x + 2, y + 1)) {
        moves.push({ x: x + 2, y: y + 1 });
      }
    }
  }

  if (y > 1) {
    if (x > 0) {
      if (!isCellOccupied(x - 1, y - 2)) {
        moves.push({ x: x - 1, y: y - 2 });
      } else if (isCellOccupiedByOpponent(x - 1, y - 2)) {
        moves.push({ x: x - 1, y: y - 2 });
      }
    }
    if (x < 7) {
      if (!isCellOccupied(x + 1, y - 2)) {
        moves.push({ x: x + 1, y: y - 2 });
      } else if (isCellOccupiedByOpponent(x + 1, y - 2)) {
        moves.push({ x: x + 1, y: y - 2 });
      }
    }
  }
  if (y < 6) {
    if (x > 0) {
      if (!isCellOccupied(x - 1, y + 2)) {
        moves.push({ x: x - 1, y: y + 2 });
      } else if (isCellOccupiedByOpponent(x - 1, y + 2)) {
        moves.push({ x: x - 1, y: y + 2 });
      }
    }
    if (x < 7) {
      if (!isCellOccupied(x + 1, y + 2)) {
        moves.push({ x: x + 1, y: y + 2 });
      } else if (isCellOccupiedByOpponent(x + 1, y + 2)) {
        moves.push({ x: x + 1, y: y + 2 });
      }
    }
  }
  return moves;
};
