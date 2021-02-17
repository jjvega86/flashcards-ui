import React from "react";
import "./CardForm.css";
import axios from "axios";

// this class will accept the id of the current collection and post both title and description to the collection
// using a POST call in Axios on the handleSubmit function
// PROPS: collectionId of activeCollection

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
      let collectionId = this.props.collectionId;
      axios.post(`http://localhost:5000/api/Flashcards/collections/${collectionId}`, card)
        .then(res => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

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
