import React from "react";

const leagueData = [
  {
    pos: 1,
    team: "Inter Miami",
    p: 13,
    w: 8,
    d: 4,
    l: 1,
    f: 28,
    a: 20,
    gd: 8,
    pts: 28,
  },
  {
    pos: 2,
    team: "Manchester City",
    p: 13,
    w: 8,
    d: 3,
    l: 2,
    f: 30,
    a: 15,
    gd: 15,
    pts: 27,
  },
  {
    pos: 3,
    team: "Arsenal",
    p: 13,
    w: 7,
    d: 5,
    l: 1,
    f: 25,
    a: 12,
    gd: 13,
    pts: 26,
  },
  {
    pos: 4,
    team: "Liverpool",
    p: 13,
    w: 7,
    d: 4,
    l: 2,
    f: 24,
    a: 14,
    gd: 10,
    pts: 25,
  },
  {
    pos: 5,
    team: "Chelsea",
    p: 13,
    w: 6,
    d: 5,
    l: 2,
    f: 22,
    a: 16,
    gd: 6,
    pts: 23,
  },
  {
    pos: 6,
    team: "Tottenham",
    p: 13,
    w: 6,
    d: 4,
    l: 3,
    f: 20,
    a: 18,
    gd: 2,
    pts: 22,
  },
  {
    pos: 7,
    team: "Manchester United",
    p: 13,
    w: 6,
    d: 3,
    l: 4,
    f: 18,
    a: 19,
    gd: -1,
    pts: 21,
  },
  {
    pos: 8,
    team: "Aston Villa",
    p: 13,
    w: 5,
    d: 4,
    l: 4,
    f: 16,
    a: 14,
    gd: 2,
    pts: 19,
  },
  {
    pos: 9,
    team: "Brighton",
    p: 13,
    w: 4,
    d: 5,
    l: 4,
    f: 14,
    a: 16,
    gd: -2,
    pts: 17,
  },
  {
    pos: 10,
    team: "West Ham",
    p: 13,
    w: 4,
    d: 4,
    l: 5,
    f: 12,
    a: 15,
    gd: -3,
    pts: 16,
  },
];

export default function LeagueTable() {
  return (
    <div>
      <div className="table">
        <h1>BARCLAYS PREMIER LEAGUE 2025/26</h1>
        <table>
          <thead>
            <tr>
              <td>Pos</td>
              <td>Team</td>
              <td>P</td>
              <td>W</td>
              <td>D</td>
              <td>L</td>
              <td>F</td>
              <td>A</td>
              <td>+/-</td>
              <td>Pts</td>
            </tr>
          </thead>
          <tbody>
            {leagueData.map((team, index) => (
              <tr key={index}>
                <td>{team.pos}</td>
                <td>{team.team}</td>
                <td>{team.p}</td>
                <td>{team.w}</td>
                <td>{team.d}</td>
                <td>{team.l}</td>
                <td>{team.f}</td>
                <td>{team.a}</td>
                <td>{team.gd}</td>
                <td>{team.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
