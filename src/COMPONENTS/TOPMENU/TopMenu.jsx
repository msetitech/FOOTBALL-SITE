import React from "react";
import "./topmenu.css";
import { Search } from "@mui/icons-material";

export default function TopMenu() {
  return (
    <div>
      <nav>
        <div className="logo">
          <div className="logoOnly">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="topmenu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Matches</li>
            </ul>
          </div>
        </div>
        <div className="cart">
          <input type="search" placeholder="search here ...." />
          <Search></Search>
        </div>
      </nav>
    </div>
  );
}
