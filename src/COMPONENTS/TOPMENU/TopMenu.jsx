import React from "react";
import "./topmenu.css";
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
              <li></li>
            </ul>
          </div>
        </div>
        <div className="notfication">
          {/* <Notifications></Notifications> */}
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
      </nav>
    </div>
  );
}
