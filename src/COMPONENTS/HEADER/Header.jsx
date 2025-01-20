import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className="imageHeader">
          <img src="images/background.png" alt="" />
        </div>
        <div className="conteined">
          <div className="leftcontentHeader">
            <h1>
              INTER MIAMI <br /> FOOTBALL CLUB{" "}
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ad
              sapiente architecto vel laudantium error beatae sed nobis repellat
              in fugit voluptates
            </p>
            <button>Read More</button>
          </div>
          <div className="rightContentHeader">
            <div className="next">
              <h1>
                NEXT MATCH <br />
                vs ARSENAL
              </h1>
            </div>
            <div className="leftDay">
              <div className="Day-Min-Sec">
                <h1>21</h1>
                <p>Days</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>10</h1>
                <p>Hrs</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>55</h1>
                <p>Min</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>21</h1>
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
