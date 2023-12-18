import { Game } from "../classes/game.js";
import { movePiece } from "./movePiece.js";

export const getLegalMoves = (
  game: Game,
  x: number,
  y: number,
  x2: number,
  y2: number
) => {
  const board = movePiece(game, x, y, x2, y2);
  const legalMoves: {
    x: number;
    y: number;
    selectedPieceColor: string | null;
  }[][][] = board.map((row, i) =>
    row.map((box, j) => {
      const selectedPieceColor = board[i][j].color;
      if (box.legalMoves.length) {
        return box.legalMoves.map((move) => {
          return { ...move, selectedPieceColor };
        });
      } else return [];
    })
  );

  return legalMoves;
};
