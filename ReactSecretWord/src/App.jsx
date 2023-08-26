
//css
import './App.css';
//React
import { useCallback, useEffect, useState} from 'react';
//data
import { wordlist } from './data/words.js';
//components
import { StartScreen } from './components/StartScreen';
import { GameOver } from './components/GameOver';
import  StartGame  from './components/StartGame';



const stages = [
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'},
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordlist);
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpicCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [wrongLetters, setWrongLetter] = useState ([]);
  const [guesses, setGuesses] = useState(10);
  const [score, setScore] = useState(0);

  //funções 
  const PickCategoryandWord = () => {
    //pega uma categoria aleatoria
    const Categories = Object.keys(words);
    const Category = Categories[Math.floor(Math.random()*Object.keys(Categories).length)];
    //pega uma palavra aleatoria
    const Word = words[Category][Math.floor(Math.random()*words[Category].length)]
    return {Word, Category};
  }
  const startGame = () => {
    //pega a palavra e a categoria
    const {Word, Category} = PickCategoryandWord();
    //faz a palavra se tornar um array
    let Letters = Word.split("");
    //faz ficar td minusculo
    Letters = Letters.map((L) => { return L.toLowerCase()});
    //setando os estados
    setpickedWord(Word);
    setpicCategory(Category);
    setLetters(Letters);
    setGameStage(stages[1].name);
  }
  const endGame = () => {
    setGameStage(stages[2].name);
  }
  const RetryGame = () => {
    setGameStage(stages[0].name);
  }
  
  return (
    <>
      <div className='App'> 
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <StartGame End = {endGame} 
        pickedWord = {pickedWord} 
        pickedCategory = {pickedCategory} 
        letters = {letters} 
        guessedLetter = {guessedLetter} 
        wrongLetters = {wrongLetters} 
        guesses = {guesses} 
        score = {score}/>}
        {gameStage === 'end' && <GameOver Retry = {RetryGame}/>}
      </div>
    </>
  )
}

export default App
