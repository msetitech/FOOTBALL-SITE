import React from "react";

const leagueResults = [
  {
    date: "Jan 14, 2025",
    homeTeam: "Inter Miami",
    awayTeam: "Arsenal",
    homeScore: 3,
    awayScore: 1,
  },
  {
    date: "Jan 13, 2025",
    homeTeam: "Liverpool",
    awayTeam: "Inter Miami",
    homeScore: 2,
    awayScore: 2,
  },
  {
    date: "Jan 12, 2025",
    homeTeam: "Leicester City",
    awayTeam: "Inter Miami",
    homeScore: 1,
    awayScore: 0,
  },
  {
    date: "Jan 11, 2025",
    homeTeam: "Tottenham",
    awayTeam: "Inter Miami",
    homeScore: 3,
    awayScore: 2,
  },
  {
    date: "Jan 10, 2025",
    homeTeam: "Aston Villa",
    awayTeam: "Inter Miami",
    homeScore: 1,
    awayScore: 3,
  },
];

export default function LeagueResults() {
  return (
    <div>
      <div className="league-results table">
        <h1>Recent League Results</h1>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Home Team</td>
              <td>Score</td>
              <td>Away Team</td>
            </tr>
          </thead>
          <tbody>
            {leagueResults.map((result, index) => (
              <tr key={index}>
                <td>{result.date}</td>
                <td>{result.homeTeam}</td>
                <td>
                  {result.homeScore} - {result.awayScore}
                </td>
                <td>{result.awayTeam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
