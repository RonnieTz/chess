import styles from "./Game.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchGame } from "../redux/fetchGame";
import { useEffect } from "react";
import Piece from "../components/Piece";
import { setSelectPiece, movePieceinUI } from "../redux/chessSlice";
import { movePiece } from "../redux/movePiece";
import { reverse_X } from "../utilities/reverse_X";
import { cloneDeepWith } from "lodash";

const { game, line, box, dark, light, selected, possible } = styles;

const Game = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { game: _game, legalMoves } = useSelector(
    (state: RootState) => state.chess
  );
  const fullGame = () => {
    if (_game) {
      const history = cloneDeepWith(_game.history);
      return [...history!, _game.board];
    }

    return [];
  };

  useEffect(() => {
    dispatch(fetchGame());
  }, []);

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
        [...fullGame()[fullGame().length - 1]].reverse().map((x, i) => (
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
                <Piece piece={y.piece} color={y.color} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};
export default Game;
