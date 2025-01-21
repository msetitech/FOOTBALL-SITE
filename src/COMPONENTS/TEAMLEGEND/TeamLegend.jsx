import React, { useState } from "react";
import "./teamLegend.css";
import TeamLegendPopUP from "./TeamLegendPopUP";
import { Close } from "@mui/icons-material";
const teamLegends = [
  {
    id: 1,
    image: "images/messimage.png",
    name: "Lionel Mess",
    position: "Foward and Captain",
    description: `Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team.`,
    match: 9,
    goal: 6,
    assists: 3,
    yelloCard: 0,
  },
  {
    id: 2,
    image: "images/rojas.png",
    name: "Matías Rojas",
    position: "attacking midfielder",
    match: 16,
    goal: 5,
    assists: 2,
    yelloCard: 1,
    description:
      "Matías Nicolás Rojas Romero is a Paraguayan professional footballer who plays as an attacking midfielder for the Paraguay national football team. He is current a free agent",
  },
  {
    id: 3,
    image: "images/searez.png",
    name: " RLuis Suárez",
    position: "striker",
    match: 30,
    goal: 21,
    assists: 9,
    yelloCard: 6,
    description: `Luis Alberto Suárez Díaz is a Uruguayan professional footballer who plays as a striker for Major League Soccer club Inter Miami. Known for his goal scoring ability, movement, and clinical finishing,`,
  },
  {
    id: 4,
    image: "images/jord.png",
    name: "Jordi Alba",
    position: "left-back",
    match: 31,
    goal: 5,
    assists: 11,
    yelloCard: 7,
    description:
      "Jordi Alba Ramos is a Spanish professional footballer who plays as a left-back for Major League Soccer club Inter Miami. He is often regarded as among the best full-backs of his generation.",
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
