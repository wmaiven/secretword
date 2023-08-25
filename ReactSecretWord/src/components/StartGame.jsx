import './StartGame.css';

const StartGame = ({End}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000 </span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica da palavra: <span>Dica...</span>
      </h3>
      <div className="WordContainer">
        <span className="Letter">A</span>
        <span className="BlankSquare">B</span>
      </div>
      <div className="LetterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name='letter' maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="WrongLetterContainer">
        <p>letras ja usadas:</p>
        <span>a</span>
        <span>a</span>
        <span>a</span>
      </div>
    </div>
  )
}

export default StartGame