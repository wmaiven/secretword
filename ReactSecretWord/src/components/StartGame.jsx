import './StartGame.css';

const StartGame = ({End}) => {
  return (
    <div> 
        <h2>StartGame</h2>
        <button onClick={End}>Fim de jogo</button>
    </div>
  )
}

export default StartGame