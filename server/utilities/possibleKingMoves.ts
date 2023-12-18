import { BoardType } from "../types/types.js";

export const findKingMoves = (
  board: BoardType,
  kingPosition: { x: number; y: number }
) => {
  const { x, y } = kingPosition;
  const moves: { x: number; y: number }[] = [];
  const color = board[x][y].color;
  const isCellOccupied = (x: number, y: number) => {
    return board[x][y]?.piece !== null;
  };

  const isCellOccupiedByOpponent = (x: number, y: number) => {
    return board[x][y]?.piece !== null && board[x][y]?.color !== color;
  };

  if (x > 0) {
    if (!isCellOccupied(x - 1, y)) {
      moves.push({ x: x - 1, y });
    } else if (isCellOccupiedByOpponent(x - 1, y)) {
      moves.push({ x: x - 1, y });
    }
    if (y > 0) {
      if (!isCellOccupied(x - 1, y - 1)) {
        moves.push({ x: x - 1, y: y - 1 });
      } else if (isCellOccupiedByOpponent(x - 1, y - 1)) {
        moves.push({ x: x - 1, y: y - 1 });
      }
    }
    if (y < 7) {
      if (!isCellOccupied(x - 1, y + 1)) {
        moves.push({ x: x - 1, y: y + 1 });
      } else if (isCellOccupiedByOpponent(x - 1, y + 1)) {
        moves.push({ x: x - 1, y: y + 1 });
      }
    }
  }

  if (x < 7) {
    if (!isCellOccupied(x + 1, y)) {
      moves.push({ x: x + 1, y });
    } else if (isCellOccupiedByOpponent(x + 1, y)) {
      moves.push({ x: x + 1, y });
    }
    if (y > 0) {
      if (!isCellOccupied(x + 1, y - 1)) {
        moves.push({ x: x + 1, y: y - 1 });
      } else if (isCellOccupiedByOpponent(x + 1, y - 1)) {
        moves.push({ x: x + 1, y: y - 1 });
      }
    }
    if (y < 7) {
      if (!isCellOccupied(x + 1, y + 1)) {
        moves.push({ x: x + 1, y: y + 1 });
      } else if (isCellOccupiedByOpponent(x + 1, y + 1)) {
        moves.push({ x: x + 1, y: y + 1 });
      }
    }
  }

  if (y > 0) {
    if (!isCellOccupied(x, y - 1)) {
      moves.push({ x, y: y - 1 });
    } else if (isCellOccupiedByOpponent(x, y - 1)) {
      moves.push({ x, y: y - 1 });
    }
  }

  if (y < 7) {
    if (!isCellOccupied(x, y + 1)) {
      moves.push({ x, y: y + 1 });
    } else if (isCellOccupiedByOpponent(x, y + 1)) {
      moves.push({ x, y: y + 1 });
    }
  }

  if (y === 4) {
    if (x === 7) {
      if (
        board[7][4].piece === "king" &&
        board[7][4].color === color &&
        board[7][4].pieceMoved === false &&
        board[7][5].piece === null &&
        board[7][6].piece === null &&
        board[7][7].piece === "rook" &&
        board[7][7].color === color &&
        board[7][7].pieceMoved === false
      ) {
        moves.push({ x: 7, y: 6 });
      }

      if (
        board[7][4].piece === "king" &&
        board[7][4].color === color &&
        board[7][4].pieceMoved === false &&
        board[7][3].piece === null &&
        board[7][2].piece === null &&
        board[7][1].piece === null &&
        board[7][0].piece === "rook" &&
        board[7][0].color === color &&
        board[7][0].pieceMoved === false
      ) {
        moves.push({ x: 7, y: 2 });
      }
    }

    if (x === 0) {
      if (
        board[0][4].piece === "king" &&
        board[0][4].color === color &&
        board[0][4].pieceMoved === false &&
        board[0][5].piece === null &&
        board[0][6].piece === null &&
        board[0][7].piece === "rook" &&
        board[0][7].color === color &&
        board[0][7].pieceMoved === false
      ) {
        moves.push({ x: 0, y: 6 });
      }

      if (
        board[0][4].piece === "king" &&
        board[0][4].color === color &&
        board[0][4].pieceMoved === false &&
        board[0][3].piece === null &&
        board[0][2].piece === null &&
        board[0][1].piece === null &&
        board[0][0].piece === "rook" &&
        board[0][0].color === color &&
        board[0][0].pieceMoved === false
      ) {
        moves.push({ x: 0, y: 2 });
      }
    }
  }

  return moves;
};
