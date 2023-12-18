import { API } from "../utilities/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGame = createAsyncThunk("chess/fetchGame", async () => {
  try {
    const response = await API.get("/game");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
});
