import React from "react";
import "./Card.css";

const Card = (props) => {
  return (

    <div className="cardStyle">
      <h3>{props.activeCard.title}</h3>
      <h5>{props.activeCard.description}</h5>
    </div>
  );
};

export default Card;
