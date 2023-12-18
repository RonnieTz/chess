import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { fetchGame } from "./fetchGame";
import { movePiece } from "./movePiece";

const chessSlice = createSlice({
  name: "chess",
  initialState,
  reducers: {
    unSelectPiece: (state, _action) => {
      if (state.game?.selected) {
        const { x, y } = state.game.selected;
        state.game.board[x][y].selected = false;
        state.game.selected = null;
        state.legalMoves = [];
      }
    },
    setSelectPiece: (state, action) => {
      const { x, y }: { x: number; y: number } = action.payload;
      const color = state.game?.board[x][y].color;

      if (!state.game?.selected && state.game) {
        if (color === state.game?.playerTurn) {
          state.game.selected = { x, y };
          state.game.board[x][y].selected = true;
          state.legalMoves = state.game.board[x][y].legalMoves;
        }
        return;
      }

      if (state.game?.selected) {
        const { x: selectedX, y: selectedY } = state.game.selected;
        const selectedColor = state.game.board[selectedX][selectedY].color;

        if (color === selectedColor) {
          if (x === selectedX && y === selectedY) {
            state.game.selected = null;
            state.game.board[selectedX][selectedY].selected = false;
            state.legalMoves = [];
            return;
          }
          state.game.selected = { x, y };
          state.game.board[selectedX][selectedY].selected = false;
          state.game.board[x][y].selected = true;
          state.legalMoves = state.game.board[x][y].legalMoves;
          return;
        }
      }
    },
    movePieceinUI: (state, action) => {
      const {
        from,
        to,
      }: { from: { x: number; y: number }; to: { x: number; y: number } } =
        action.payload;

      if (state.game) {
        state.game.board[to.x][to.y].piece =
          state.game.board[from.x][from.y].piece;

        state.game.board[to.x][to.y].color =
          state.game.board[from.x][from.y].color;

        state.game.board[from.x][from.y].piece = null;
        state.game.board[from.x][from.y].color = null;
        state.game.board[from.x][from.y].selected = false;
        state.game.selected = null;
        state.legalMoves = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.game = action.payload;
    });
    builder.addCase(movePiece.fulfilled, (state, action) => {
      state.game = action.payload;
    });
  },
});

export const { setSelectPiece, unSelectPiece, movePieceinUI } =
  chessSlice.actions;
export default chessSlice.reducer;
