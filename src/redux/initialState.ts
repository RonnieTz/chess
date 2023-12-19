type BoardType = {
  piece: string | null;
  pieceMoved: boolean;
  selected: boolean;
  color: string | null;
  legalMoves: { x: number; y: number }[];
  indexRow?: string | undefined;
  indexCol?: number | undefined;
};

type InitialState = {
  game: {
    board: BoardType[][];
    playerTurn: "white" | "black";
    player_1: string;
    player_2: string;
    name: string;
    history: BoardType[][][];
    selected: { x: number; y: number } | null;
  } | null;
  legalMoves: { x: number; y: number }[];

  windowMode: "playAsBlack" | "playAsWhite";
  roundIndex: number;
};

export const initialState: InitialState = {
  game: null,
  legalMoves: [],
  windowMode: "playAsWhite",
  roundIndex: 1,
};
