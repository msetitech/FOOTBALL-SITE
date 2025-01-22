import { MyLocation } from "@mui/icons-material";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>We added superfoods to boost benefits</h1>
        <p>
          We've added superfoods to boost benefits in your overall health,
          mental well-being, skin, and hair. Plus, they taste naturally
          delicious.
        </p>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Matcha Green Tea</h3>
          <p>
            A potent green tea made from the entire green tea leaf for a
            plethora of antioxidant benefits.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Cacao Superfood Powder</h3>
          <p>Cacao is a powerhouse of anti-aging and antioxidant properties.</p>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <MyLocation></MyLocation>
          </div>
          <h3>Horsetail a powerful herb</h3>
          <p>
            Has silica and antioxidant compounds to aid with the synthesis of
            collagen production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
