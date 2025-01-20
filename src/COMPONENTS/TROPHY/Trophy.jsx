import { EmojiEvents, MilitaryTech } from "@mui/icons-material";
import React from "react";
const trophys = [
  {
    trophyIcon: <EmojiEvents />,
    trophyNumber: 2,
    trophyName: "World Cup",
  },
  {
    trophyIcon: <MilitaryTech />,
    trophyNumber: 14,
    trophyName: "Champions World",
  },
  {
    trophyIcon: <EmojiEvents />,
    trophyNumber: 21,
    trophyName: "Ballon Gold Cup",
  },
  {
    trophyIcon: <EmojiEvents />,
    trophyNumber: 21,
    trophyName: "DFA Champions",
  },
];

export default function Trophy() {
  return (
    <div>
      <div className="trophyConteiner">
        {trophys.map((trophy) => (
          <div className="singleTropy">
            {trophy.trophyIcon}
            <h1>{trophy.trophyNumber}</h1>
            <p>{trophy.trophyName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
