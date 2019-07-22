import React from "react";

const Card = props => {
  const { title, paragraphs, cardID } = props;
  return (
    <div className={`card_${cardID}`}>
      <h3>{title}</h3>
      <p>{paragraphs[0]}</p>
      <p>{paragraphs[1]}</p>
      <span>{paragraphs[2]}</span>
    </div>
  );
};

export default Card;
