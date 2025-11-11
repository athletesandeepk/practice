import React, { useEffect, useState } from "react";
import "./index.css";

function GuessTheNumber() {
  const [guess, setGuess] = useState(null);
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const generateRandom = () => Math.floor(Math.random() * 100) + 1;

  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(input);
    if (isNaN(num) || input < 0 || input > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }

    setMessage("");
    setAttempts((prev) => prev + 1);

    if (input === guess) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (input < guess) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setMessage("");
    setAttempts(0);
    setGuess(generateRandom());
    setInput("");
  };

  useEffect(() => {
    setGuess(generateRandom());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="guess-input"
      />

      <div
        style={{ margin: "20px 0", display: "flex", alignItems: "center", justifyContent: "space-around", width: "300px" }}
      >
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
