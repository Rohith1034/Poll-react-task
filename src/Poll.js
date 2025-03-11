import React, { useState } from "react";
import "./App.css"; // Import styles

const Poll = () => {
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0,
    Svelte: 0
  });

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1
    }));
  };

  return (
    <div className="poll-container">
      <h2 className="poll-question">Which JavaScript framework do you prefer?</h2>
      <div className="button-container">
        {Object.keys(votes).map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            className="vote-button"
          >
            {option}
          </button>
        ))}
      </div>
      <h3>Results:</h3>
      <ul className="results">
        {Object.entries(votes).map(([option, count]) => {
          const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
          return (
            <li key={option}>
              {option}: {count} votes
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: `${percentage}%` }}></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Poll;
