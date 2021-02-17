import React from "react";
import "./CardForm.css";
import axios from "axios";

// this class will accept the id of the current collection and post both title and description to the collection
// using a POST call in Axios on the handleSubmit function

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        title: "",
        description: "" 
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
      const card = {
          title: this.state.title,
          description: this.state.description
      }
  };

  addNewCard = (card) => {

  }

  render() {
    return (
      <form>
        <label>
          Card Title:
          <textarea type="title" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Card Description:
          <textarea type="description" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CardForm;
