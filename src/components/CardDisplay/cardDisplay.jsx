import React, { Component } from "react";
import "./CardDisplay.css";
import Card from "./Card/Card";

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <button></button>
          </div>
          <div className="col-md-6">
            <Card activeCard={this.props.cards[this.state.currentCard]} />
          </div>
          <div className="col-md-2">
            <button></button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
