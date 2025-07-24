const PracticaDeCards = (props) => {
  return (
    <div>
      <h2>Práctica de Cards</h2>
      <p>El estudiante a culminado {props.Completados} creditos con éxito de un total de {props.Total}.</p>
    </div>
  )
}

export default PracticaDeCards;