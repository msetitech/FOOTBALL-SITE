import React, { useState, useEffect } from "react";
import "./App.css";
import TopMenu from "./COMPONENTS/TOPMENU/TopMenu";
import Footer from "./COMPONENTS/FOOTER/Footer";
import HomeComponent from "./HomeComponent";

function App() {
  return (
    <div>
      <>
        <div className="tpmenu">
          <TopMenu />
        </div>
        <div className="otherContent">
          <HomeComponent />
        </div>

        <Footer />
      </>
    </div>
  );
}

export default App;
