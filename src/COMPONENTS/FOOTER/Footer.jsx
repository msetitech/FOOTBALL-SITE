import React from "react";
import "./footer.css";
import { X } from "@mui/icons-material";
const fansComments = [
  {
    name: "Mkongo Jr",
    comment: `"Another stunning moment from #InterMiami! 🌟 Picture of the day is all about that winning spirit! ⚽🔥 #WeAreInterMiami"`,
  },
  {
    name: "Mlacha Fans",
    comment: `"Just a glimpse of what makes #InterMiami special. Here’s today’s pic! 💥💙 #MiamiSoccer"`,
  },
  {
    name: "Danzack",
    comment: `"Game face on and ready to roll! #InterMiami never stops amazing us. 🔥💙 #PictureOfTheDay"`,
  },
  {
    name: "SurusHold",
    comment: `"Today’s shot says it all—passion, pride, and #InterMiami! 💪⚽ #MiamiLife"`,
  },
  {
    name: "msetitech",
    comment: `"Always proud to support #InterMiami. Here’s today’s snapshot! 📸💙 #MiamiVibes"`,
  },
];

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="topFooter">
          <div className="leftTopFooter">
            <h1>IMAGE OF THE DAY</h1>
            <img src="images/dayimage.png" alt="" />
          </div>
          <div className="rightTopFooter">
            <h1>FAN TWEETS</h1>
            {fansComments.map((fans, i) => (
              <div className="singleFanTweets" key={i}>
                <div className="nameandIcon">
                  <X></X>
                  <p>{fans.name}</p>
                </div>
                <p>{fans.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottomfooter">
          <ul>
            <li>HOME</li>
            <li>NEWS</li>
            <li>TEAM</li>
            <li>SHOP</li>
            <li>TICKETS</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
