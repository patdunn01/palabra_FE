import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as France1 } from "../icons/France_1.svg";
import { ReactComponent as Spain1 } from "../icons/Spain_1.svg";
import { ReactComponent as Italy1 } from "../icons/Italy_1.svg";

function Home() {
  return (
    <div>
      <div className="home">
        <p>Select Language...</p>
        <div>
          <Link to="/french">
            <button className="language-button-homepage">
              <France1 className="button-image" />
              <p>French</p>
            </button>
          </Link>
          <Link to="/spanish">
            <button className="language-button-homepage">
              <Spain1 className="button-image" />
              <p>Spanish</p>
            </button>
          </Link>
          <button className="language-button-homepage">
            <Italy1 className="button-image" />
            <p>Italian</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
