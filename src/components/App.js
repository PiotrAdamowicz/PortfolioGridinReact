import React from "react";
import "../styles/App.css";
import dragon from "../img/dragon800x600.jpg";

import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header>
        <div className="photo col1">
          <img src={dragon} alt="dragon" />
        </div>
        <div className="col2">
          <h1>Piotr Adamowicz</h1>
          <div className="socialMedia">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <nav className="menu">
            <div className="Home">Home</div>
            <div className="Resume">Resume</div>
            <div className="Projects">Projects</div>
            <div className="Contact">Contact</div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
