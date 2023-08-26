import './StartGame.css';

const StartGame = ({End,pickedWord,pickedCategory,letters,guessedLetter,wrongLetters,guesses,score}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação:{score} </span>
      </p>
      <h1>Advinhe a palavra:{pickedWord}</h1>
      <h3 className="tip">
        Dica da palavra: <span>{pickedCategory}</span>
      </h3>
      <span>Você ainda tem {guesses} tentativas:</span>
      <div className="WordContainer">
        {letters.map((letter,i) => (
            guessedLetter.includes(letter) ? (
                <span key = {i} className='Letter'>{letter}</span>
            ) : (
               <span key = {i} className='BlankSquare'> </span>
            )    
        ))}
      </div>
      <div className="LetterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <br/>
          <input type="text" name='letter' maxLength="1" required/>
          <br/>
          <br/>
          <br/>
          <button>Enviar!</button>
          <br/>
          <br/>
        </form>
      </div>
      <div className="WrongLetterContainer">
        <p>letras ja usadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ) )}
      </div>
    </div>
  )
}

export default StartGame