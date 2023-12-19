import { Box } from "./box.js";
import { BoardType } from "../types/types.js";

export class Board {
  board: BoardType;
  constructor() {
    this.board = [
      [
        new Box("rook", "black", "A", 8).getBox(),
        new Box("knight", "black", "B").getBox(),
        new Box("bishop", "black", "C").getBox(),
        new Box("queen", "black", "D").getBox(),
        new Box("king", "black", "E").getBox(),
        new Box("bishop", "black", "F").getBox(),
        new Box("knight", "black", "G").getBox(),
        new Box("rook", "black", "H", 8).getBox(),
      ],
      [
        new Box("pawn", "black", undefined, 7).getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black").getBox(),
        new Box("pawn", "black", undefined, 7).getBox(),
      ],
      [
        new Box(null, null, undefined, 6).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null, undefined, 6).getBox(),
      ],
      [
        new Box(null, null, undefined, 5).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null, undefined, 5).getBox(),
      ],
      [
        new Box(null, null, undefined, 4).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null, undefined, 4).getBox(),
      ],
      [
        new Box(null, null, undefined, 3).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null).getBox(),
        new Box(null, null, undefined, 3).getBox(),
      ],
      [
        new Box("pawn", "white", undefined, 2).getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white").getBox(),
        new Box("pawn", "white", undefined, 2).getBox(),
      ],
      [
        new Box("rook", "white", "A", 1).getBox(),
        new Box("knight", "white", "B").getBox(),
        new Box("bishop", "white", "C").getBox(),
        new Box("queen", "white", "D").getBox(),
        new Box("king", "white", "E").getBox(),
        new Box("bishop", "white", "F").getBox(),
        new Box("knight", "white", "G").getBox(),
        new Box("rook", "white", "H", 1).getBox(),
      ],
    ];
  }

  getBoard() {
    return this.board;
  }
}
