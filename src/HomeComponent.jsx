import React from "react";
import Header from "./COMPONENTS/HEADER/Header";
import AboutSection from "./COMPONENTS/ABOUTSECTION/AboutSection";
import Trophy from "./COMPONENTS/TROPHY/Trophy";
import FixtureAndResults from "./COMPONENTS/FIXTUREANDRESULTS/FixtureAndResults";
import TeamLegend from "./COMPONENTS/TEAMLEGEND/TeamLegend";
import MatchSchedule from "./COMPONENTS/MATCHSCHEDULE/MatchSchedule";

export default function HomeComponent() {
  return (
    <div>
      <Header />
      <AboutSection />
      <Trophy />
      <FixtureAndResults />
      <TeamLegend />
      <MatchSchedule />
    </div>
  );
}
