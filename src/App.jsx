import { useEffect, useState } from "react";
import "./App.css";
import Header from './Header.jsx'
import {v4 as uuidv4} from  'uuid';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function PictureFrame({cards}) {

  const listItems = cards.map(card => <div key={uuidv4()}>{card}</div>)
  return (<div>{listItems}</div>)
}

function App() {
const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(0)
function handleScore(){
  setScore(score + 1);
}
function handleBestScore(){
  setBestScore(bestScore + 1);
}
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <PictureFrame cards={cards} />
      <button onClick={handleScore}>Add to Score test</button>
      <button onClick={handleBestScore}>Add to best Score test</button>
    </>
  );
}

export default App;
