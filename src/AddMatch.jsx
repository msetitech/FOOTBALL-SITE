import React, { useState } from "react";

function AddMatch({ onAddMatch }) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [utcDate, setUtcDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (homeTeam && awayTeam && utcDate) {
      // Pass new match data to the parent component
      onAddMatch({ homeTeam, awayTeam, utcDate });
      setHomeTeam(""); // Clear inputs after submission
      setAwayTeam("");
      setUtcDate("");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Match</h2>
      <input
        type="text"
        placeholder="Home Team"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Away Team"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
      />
      <br />
      <input
        type="datetime-local"
        placeholder="Match Date"
        value={utcDate}
        onChange={(e) => setUtcDate(e.target.value)}
      />
      <br />
      <button type="submit">Add Match</button>
    </form>
  );
}

export default AddMatch;
