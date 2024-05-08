import { useEffect, useState } from "react";
import "./App.css";
import Header from './Header.jsx'
import {v4 as uuidv4} from  'uuid';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

// This effect checks, if the gameArray array changes
// If it does, checkForDouble is called
useEffect(() => {
  checkForDouble(gameArray);
}, [gameArray]
)

// These functions handle the change of state
function handleScore(){
  setScore(score + 1);
}
function resetScore(){
  setScore(0);
}
function handleBestScore(){
  setBestScore(score-1);
}
function handleGameArray(value){
  setGameArray([...gameArray,{value}]);
  handleScore();
}
function resetGameArray(){
  setGameArray([]);
}

// This function checks, if an array, called gameArray, contains two identical values. If it does, it sets the highscore, resets the array and resets the score
function checkForDouble(arr){
  const transformedArray = arr.map(obj => obj.value);
  const uniqueValues = new Set(transformedArray);
  if (uniqueValues.size !== arr.length) {
  resetGameArray();
  handleBestScore();
  resetScore();
  }
}

//This function renders the buttons and gives them interactivity with the onClick function
function PictureFrame({cards}) {
  // This line of code shuffles the cards everytime the array gets rendered
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  const listItems = shuffledCards.map(card => <button key={card} onClick={() => handleGameArray(card)}>{card}</button>)
  return (<div>{listItems}</div>)
}

// This is the content of the webpage
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <PictureFrame cards={cards} />
     {/* <PrintGameArray gameArray={gameArray} />*/}
    </>
  );
}

export default App;
