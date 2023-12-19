export class Box {
  piece: string | null;
  pieceMoved: boolean;
  selected: boolean;
  color: string | null;
  legalMoves: { x: number; y: number }[];
  indexRow: string | undefined;
  indexCol: number | undefined;

  constructor(
    piece: string | null,
    color: string | null,
    indexRow?: string,
    indexCol?: number
  ) {
    this.piece = piece;
    this.pieceMoved = false;
    this.selected = false;
    this.color = color;
    this.legalMoves = [];
    this.indexRow = indexRow;
    this.indexCol = indexCol;
  }
  getBox() {
    return {
      piece: this.piece,
      pieceMoved: this.pieceMoved,
      selected: this.selected,
      color: this.color,
      legalMoves: this.legalMoves,
      indexRow: this.indexRow,
      indexCol: this.indexCol,
    };
  }
}
