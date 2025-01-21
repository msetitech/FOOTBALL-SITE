import React, { useState, useEffect } from "react";
import "./App.css";
import TopMenu from "./COMPONENTS/TOPMENU/TopMenu";
import Header from "./COMPONENTS/HEADER/Header";
import AboutSection from "./COMPONENTS/ABOUTSECTION/AboutSection";
import Trophy from "./COMPONENTS/TROPHY/Trophy";
import FixtureAndResults from "./COMPONENTS/FIXTUREANDRESULTS/FixtureAndResults";
import TeamLegend from "./COMPONENTS/TEAMLEGEND/TeamLegend";
import MatchSchedule from "./COMPONENTS/MATCHSCHEDULE/MatchSchedule";
import Footer from "./COMPONENTS/FOOTER/Footer";

function App() {
  return (
    <div>
      <>
        <div className="tpmenu">
          <TopMenu />
        </div>
        <Header />
        <AboutSection />
        <Trophy />
        <FixtureAndResults />
        <TeamLegend />
        <MatchSchedule />
        <Footer />
      </>
    </div>
  );
}

export default App;
