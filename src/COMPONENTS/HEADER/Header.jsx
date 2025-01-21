import React, { useState, useEffect } from "react";
import "./header.css";

const lastMatchesResults = [
  {
    logoOne: "images/logo.png",
    dateOfMatch: "July 11 2023",
    matchResult: "3 - 1",
    leagueType: "Champions Cup",
    logoTwo: "images/logo2.png",
  },
  {
    logoOne: "images/logo.png",
    dateOfMatch: "Oct 11 2023",
    matchResult: "5 - 3",
    leagueType: "Champions Cup",
    logoTwo: "images/logo3.png",
  },
  {
    logoOne: "images/logo1.png",
    dateOfMatch: "Nov 11 2023",
    matchResult: "3 - 3",
    leagueType: "Champions Cup",
    logoTwo: "images/logo.png",
  },
];

export default function Header() {
  const nextMatchDate = new Date("January 25, 2025 18:00:00");
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = nextMatchDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <div className="imageHeader">
          <img src="images/orginal.png" alt="" />
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
                <h1>{countdown.days}</h1>
                <p>Days</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>{countdown.hours}</h1>
                <p>Hrs</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>{countdown.minutes}</h1>
                <p>Min</p>
              </div>
              <div className="Day-Min-Sec">
                <h1>{countdown.seconds}</h1>
                <p>Secs</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bottomOfHeader">
        {lastMatchesResults.map((match, i) => (
          <div className="matchresults" key={i}>
            <div className="TeamLogo">
              <img src={match.logoOne} alt="" />
            </div>
            <div className="resultShown">
              <p>{match.dateOfMatch}</p>
              <h1>{match.matchResult}</h1>
              <p>{match.leagueType}</p>
            </div>
            <div className="TeamLogo">
              <img src={match.logoTwo} alt="" />
            </div>
          </div>
        ))}

        <div className="resultLastMatch">
          <h4>RESULT</h4>
          <h1>THE LAST MATCH</h1>
        </div>
      </div>
    </div>
  );
}
