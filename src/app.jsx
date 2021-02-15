import React, { Component } from "react";
import axios from 'axios';
import "./app.css";

import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import SideBar from "./components/SideBar/sidebar";
import CardDisplay from "./components/CardDisplay/cardDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCollections: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/Flashcards/collections')
    .then(res => {
      const collections = res.data;
      this.setState({cardCollections: collections})
      console.log(this.state.cardCollections);
    });

  }

  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <div className="container fluid">
          <div className="row">
            <div className="col-md-4">
              <SideBar collections={this.state.cardCollections}/>
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
