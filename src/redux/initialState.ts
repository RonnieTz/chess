type InitialState = {
  game: {
    board: {
      piece: string | null;
      pieceMoved: boolean;
      selected: boolean;
      color: string | null;
      legalMoves: { x: number; y: number }[];
    }[][];
    playerTurn: "white" | "black";
    player_1: string;
    player_2: string;
    name: string;
    history: {
      piece: string | null;
      pieceMoved: boolean;
      selected: boolean;
      color: string | null;
    }[][][];
    selected: { x: number; y: number } | null;
  } | null;
  legalMoves: { x: number; y: number }[];
};

export const initialState: InitialState = { game: null, legalMoves: [] };
