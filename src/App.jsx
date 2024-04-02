import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const playingCards = [1, 2, 3, 4, 5, 6];

function App() {
  const [pressedNumbers, addPressedNumbers] = useState([]);

  const handleButtonClick = (number) => {
    addPressedNumbers([...pressedNumbers, number]);
  };

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return (
    <div>
      {playingCards.map((cardNumber, index) => (
        <button key={index} onClick={() => handleButtonClick(cardNumber)}>
          {cardNumber}
        </button>
      ))}
      <div>{pressedNumbers}</div>
    </div>
  );
}

export default App;
