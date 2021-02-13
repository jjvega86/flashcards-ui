import React, { Component } from "react";
import "./app.css";

import NavBar from "./NavBar/navbar";
import Footer from './Footer/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <div className="container fluid">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
