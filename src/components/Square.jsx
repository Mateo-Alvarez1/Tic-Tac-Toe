export const Square = ({ children, updateBoard, isSelected, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const onHandleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={onHandleClick} className={className}>
      {children}
    </div>
  )
}

// This code defines a React component called Square.
// The component takes in four props: children, updateBoard, isSelected, and index.
// The component renders a div element with an onClick event handler that calls the
// updateBoard function with the index prop as an argument. The className of the div
// is determined by the isSelected prop, which adds an additional class if it is true.
// Finally, the children prop is rendered inside of the div.

// Este código define un componente React llamado Square.
// El componente toma cuatro props: children, updateBoard, isSelected, e index.
// El componente renderiza un elemento div con un manejador de eventos onClick que llama a la función
// updateBoard con la prop index como argumento. El className del div
// está determinado por la propiedad isSelected, que añade una clase adicional si es verdadera.
// Finalmente, el prop children es renderizado dentro del div.

