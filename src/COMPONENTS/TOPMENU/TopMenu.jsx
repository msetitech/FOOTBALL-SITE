// import React from "react";
// import "./topmenu.css";
// import { Link } from "react-router-dom";
// import { ViewHeadline } from "@mui/icons-material";

// export default function TopMenu() {
//   return (
//     <div>
//       <nav>
//         <div className="logo">
//           <div className="logoOnly">
//             <img src="images/logo.png" alt="" />
//           </div>
//         </div>
//         <div className="topmenu">
//           <ul>
//             <li>
//               <Link to="/" className="link">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="link">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/blog" className="link">
//                 Blog
//               </Link>
//             </li>
//             <li></li>
//           </ul>
//         </div>
//         <div className="notfication">
//           <ViewHeadline></ViewHeadline>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./topmenu.css";
import { Link } from "react-router-dom";
import { ViewHeadline } from "@mui/icons-material";

export default function TopMenu() {
  // State to manage notification toggle and menu visibility
  const [notificationActive, setNotificationActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to handle the notification icon click
  const handleNotificationClick = () => {
    setNotificationActive(!notificationActive);
    setMenuVisible(!menuVisible); // Toggle the menu visibility
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <div className="logoOnly">
            <img src="images/logo.png" alt="" />
          </div>
        </div>
        <div className={`topmenu ${menuVisible ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                className="link"
                onClick={() => setMenuVisible(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="link"
                onClick={() => setMenuVisible(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="link"
                onClick={() => setMenuVisible(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="notfication">
          <ViewHeadline
            onClick={handleNotificationClick}
            className={`notification-icon ${
              notificationActive ? "active" : ""
            }`}
          />
        </div>
      </nav>
    </div>
  );
}
