import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Game } from "./classes/game.js";
import { getLegalMoves } from "./utilities/getLegalMoves.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let liveGames: Game | null = null;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post("/move-piece", (req, res) => {
  const {
    name,
    move: { x: moveX, y: moveY },
    to: { x: toX, y: toY },
  } = req.body;
  if (liveGames) {
    liveGames.movePiece(moveX, moveY, toX, toY);
    liveGames.findMoves();
    liveGames.filterLegalMoves();
    res.send(liveGames.getGame());
  }
});

app.get("/game", (req, res) => {
  liveGames = new Game("Player 1", "Player 2");
  liveGames.findMoves();
  res.send(liveGames.getGame());
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
