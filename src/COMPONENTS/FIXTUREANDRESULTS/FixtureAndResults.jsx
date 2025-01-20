import React, { useState } from "react";
import FixtureComp from "./FixtureComp";
import Result from "./Result";
import LeagueTable from "./LeagueTable";
import StatsCenter from "./StatsCenter";
import "./fixture.css";

export default function FixtureAndResults() {
  const [activeFixture, setActiveFixture] = useState("fixture");

  const handleFixtureMenu = (menu) => {
    setActiveFixture(menu);
  };

  return (
    <div>
      <div className="topmenusFixture">
        <ul>
          <li
            className={activeFixture === "fixture" ? "activeFixutermenu" : ""}
            onClick={() => handleFixtureMenu("fixture")}
          >
            FIXTURES
          </li>
          <li
            className={activeFixture === "results" ? "activeFixutermenu" : ""}
            onClick={() => handleFixtureMenu("results")}
          >
            RESULTS
          </li>
          <li
            className={
              activeFixture === "leagueTable" ? " activeFixutermenu" : ""
            }
            onClick={() => handleFixtureMenu("leagueTable")}
          >
            LEAGUE TABLE
          </li>
          <li
            className={
              activeFixture === "statsCenter" ? "activeFixutermenu" : ""
            }
            onClick={() => handleFixtureMenu("statsCenter")}
          >
            STATS CENTER
          </li>
        </ul>
      </div>
      <div className="renderArea">
        {activeFixture === "fixture" && <FixtureComp />}
        {activeFixture === "results" && <Result />}
        {activeFixture === "leagueTable" && <LeagueTable />}
        {activeFixture === "statsCenter" && <StatsCenter />}
      </div>
    </div>
  );
}
