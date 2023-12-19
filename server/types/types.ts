export type BoxType = {
  piece: string | null;
  pieceMoved: boolean;
  selected: boolean;
  color: string | null;
  legalMoves: { x: number; y: number }[];
  indexRow?: string | undefined;
  indexCol?: number | undefined;
};

export type BoardType = BoxType[][];

export type GameType = {
  board: BoardType;
  playerTurn: "white" | "black";
  player_1: string;
  player_2: string;
  name: string;
  history: BoardType[];
  selected: { x: number; y: number } | null;
};
