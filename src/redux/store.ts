import { configureStore } from "@reduxjs/toolkit";
import chess from "./chessSlice";

export const store = configureStore({ reducer: { chess } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
