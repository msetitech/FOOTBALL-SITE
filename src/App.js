import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopMenu from "./COMPONENTS/TOPMENU/TopMenu";
import Footer from "./COMPONENTS/FOOTER/Footer";
import HomeComponent from "./HomeComponent";
import About from "./About";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <div>
        <div className="tpmenu">
          <TopMenu />
        </div>
        <div className="otherContent">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
