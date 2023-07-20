import React, { useState } from "react";
import { ReactComponent as France1 } from "../icons/France_1.svg";
import { ReactComponent as Spain1 } from "../icons/Spain_1.svg";
import { ReactComponent as Italy1 } from "../icons/Italy_1.svg";

function Home() {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (route) => {
    console.log(route)
    setClickedButton(route);

    setTimeout(() => {
      
      window.location.href = route;
    }, 1500);
  };

  return (
    <div>
      <div className="home">
        <p>Select Language...</p>
        <div>
          <button
            className={`language-button-homepage ${
              clickedButton === "/french" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/french")}
          >
            <France1 className="button-image" />
            <p>French</p>
          </button>
          <button
            className={`language-button-homepage ${
              clickedButton === "/spanish" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/spanish")}
          >
            <Spain1 className="button-image" />
            <p>Spanish</p>
          </button>
          <button
            className={`language-button-homepage ${
              clickedButton === "/italian" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("/italian")}
          >
            <Italy1 className="button-image" />
            <p>Italian</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
