import React, { useRef, useState } from "react";
import "./index.scss";
const Menu = () => {
  const [toggle, setToggle] = useState(true);
  
  const ischecked = (evt) => {
    if (evt.target.checked === true) {
      setToggle(false);
      document.body.style.overflow = "hidden";
    } else {
      setToggle(true);
      document.body.style.overflow = "auto";
    }
  };

  const onScroll = (id) => {
    setToggle((prev) => !prev);
    // document.getElementById("navbar").style.display = "none";

    setTimeout(() => {
      window.location.hash = id;
      document.body.style.overflow = "auto";
    }, 0);
  };

  return (
    <>
      <div>
        <div className="navbar-container">
          <input
            id="active"
            type="checkbox"
            name
            defaultChecked={false}
            onClick={(evt) => ischecked(evt)}
          />
          <label htmlFor="active" className="menu_btn" id="menuBtn">
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
          </label>
          <div className="header-container">
            <ul className="mobile-menu">
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#popular">popular</a>
              </li>
              <li>
                <a href="#form">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
