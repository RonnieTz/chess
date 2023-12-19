import styles from "./game.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import Piece from "../../components/Piece";
import { setSelectPiece, movePieceinUI } from "../../redux/chessSlice";
import { movePiece } from "../../redux/movePiece";


const GameAsWhite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    game: _game,
    legalMoves,
    roundIndex,
  } = useSelector((state: RootState) => state.chess);

  const handleClick = (x: number, y: number) => {
    dispatch(setSelectPiece({ x, y }));
    if (
      _game?.selected &&
      legalMoves.some((move) => move.x === x && move.y === y)
    ) {
      dispatch(
        movePieceinUI({
          from: { x: _game.selected.x, y: _game.selected.y },
          to: {
            x,
            y,
          },
        })
      );
      dispatch(
        movePiece({ name: _game.name, move: _game.selected, to: { x, y } })
      );
    }
  };

  return (
    <div className={styles.game}>
      {_game &&
        _game.history[_game.history.length - roundIndex].map((x, i) => (
          <div key={i} className={styles.line}>
            {x.map((y, j) => (
              <div
                onClick={() => handleClick(i, j)}
                key={j}
                className={`${styles.box} ${(i + j) % 2 ? styles.dark : styles.light} ${
                  y.selected ? styles.selected : null
                } ${
                  legalMoves.some(({ x, y }) => x === i && y === j)
                    ? styles.possible
                    : null
                }`}
              >
                <p
                  className={`${
                    i === 7 ? styles.index_row_bottom : styles.index_row_top
                  } ${styles.index}`}
                >
                  {y.indexRow}
                </p>
                <p
                  className={`${
                    j === 7 ? styles.index_col_right : styles.index_col_left
                  } ${styles.index}`}
                >
                  {y.indexCol}
                </p>
                <Piece piece={y.piece} color={y.color} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
export default GameAsWhite;
