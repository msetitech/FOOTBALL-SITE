import { Facebook, Instagram, Star, X } from "@mui/icons-material";
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
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque, esse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightAboutSection">
          <h1>About Inter Miami FootBall Club</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            magni distinctio laborum iste quia molestiae labore minima qui
            consequatur soluta animi nisi rem, aut eius nam saepe ab eum
            ratione! Iusto quod vitae eveniet excepturi. Dignissimos quae
            excepturi laudantium!
          </p>

          <div className="socialmedia">
            <h1>Social Media</h1>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <X></X>
          </div>
        </div>
      </div>
    </div>
  );
}
