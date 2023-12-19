import styles from "../features/game_window/game.module.css";

const { img } = styles;

const Piece = ({
  piece,
  color,
}: {
  piece: string | null;
  color: string | null;
}) => {
  return (
    <>
      {piece !== null && (
        <img
          className={img}
          src={`/${color}_${piece}.svg`}
          alt={"chess piece"}
        />
      )}
    </>
  );
};
export default Piece;
