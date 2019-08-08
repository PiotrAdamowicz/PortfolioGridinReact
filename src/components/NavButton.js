import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavButton = props => {
  return (
    <button className="menuButton" />
    // <button
    //   className="menuButton Home"
    //   id={home.id}
    //   key={home.id}
    //   onClick={this.clickHandler.bind(this, home.id)}
    // >
    //   <div className="home_button_wrap">
    //     <FontAwesomeIcon icon={faHome} />
    //     <span>Home</span>
    //   </div>
    // </button>
  );
};

export default NavButton;
