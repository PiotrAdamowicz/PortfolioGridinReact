import React from "react";

const Card = props => {
  return (
    <sectioin className={`card_${props.cardID}`}>
      <div className={props.cardID}>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
      </div>
    </sectioin>
  );
};

export default Card;
