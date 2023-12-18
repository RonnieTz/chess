export class Box {
  piece: string | null;
  pieceMoved: boolean;
  selected: boolean;
  color: string | null;
  legalMoves: { x: number; y: number }[];

  constructor(piece: string | null, color: string | null) {
    this.piece = piece;
    this.pieceMoved = false;
    this.selected = false;
    this.color = color;
    this.legalMoves = [];
  }
  getBox() {
    return {
      piece: this.piece,
      pieceMoved: this.pieceMoved,
      selected: this.selected,
      color: this.color,
      legalMoves: this.legalMoves,
    };
  }
}
