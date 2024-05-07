import { useEffect, useState } from "react";
import "./App.css";
import {v4 as uuidv4} from  'uuid';


function Header(score, bestScore) {
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <div>Score: </div>
        <div>Best score: </div>
      </div>
    </>
  );
}

function PictureFrame({cards}) {
  const listItems = cards.map(card => <div key={uuidv4()}>{card}</div>)
  return (<div>{listItems}</div>)
}

function App() {
const [cards, setCards] = useState([1, 2, 3, 4, 5, 6]);
function test (){
  console.log("test");
}
  return (
    <>
      <Header />
      <PictureFrame cards={cards} />
      <button onClick={test}>Test button</button>
    </>
  );
}

export default App;
