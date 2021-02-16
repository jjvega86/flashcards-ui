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
      cardCollections: [],
      activeCollection: ''
    };

    this.makeActiveCollection = this.makeActiveCollection.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Flashcards/collections")
      .then((res) => {
        const collections = res.data;
        this.setState({ cardCollections: collections });
      });
  }

  makeActiveCollection = (index) => {
    console.log(index);
    this.setState({
      activeCollection: index
    });
    console.log(this.state.activeCollection);
  };

  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <div className="container fluid">
          <div className="row">
            <div className="col-md-4">
              <SideBar
                collections={this.state.cardCollections}
                activeCollection={this.state.activeCollection}
                makeActive={this.makeActiveCollection}
              />
            </div>
            <div className="col-md-8">
              <CardDisplay />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
