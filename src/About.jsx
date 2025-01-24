import { MyLocation } from "@mui/icons-material";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>welcome iner miami</h1>
        <p>
          Inter Miami CF is more than just a soccer club; it is a community that
          embodies the vibrant culture and spirit of Miami. Our dedication to
          excellence both on and off the field drives everything we do. Through
          our mission, vision, and core values, we strive to create a lasting
          impact, inspire passion, and unite fans around the world. These
          guiding principles shape our approach to the game and the way we
          engage with our community.
        </p>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Mission</h3>
          <p>
            To inspire and unite our community through world-class soccer,
            fostering passion and excellence on and off the field.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Vission</h3>
          <p>
            To become a global leader in soccer, promoting growth, inclusivity,
            and a winning spirit, while representing Miami’s diverse culture.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Core Values</h3>
          <p>
            Our core values drive everything we do at Inter Miami CF. We
            prioritize passion for the game, respect for others, collaboration
            as a team, innovation in our approach, and accountability in every
            action we take.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
