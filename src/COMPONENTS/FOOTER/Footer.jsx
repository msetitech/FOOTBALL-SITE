import React from "react";
import "./footer.css";
import { X } from "@mui/icons-material";
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
            <div className="singleFanTweets">
              <div className="nameandIcon">
                <X></X>
                <p>msetitech</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis beatae accusantium ad iure provident vitae voluptates
                vero temporibus sit hic?
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
