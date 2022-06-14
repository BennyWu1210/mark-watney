import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ color }) {
  const [showNavBackground, setNavBackground] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 600 && !showNavBackground) {
      setNavBackground(true);
    } else if (window.scrollY < 480 && showNavBackground) {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  const getContrastColor = () => {
    return color == "black" ? "#242424" : "#fff";
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: showNavBackground
            ? getContrastColor()
            : "transparent",
        }}
      >
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={"nav-links-" + color}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/donate" className={"nav-links-" + color}>
                Donate
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/description" className={"nav-links-" + color}>
                Description
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <img src={require("../images/Mars_logo.png")} />
        </div>
      </nav>
    </>
  );
}
export default NavBar;
