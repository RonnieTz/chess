import { Box } from "./box.js";
import { BoardType } from "../types/types.js";

export class Board {
  board: BoardType;
  constructor() {
    this.board = [
      [
        new Box("rook", "black").getBox(),
        new Box("knight", "black").getBox(),
        new Box("bishop", "black").getBox(),
        new Box("queen", "black").getBox(),
        new Box("king", "black").getBox(),
        new Box("bishop", "black").getBox(),
        new Box("knight", "black").getBox(),
        new Box("rook", "black").getBox(),
      ],
      [
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
      ],
      [
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
      ],
      [
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
      ],
      [
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
      ],
      [
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
      ],
      [
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
      ],
      [
        new Box("rook", "white").getBox(),
        new Box("knight", "white").getBox(),
        new Box("bishop", "white").getBox(),
        new Box("queen", "white").getBox(),
        new Box("king", "white").getBox(),
        new Box("bishop", "white").getBox(),
        new Box("knight", "white").getBox(),
        new Box("rook", "white").getBox(),
      ],
    ];
  }

  getBoard() {
    return this.board;
  }
}
