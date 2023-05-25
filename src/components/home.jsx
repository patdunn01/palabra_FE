import React from "react";
import { ReactComponent as France1 } from "../icons/France_1.svg";
import { ReactComponent as Spain1 } from "../icons/Spain_1.svg";
import { ReactComponent as Italy1 } from "../icons/Italy_1.svg";

function Home() {
  return (
    <div className="home">
      <p>
        Palabra</p>
        <p>
        Select Language...
      </p>
      <div>
        <button className="language-button-homepage">
          <France1 className="button-image" />
        <p>French</p>
        </button>
        <button className="language-button-homepage">
          <Spain1 className="button-image" />
        </button>
        {/* <p>Spanish</p> */}
        <button className="language-button-homepage">
          <Italy1 className="button-image" />
        </button>
        {/* <p>Italian</p> */}
      </div>
    </div>
  );
}

export default Home;
