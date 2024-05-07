export default function Header({score, bestScore}) {
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <div>Score: {score}</div>
        <div>Best score: {bestScore}</div>
      </div>
    </>
  );
}