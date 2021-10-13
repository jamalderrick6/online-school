import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Logo from "../assets/images/kuazone.svg";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

export default function Navigation(props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation" role="navigation">
      <div className="container">
        <div className="wrapper">
          <Link to="/">
            OnlineSchool
            {/* <img className="logo" alt="kuazone logo" src={Logo} /> */}
          </Link>
          <div className={`menu-content-container ${menuActive && "active"}`}>
            <ul>
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
