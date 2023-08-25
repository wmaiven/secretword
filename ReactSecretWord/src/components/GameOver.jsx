import './GameOver.css';

export const GameOver = ({Retry}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <button onClick={Retry}>Tente novamente</button>
      </div>
  )
}
