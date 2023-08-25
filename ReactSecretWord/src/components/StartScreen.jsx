import './StartScreen.css';

export const StartScreen = ({startGame}) => {
  return (
    <div className='Start'>
        <h1>Jogo da Adivinhação</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}
