import React from "react";
import fr from "../../firebase/firebase";

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      state: "",
      description: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDataPost = e => {
    e.preventDefault();
    const db = fr.firestore();

    db.collection("prispevky").add({
      name: this.state.name,
      state: this.state.state,
      description: this.state.description
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleDataPost}>
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="text" name="state" onChange={this.handleChange} />
          <input type="text" name="description" onChange={this.handleChange} />
          <button type="submit">Submit data</button>
        </form>
      </div>
    );
  }
}

export default NewForm;
