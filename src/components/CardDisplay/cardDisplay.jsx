import React, { Component } from "react";
import "./CardDisplay.css";
import Card from './Card/Card';

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCollection: props.activeCollection,
      currentCard: ''
    };
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <button></button>
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <button></button>
        </div>
      </div>
        
      </div>
    );
  }
}

export default CardDisplay;
