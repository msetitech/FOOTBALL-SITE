import React, { useState } from "react";
import "./teamLegend.css";
import TeamLegendPopUP from "./TeamLegendPopUP";
import { Close } from "@mui/icons-material";
const teamLegends = [
  {
    id: 1,
    image: "images/mess.png",
    name: "Lionel Mess",
    position: "striker",
  },
  {
    id: 2,
    image: "images/mess.png",
    name: "Lionel Mess",
    position: "striker",
  },
  {
    id: 3,
    image: "images/mess.png",
    name: "Lionel Mess",
    position: "striker",
  },
  {
    id: 4,
    image: "images/mess.png",
    name: "Lionel Mess",
    position: "striker",
  },
];
let newLegend = [];

export default function TeamLegend() {
  const [activeLegendCard, setActiveLegendCard] = useState();

  const handleActiveLegendCard = (id) => {
    setActiveLegendCard(id);
    newLegend = teamLegends.filter((leg) => leg.id === id);
  };

  const togglePopLegend = () => {
    setActiveLegendCard(activeLegendCard != activeLegendCard);
  };
  return (
    <div>
      <div className="teamlegends">
        <div className="ropcontentTeamLegend">
          <h1>Team Legends</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            maiores dolores sint fuga vel deleniti cumque beatae! Libero,
            inventore dolorem?
          </p>
        </div>
        <div className="teams">
          {teamLegends.map((legend, i) => (
            <div
              className="singleTeam"
              key={i}
              onClick={() => {
                handleActiveLegendCard(legend.id);
              }}
            >
              <div className="imageteam">
                <img src={legend.image} alt="" />
              </div>
              <div className="desscription">
                <h1>{legend.name}</h1>
                <p>{legend.position}</p>
              </div>
            </div>
          ))}
        </div>
        {activeLegendCard && <TeamLegendPopUP poplegend={newLegend} />}

        {activeLegendCard && (
          <button className="closePopBtn" onClick={() => togglePopLegend()}>
            <Close />
          </button>
        )}
      </div>
    </div>
  );
}
