import { Square } from "./Square";

export const WinnerModal = ( { winner  , resetGame } ) => {

  if(winner === null)return null;
  const winnerText = winner === false ? 'Empate' : 'Ganador :'

return (
          <section className="winner">
            <div className="text" >
    
              <h2>
                { winnerText }
              </h2>
    
              <header className="win">
    
                { winner && <Square>{winner}</Square>  }
    
              </header>
    
              <footer>
                <button onClick = { resetGame } >Reset Game</button>
              </footer>
    
            </div>
          </section>
        )
      }


// This code is a functional component in React. It takes two props, winner and resetGame.
// It checks if the winner is null, and if it is, it returns null. If the winner is not null,
// it sets a variable called winnerText to either 'Empate' or 'Ganador :' depending on the value 
// of winner. It then returns a section with text, a header with a Square component containing the 
// value of winner (if there is one) and a footer with a button that calls resetGame when clicked.

// Este código es un componente funcional en React. Toma dos props, winner y resetGame.
// Comprueba si el ganador es null, y si lo es, devuelve null. Si el ganador no es nulo,
// establece una variable llamada winnerText a 'Empate' o 'Ganador :' dependiendo del valor 
// de ganador. A continuación devuelve una sección con texto, una cabecera con un componente Cuadrado que contiene el 
// valor del ganador (si lo hay) y un pie de página con un botón que llama a resetGame cuando se pulsa.


