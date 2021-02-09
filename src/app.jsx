import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Header from "./Header/header";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Row>
          <Col md={4} xs={6}>
            <h1 className="header">Hello, World!</h1>
          </Col>
          <Col>
            <p>Welcome to my site!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
