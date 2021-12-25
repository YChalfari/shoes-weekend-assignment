import React from "react";
import Input from "./Input";
import Button from "./Button";
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
    this.props.onFormSubmit(this.props.page, this.state);
  };
  renderInputs() {
    Object.entries(this.state).map((entry, i) => (
      <Input key={i} label={entry[0]} value={entry[1]} />
    ));
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>
          {this.props.type === "create"
            ? "Create new shoe"
            : `Edit shoe #${this.props.editing && this.props.editing.id}`}
        </h2>
        {this.renderInputs()}
        <Button type="submit" text={"Submit"} />
      </form>
    );
  }
}
export default Form;
