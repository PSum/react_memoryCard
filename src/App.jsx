import { useEffect, useState } from "react";
import "./App.css";

const playingCards = [1, 2, 3, 4, 5, 6];

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

/* This doesent work yet t push*/
function MemoryPage() {
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
  cards.map((card) => {
    // console.log({ card })
    // <div>test</div>
  });
</>
  )
}

function App() {
  return (
    <>
      <Header />
      <MemoryPage />
    </>
  );
}

export default App;
