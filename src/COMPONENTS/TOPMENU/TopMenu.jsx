import React from "react";
import "./topmenu.css";
import { Link } from "react-router-dom";
import { ViewHeadline } from "@mui/icons-material";

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
              <li></li>
            </ul>
          </div>
        </div>
        <div className="notfication">
          <ViewHeadline></ViewHeadline>
        </div>
      </nav>
    </div>
  );
}
