import React, { Component } from "react";
import "./app.css";

import NavBar from './NavBar/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <NavBar />
      </div>
    );
  }
}

export default App;
