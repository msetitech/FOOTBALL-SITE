import React, { useState } from "react";

function AddMatch({ onAddMatch }) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [utcDate, setUtcDate] = useState("");
  const [homeLogo, setHomeLogo] = useState(null);
  const [awayLogo, setAwayLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (homeTeam && awayTeam && utcDate && homeLogo && awayLogo) {
      // Pass new match data to the parent component
      const newMatch = {
        homeTeam: { name: homeTeam, logo: homeLogo },
        awayTeam: { name: awayTeam, logo: awayLogo },
        utcDate,
      };
      onAddMatch(newMatch);

      setHomeTeam(""); // Clear inputs after submission
      setAwayTeam("");
      setUtcDate("");
      setHomeLogo(null);
      setAwayLogo(null);
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleHomeLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setHomeLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAwayLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAwayLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-match-form">
      <h2>Add Match</h2>
      <input
        type="text"
        placeholder="Home Team"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
      />
      <input
        type="text"
        placeholder="Away Team"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Match Date"
        value={utcDate}
        onChange={(e) => setUtcDate(e.target.value)}
      />
      <div>
        <label>Home Team Logo</label>
        <input type="file" onChange={handleHomeLogoChange} />
      </div>
      <div>
        <label>Away Team Logo</label>
        <input type="file" onChange={handleAwayLogoChange} />
      </div>
      <button type="submit">Add Match</button>
    </form>
  );
}

export default AddMatch;
