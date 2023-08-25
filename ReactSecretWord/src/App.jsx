
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

  const startGame = () => {
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
        {gameStage === 'game' && <StartGame End = {endGame}/>}
        {gameStage === 'end' && <GameOver Retry = {RetryGame}/>}
      </div>
    </>
  )
}

export default App
