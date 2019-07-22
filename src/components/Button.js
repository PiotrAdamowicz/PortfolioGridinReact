import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud, faHome } from "@fortawesome/free-solid-svg-icons";

const Button = props => {
  const { id } = props.data;
  const { click } = props;
  console.log(props.data.icon);

  return (
    <button className={`menuButton ${id}`} id={id} key={id} onClick={click}>
      <FontAwesomeIcon icon={props.data.icon} />
      <span>Home</span>
    </button>
  );
};

export default Button;
