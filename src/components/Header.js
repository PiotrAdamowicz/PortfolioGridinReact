import React from "react";
import picture from "../img/PiotrAdamowicz.png";

import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <header>
      <div className="photo col1">
        <img src={picture} alt="dragon" />
      </div>
      <div className="col2">
        <div className="name socialMedia">
          <h1>Piotr Adamowicz</h1>

          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <h2 className="position">Junior Front-End Developer</h2>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
