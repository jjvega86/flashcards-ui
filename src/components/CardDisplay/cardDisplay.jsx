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

  moveToNextCard = () => {
    let tempCardNumber = this.state.currentCard;
    tempCardNumber++;
    if(tempCardNumber > this.props.cards.length-1){
      tempCardNumber = 0;
    }
    this.setState({
      currentCard: tempCardNumber
    })

  }

  moveToPreviousCard = () => {
    let tempCardNumber = this.state.currentCard;
    tempCardNumber--;
    if(tempCardNumber < 0){
      tempCardNumber = this.props.cards.length-1;
    }
    this.setState({
      currentCard: tempCardNumber
    })

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
            <button onClick={()=>this.moveToNextCard()}>  </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
