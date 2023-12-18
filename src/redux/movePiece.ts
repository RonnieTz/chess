import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utilities/axios";
import { unSelectPiece } from "./chessSlice";

type DataType = {
  name: string;
  move: { x: number; y: number };
  to: { x: number; y: number };
};

export const movePiece = createAsyncThunk(
  "chess.movePiece",
  async (data: DataType, thunkAPI) => {
    try {
      thunkAPI.dispatch(unSelectPiece(data.move));
      const response = await API.post("/move-piece", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
