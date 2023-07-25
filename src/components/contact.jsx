import React from "react";
import { ReactComponent as Location } from "../icons/Location.svg";
import { useEffect } from "react";
import MapContainer from "./map";

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact_container">
      <div className="location_animation">
        <Location />
      </div>
      <p>
        <h4>Find us at:</h4>
        Palabra HQ<br></br>
        26C Dalmeny Road<br></br>
        LONDON <br></br>
        N7 0DX <br></br>
        <h4>Email:</h4>
        info@palabra.co.uk<br></br>
      </p>
      <div className="contact_map">
        <MapContainer />
      </div>
    </div>
  );
}
