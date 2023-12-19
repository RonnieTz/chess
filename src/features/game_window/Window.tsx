import styles from "./game.module.css";
import GameAsWhite from "./GameAsWhite";
import GameAsBlack from "./GameAsBlack";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setWindowMode,
  setRoundIndex,
  resetGame,
} from "../../redux/chessSlice";
import { useEffect } from "react";
import { fetchGame } from "../../redux/fetchGame";

const Game_Window = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { windowMode, roundIndex, game } = useSelector(
    (state: RootState) => state.chess
  );
  useEffect(() => {
    dispatch(fetchGame());
  }, []);
  return (
    <div className={styles.window}>
      {windowMode === "playAsWhite" && <GameAsWhite />}
      {windowMode === "playAsBlack" && <GameAsBlack />}
      <p
        className={styles.turn}
      >{`${game?.playerTurn.toLocaleUpperCase()} TO PLAY`}</p>
      <span>
        <button
          disabled={roundIndex === game?.history.length!}
          onClick={() => {
            if (game && game.history.length > roundIndex) {
              console.log(game.history.length);
              dispatch(setRoundIndex(roundIndex + 1));
            }
          }}
          className={styles.nav_button}
        >{`<<`}</button>
        <button
          className={styles.switch_button}
          onClick={() =>
            dispatch(
              setWindowMode(
                windowMode === "playAsWhite" ? "playAsBlack" : "playAsWhite"
              )
            )
          }
        >
          {windowMode === "playAsWhite" ? "Play as Black" : "Play as White"}
        </button>
        <button
          onClick={() => {
            dispatch(resetGame(null));
            dispatch(fetchGame());
          }}
          className={styles.switch_button}
        >
          Reset
        </button>
        <button
          disabled={roundIndex === 1}
          onClick={() =>
            dispatch(
              setRoundIndex(roundIndex > 1 ? roundIndex - 1 : roundIndex)
            )
          }
          className={styles.nav_button}
        >{`>>`}</button>
      </span>
    </div>
  );
};
export default Game_Window;
