
//css
import './App.css';
//React
import { useCallback, useEffect, useState} from 'react';
//data
import { wordlist } from './data/words.js';
//components
import { StartScreen } from './components/StartScreen';
import { GameOver } from './components/GameOver';
import StartGame from './components/StartGame';



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
  return (
    <>
      <div className='App'> 
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <StartGame/>}
        {gameStage === 'end' && <GameOver/>}
      </div>
    </>
  )
}

export default App
