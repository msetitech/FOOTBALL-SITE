import React from "react";

const interMiamiStats = [
  { category: "Matches Played", value: 25 },
  { category: "Goals Scored", value: 45 },
  { category: "Goals Conceded", value: 30 },
  { category: "Clean Sheets", value: 10 },
  { category: "Top Scorer", value: "Lionel Messi" },
  { category: "Top Assists", value: "Sergio Busquets" },
  { category: "Average Possession", value: "62%" },
];

export default function StatsCenter() {
  return (
    <div>
      <div className="stats-table table">
        <h1>Inter Miami - Stats Center</h1>
        <table>
          <thead>
            <tr>
              <td>Category</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {interMiamiStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.category}</td>
                <td>{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
