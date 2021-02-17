import React, { Component } from "react";
import axios from "axios";
import "./app.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import CardDisplay from "./components/CardDisplay/CardDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCollections: [{
        cards: []
      }],
      activeCollectionIndex: 0,
    };

    this.makeActiveCollection = this.makeActiveCollection.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Flashcards/collections")
      .then((res) => {
        const collections = res.data;
        this.setState({
          cardCollections: collections
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  makeActiveCollection = (index) => {
    this.setState({
      activeCollectionIndex: index,
    });
  };

  render() {
    if (!this.state.cardCollections) return null;
    {
      /*Prevent the component from rendering until data has been fetched in app.jsx*/
    }
    console.log(this.state.cardCollections.cards)
    let collection = this.state.cardCollections[this.state.activeCollectionIndex]
    let cards = collection.cards;
    console.log(cards);
    

    return (
      <div>
        <NavBar />
        <br></br>
        <div className="container fluid">
          <div className="row">
            <div className="col-md-4">
              <SideBar
                collections={this.state.cardCollections}
                activeCollectionIndex={this.state.activeCollectionIndex}
                makeActive={this.makeActiveCollection}
              />
            </div>
            <div className="col-md-8">
              <CardDisplay cards={cards}        
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
