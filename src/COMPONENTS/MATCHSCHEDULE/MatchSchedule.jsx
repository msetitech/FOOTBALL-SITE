import React from "react";
import "./matchschedule.css";
import { Add } from "@mui/icons-material";

export default function MatchSchedule() {
  return (
    <div className="allschedule">
      <div className="topmetchschdule">
        <div className="leftSchedule">
          <h1>Match Schedule</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at
            doloribus consectetur debitis architecto officiis ea temporibus,
            laudantium recusandae animi sed a!
          </p>
        </div>
        <div className="rightSchedule">
          <button>
            <Add></Add> Add Match
          </button>
        </div>
      </div>
      <div className="matchscheduleRenderArea">
        <div className="singleschedule">
          <div className="teamsMatching">
            <div className="hometeam">
              <img src="images/logo.png" alt="" />
              <h6>Inter Miami</h6>
            </div>
            <h1>VS</h1>
            <div className="awayteam">
              <img src="images/logo3.png" alt="" />
              <h6>Inter Miami</h6>
            </div>
          </div>
          <div className="deatilsSchedule">
            <h3>Champion League</h3>
            <h2>Mkapa Stadium</h2>
            <h3>January 23 2025 20:00</h3>
          </div>
          <div className="btns">
            <button>View Match</button>
            <button>Delete Match</button>
          </div>
        </div>
        <div className="singleschedule">
          <div className="teamsMatching">
            <div className="hometeam">
              <img src="images/logo.png" alt="" />
              <h6>Inter Miami</h6>
            </div>
            <h1>VS</h1>
            <div className="awayteam">
              <img src="images/logo3.png" alt="" />
              <h6>Inter Miami</h6>
            </div>
          </div>
          <div className="deatilsSchedule">
            <h3>Champion League</h3>
            <h2>Mkapa Stadium</h2>
            <h3>January 23 2025 20:00</h3>
          </div>
          <div className="btns">
            <button>View Match</button>
            <button>Delete Match</button>
          </div>
        </div>
      </div>
    </div>
  );
}
