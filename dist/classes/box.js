export class Box {
    piece;
    pieceMoved;
    selected;
    color;
    legalMoves;
    indexRow;
    indexCol;
    constructor(piece, color, indexRow, indexCol) {
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
