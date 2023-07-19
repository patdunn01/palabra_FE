import React, { useState } from "react";
import { ReactComponent as France1 } from "../icons/France_1.svg";
import { ReactComponent as Spain1 } from "../icons/Spain_1.svg";
import { ReactComponent as Italy1 } from "../icons/Italy_1.svg";
import { Link } from "react-router-dom";

function Home() {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (route) => {
    console.log(route);
    setClickedButton(route);

    setTimeout(() => {
      // Remove this line since we are using Link now
      // window.location.href = route;
    }, 1500);
  };

  return (
    <div>
      <div className="home">
        <p>Select Language...</p>
        <div>
          {/* Use Link instead of button */}
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
        </div>
      </div>
    </div>
  );
}

export default Home;
