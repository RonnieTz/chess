import styles from "./Game.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import Piece from "../../components/Piece";
import { setSelectPiece, movePieceinUI } from "../../redux/chessSlice";
import { movePiece } from "../../redux/movePiece";
import { reverse_X } from "../../utilities/reverse_X";

const { game, line, box, dark, light, selected, possible } = styles;

const GameAsBlack = () => {
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
    <div className={game}>
      {_game &&
        [..._game.history[_game.history.length - roundIndex]]
          .reverse()
          .map((x, i) => (
            <div key={i} className={line}>
              {x.map((y, j) => (
                <div
                  onClick={() => handleClick(reverse_X(i), j)}
                  key={j}
                  className={`${box} ${(reverse_X(i) + j) % 2 ? dark : light} ${
                    y.selected ? selected : null
                  } ${
                    legalMoves.some(({ x, y }) => x === reverse_X(i) && y === j)
                      ? possible
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
export default GameAsBlack;
