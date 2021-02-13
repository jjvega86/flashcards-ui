import React, { Component } from "react";
import "./app.css";

import NavBar from "./NavBar/NavBar";

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
            <div className="col-md-12">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
