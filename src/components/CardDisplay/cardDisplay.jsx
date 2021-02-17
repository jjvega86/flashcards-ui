import React, { Component } from "react";
import "./CardDisplay.css";
import Card from "./Card/Card";
import CardCounter from "./CardCounter/CardCounter";

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
    };

    this.moveToNextCard = this.moveToNextCard.bind(this);
    this.moveToPreviousCard = this.moveToPreviousCard.bind(this);
  }

  moveToNextCard = () => {
    let tempCardNumber = this.state.currentCard;
    tempCardNumber++;
    if (tempCardNumber > this.props.cards.length - 1) {
      tempCardNumber = 0;
    }
    this.setState({
      currentCard: tempCardNumber,
    });
  };

  moveToPreviousCard = () => {
    let tempCardNumber = this.state.currentCard;
    tempCardNumber--;
    if (tempCardNumber < 0) {
      tempCardNumber = this.props.cards.length - 1;
    }
    this.setState({
      currentCard: tempCardNumber,
    });
  };

  setCurrentCard = () => {
    let card = {
      title: "",
      description: "",
    };
    if (this.props.cards.length === 0) {
      card.title = "Title";
      card.description = "Description";
    } else {
      card = this.props.cards[this.state.currentCard];
    }

    return card;
  };

  render() {
    let card = this.setCurrentCard();
    console.log(this.props.cards[this.state.currentCard]);
    return (
      <div className="container-fluid carddisplay">
        <div className="row">
          <div className="col-md-2">
            <button onClick={() => this.moveToPreviousCard()}>
              {" "}
              Previous Card{" "}
            </button>
          </div>
          <div className="col-md-6">
            <Card activeCard={card} />
          </div>
          <div className="col-md-2">
            <button onClick={() => this.moveToNextCard()}> Next Card </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <CardCounter
              currentCard={this.state.currentCard}
              collectionTotal={this.props.cards.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
