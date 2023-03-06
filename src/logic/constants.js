export const TURNS = {
  X: "x",
  O: "o",
};
export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// This code defines two constants, TURNS and WINNER_COMBOS. The constant TURNS is an object that contains two key-value pairs,
// where the keys are 'X' and 'O', and the values are 'x' and 'o'. The constant WINNER_COMBOS is an array of arrays containing
// numbers from 0 to 8. These numbers represent the positions on a 3x3 grid, which could be used to play a game like tic-tac-toe.
// The arrays in WINNER_COMBOS represent the possible winning combinations in a game of tic-tac-toe.

// Este código define dos constantes, TURNS y WINNER_COMBOS. La constante TURNS es un objeto que contiene dos pares clave-valor,
// donde las claves son 'X' y 'O', y los valores son 'x' y 'o'. La constante WINNER_COMBOS es una matriz de matrices que contiene
// números del 0 al 8. Estos números representan las posiciones en una cuadrícula de 3x3, que podría utilizarse para jugar a un juego como el tres en raya.
// Las matrices en WINNER_COMBOS representan las posibles combinaciones ganadoras en un juego de tres en raya.
