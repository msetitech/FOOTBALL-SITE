import React from "react";
import "./matchCard.css";

function MatchCard({ match, onDelete, onView }) {
  const handleDeleteClick = () => {
    onDelete(match.id); // Delete the match by its ID
  };

  const handleViewClick = () => {
    onView(match.id); // View the match by its ID
  };

  return (
    <div className="match-card">
      <div className="team-card">
        <img
          src={match.homeTeam.logo}
          alt={`${match.homeTeam.name} logo`}
          className="team-logo"
        />
        <strong>{match.homeTeam.name}</strong>
      </div>
      <div className="match-info">
        <p>{new Date(match.utcDate).toLocaleString()}</p>
      </div>
      <div className="team-card">
        <img
          src={match.awayTeam.logo}
          alt={`${match.awayTeam.name} logo`}
          className="team-logo"
        />
        <strong>{match.awayTeam.name}</strong>
      </div>
      <div className="match-actions">
        <button onClick={handleViewClick}>View Match</button>
        <button onClick={handleDeleteClick} className="delete-btn">
          Delete Match
        </button>
      </div>
    </div>
  );
}

export default MatchCard;
