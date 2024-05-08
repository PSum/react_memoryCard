import { useEffect, useState } from "react";
import "./App.css";
import Header from './Header.jsx'
import {v4 as uuidv4} from  'uuid';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function PictureFrame({cards}) {
  const listItems = cards.map(card => <button key={card}>{card}</button>)
  return (<div>{listItems}</div>)
}

function PrintGameArray({gameArray}){
  const listItems = gameArray.map(item => <div key={uuidv4()}>{item.value}</div>)
  return(
  <div>
    {listItems.length ? listItems : <div></div>}
  </div>
  )
}

function App() {
const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(0)
const [gameArray, setGameArray] = useState([])
function handleScore(){
  setScore(score + 1);
}
function handleBestScore(){
  setBestScore(bestScore + 1);
}
function handleGameArray(value){
  setGameArray([...gameArray,{value}]);
}
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <PictureFrame cards={cards} />
      <button onClick={() => handleGameArray(2)}>Test button</button> {/* onclick pass function to button not value directly */}
      <PrintGameArray gameArray={gameArray} />
    </>
  );
}

export default App;
