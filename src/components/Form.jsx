import React from "react";
import Input from "./Input";

class Form extends React.Component {
  state = {
    model: (this.props.editing && this.props.editing.model) || "",
    description: (this.props.editing && this.props.editing.description) || "",
    price: (this.props.editing && this.props.editing.price) || "",
    color: (this.props.editing && this.props.editing.color) || "",
  };
  handleOnChange = (label, value) => {
    this.setState({ [label]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const newShoe = { ...this.props.editing };
    const el = [...e.target.elements];
    el.forEach((e) => (newShoe[e.name] = e.value));
    if (this.props.isCreating) {
      this.props.onCreate(newShoe);
    } else {
      this.props.onSubmit(newShoe);
    }
  };
  renderInputs() {
    return Object.entries(this.state).map((entry, i) => {
      return (
        <Input
          key={i}
          label={entry[0]}
          value={entry[1]}
          isCreating={this.props.isCreating}
          editing={this.props.editing}
        />
      );
    });
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>
          {this.props.isCreating
            ? "Create new shoe"
            : `Edit shoe #${this.props.editing && this.props.editing.id}`}
        </h2>
        {this.renderInputs()}
        <input name="submit" type="submit" value="Make Changes" />
      </form>
    );
  }
}
export default Form;
