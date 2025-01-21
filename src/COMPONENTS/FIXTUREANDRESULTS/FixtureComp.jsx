import React from "react";

const interMiamiFixtures = [
  {
    date: "Jan 25, 2025",
    opponent: "LA Galaxy",
    venue: "DRV PNK Stadium",
    time: "8:00 PM",
  },
  {
    date: "Jan 30, 2025",
    opponent: "New York Red Bulls",
    venue: "Red Bull Arena",
    time: "7:30 PM",
  },
  {
    date: "Feb 05, 2025",
    opponent: "Seattle Sounders",
    venue: "Lumen Field",
    time: "9:00 PM",
  },
  {
    date: "Feb 10, 2025",
    opponent: "Orlando City",
    venue: "Exploria Stadium",
    time: "6:00 PM",
  },
  {
    date: "Feb 15, 2025",
    opponent: "Atlanta United",
    venue: "Mercedes-Benz Stadium",
    time: "7:00 PM",
  },
];

export default function FixtureList() {
  return (
    <div>
      <div className="fixture-list table">
        <h1>Upcoming Fixtures - Inter Miami</h1>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Opponent</td>
              <td>Venue</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            {interMiamiFixtures.map((fixture, index) => (
              <tr key={index}>
                <td>{fixture.date}</td>
                <td>{fixture.opponent}</td>
                <td>{fixture.venue}</td>
                <td>{fixture.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
