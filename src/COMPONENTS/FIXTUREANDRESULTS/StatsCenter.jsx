import React from "react";

const interMiamiStats = {
  matchesPlayed: 25,
  goalsScored: 45,
  goalsConceded: 30,
  cleanSheets: 10,
  topScorer: "Lionel Messi",
  topAssists: "Sergio Busquets",
  possession: "62%",
};

export default function StatsCenter() {
  return (
    <div>
      <div className="stats-center">
        <h1>Inter Miami - Stats Center</h1>
        <div className="stats-grid">
          <div className="stat-item">
            <h2>{interMiamiStats.matchesPlayed}</h2>
            <p>Matches Played</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.goalsScored}</h2>
            <p>Goals Scored</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.goalsConceded}</h2>
            <p>Goals Conceded</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.cleanSheets}</h2>
            <p>Clean Sheets</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.topScorer}</h2>
            <p>Top Scorer</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.topAssists}</h2>
            <p>Top Assists</p>
          </div>
          <div className="stat-item">
            <h2>{interMiamiStats.possession}</h2>
            <p>Average Possession</p>
          </div>
        </div>
      </div>
    </div>
  );
}
