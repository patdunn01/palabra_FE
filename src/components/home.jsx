import React, { useState, useEffect } from "react";
import { ReactComponent as France1 } from "../icons/France_1.svg";
import { ReactComponent as Spain1 } from "../icons/Spain_1.svg";
import { ReactComponent as Italy1 } from "../icons/Italy_1.svg";
import { ReactComponent as Germany1 } from "../icons/Germany_1.svg";
import { ReactComponent as BubblesSVG } from "../icons/Colour_speech1.svg";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (route) => {
    setClickedButton(route);

    setTimeout(() => {}, 1500);
  };

  return (
    <div>
      <div className="home-about">
        <h2>Colour the Conversation with Palabra</h2>
        <div className="home-about-bubble">
          <BubblesSVG />
        </div>
        
      </div>

      <div className="home">
        <h6>Select Language...</h6>
        <div className="buttons_container">
          <Link
            to="/french"
            className={`language-button-homepage ${
              clickedButton === "/french" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/french")}
          >
            <France1 className="button-image" />
            <p>French</p>
          </Link>
          <Link
            to="/spanish"
            className={`language-button-homepage ${
              clickedButton === "/spanish" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/spanish")}
          >
            <Spain1 className="button-image" />
            <p>Spanish</p>
          </Link>
          <Link
            to="/italian"
            className={`language-button-homepage ${
              clickedButton === "/italian" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/italian")}
          >
            <Italy1 className="button-image" />
            <p>Italian</p>
          </Link>
          <Link
            to="/german"
            className={`language-button-homepage ${
              clickedButton === "/german" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/italian")}
          >
            <Germany1 className="button-image" />
            <p>German</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
