import { WINNER_COMBOS } from "./constants";

export const checkWinnerFrom = (boarCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boarCheck[a] && // si hay algo ->> x u o
      boarCheck[a] === boarCheck[b] &&
      boarCheck[a] === boarCheck[c]
    ) {
      return boarCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (boardCheck) => {
  return boardCheck.every((square) => square !== null);
};

// This code is checking for a winner in a game of tic-tac-toe.
// The first function, checkWinnerFrom, takes in a boardCheck parameter
// which is an array of the current state of the game board.
// It then checks each possible winning combination (stored in the WINNER_COMBOS constant)
// to see if there is a winner. If there is, it returns the winner's symbol (x or o).
// The second function, checkEndGame, takes in a boardCheck parameter and checks if every
// square on the board has been filled with either an x or an o. If so, it returns true; otherwise it returns false.

// Este código busca un ganador en una partida de tres en raya.
// La primera función, checkWinnerFrom, toma un parámetro boardCheck
// que es un array del estado actual del tablero de juego.
// Luego comprueba cada posible combinación ganadora (almacenada en la constante WINNER_COMBOS)
// para ver si hay un ganador. Si lo hay, devuelve el símbolo del ganador (x u o).
// La segunda función, checkEndGame, toma un parámetro boardCheck y comprueba si cada
// casilla del tablero se ha rellenado con una x o una o. En caso afirmativo, devuelve true; en caso contrario, devuelve false.
