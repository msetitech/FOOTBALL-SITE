import React from "react";
import "./topmenu.css";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
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
