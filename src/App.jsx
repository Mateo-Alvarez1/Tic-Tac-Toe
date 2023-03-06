import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './logic/constants'
import { checkWinnerFrom, checkEndGame } from './logic/checkWinnerFrom'

export const App = () => {
  const [board, setBoard] = useState(() => {
    const boardToStorage = window.localStorage.getItem('board')
    if (boardToStorage) return JSON.parse(boardToStorage)
    return Array(9).fill(null)
  })

  const [turns, setTurns] = useState(() => {
    const tunrsToStorage = window.localStorage.getItem('turns')
    return tunrsToStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // null ->> no hay ganador / false ->> Empate / ture ->> Ganador

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurns(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    //  si ya hay algo en ese box retornalo (no quiero que se cambie)
    if (board[index] || winner) return
    // Actualizando estado del board
    const newBoard = [...board]
    newBoard[index] = turns
    setBoard(newBoard)
    // Actualizando el cambio de turno
    const newTurn = turns === TURNS.X ? TURNS.O : TURNS.X
    setTurns(newTurn)
    //  Guardando partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turns', newTurn)
    //  Verificando ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return ( 
    <main className="board">

      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}> Comenzar de Nuevo </button>

      {/* BOARD & SQUARED */}
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard} >
                {board[index]}
              </Square>
            )
          }
          )}

      </section>

      {/* TURNS */}
      <section className="turn">
        <Square isSelected={turns === TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turns === TURNS.O} >{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />


    </main>

  )
}

// This code is a React component that implements the game of Tic Tac Toe. 
// It uses the useState hook to manage the state of the game, including the board,
// turns, and winner. The updateBoard function is called when a player clicks on a 
// square and updates the board accordingly. The resetGame function clears all local 
// storage and resets the board, turns, and winner. Finally, it renders a WinnerModal 
// component if there is a winner or false if it's a draw.

// Este código es un componente React que implementa el juego del tres en raya. 
// Utiliza el hook useState para gestionar el estado del juego, incluyendo el tablero,
// los turnos y el ganador. La función updateBoard es llamada cuando un jugador hace clic en una casilla // y actualiza el tablero. 
// casilla y actualiza el tablero en consecuencia. La función resetGame borra todo el 
// localStorage y reinicia el tablero, los turnos y el ganador. Finalmente, muestra un componente WinnerModal 
// si hay un ganador o false si hay empate.