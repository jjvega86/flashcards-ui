import React, { Component } from "react";
import "./app.css";

import NavBar from "./components/NavBar/navbar";
import Footer from './components/Footer/footer'
import SideBar from './components/SideBar/sidebar';

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
              <SideBar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
