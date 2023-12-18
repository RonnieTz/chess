import { findPawnMoves } from "./possiblePawnMoves.js";
import { findBishopMoves } from "./possibleBishopMoves.js";
import { findKingMoves } from "./possibleKingMoves.js";
import { findQueenMoves } from "./possibleQueenMoves.js";
import { findKnightMoves } from "./possibleKnightMoves.js";
import { findRookMoves } from "./possibleRookMoves.js";
import { BoardType } from "../types/types.js";

export const findPossibleMoves = (
  board: BoardType,
  previousBoard: BoardType,
  piecePosition: { x: number; y: number }
) => {
  const { x, y } = piecePosition;
  const piece = board[x][y].piece;
  if (piece === null) return [];
  switch (piece) {
    case "pawn":
      return findPawnMoves(board, previousBoard, piecePosition);
    case "bishop":
      return findBishopMoves(board, piecePosition);
    case "king":
      return findKingMoves(board, piecePosition);
    case "queen":
      return findQueenMoves(board, piecePosition);
    case "knight":
      return findKnightMoves(board, piecePosition);
    case "rook":
      return findRookMoves(board, piecePosition);
    default:
      return [];
  }
};
