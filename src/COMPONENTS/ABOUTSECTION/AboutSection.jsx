import { Facebook, Instagram, LinkedIn, Star, X } from "@mui/icons-material";
import React from "react";
import "./aboutSection.css";

export default function AboutSection() {
  return (
    <div>
      <div className="aboutsection">
        <div className="leftAboutSection">
          <div className="imageaboutsection">
            <img src="about.png" alt="" />
          </div>
          <div className="coverImage">
            <div className="icon">
              <Star></Star>
              <div className="opt">
                <h4>Optimised Team</h4>
                <p>amet consectetur adipisicing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightAboutSection">
          <h1>About Inter Miami FootBall Club</h1>
          <p>
            Inter Miami CF is a professional soccer club based in Fort
            Lauderdale, Florida, competing in Major League Soccer (MLS). Founded
            in 2018 by international soccer icons David Beckham, Jorge Mas, and
            Jose Mas, the club represents the vibrant culture of Miami and its
            diverse communities.
          </p>
          <p>
            Inter Miami was established to bring world-class soccer to South
            Florida while inspiring the next generation of soccer fans. The
            club's philosophy centers around a commitment to excellence,
            teamwork, and a passion for the game. The team plays its home games
            at DRV PNK Stadium, known for its electric atmosphere and loyal fan
            base. <br />
          </p>

          <p>
            The club's primary focus is to build a championship-winning team
            while promoting youth development and community engagement. With a
            strong emphasis on the team's culture, Inter Miami aims to create an
            inclusive environment where every fan feels connected to the club.
          </p>
          <div className="socialmedia">
            <h3>Social Media</h3>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <LinkedIn></LinkedIn>
            <X></X>
          </div>
        </div>
      </div>
    </div>
  );
}
