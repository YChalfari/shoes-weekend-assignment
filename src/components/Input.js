import React from "react";
import "./input.css";
class Input extends React.Component {
  state = {
    value: this.props.editing ? this.props.value : "",
    label: this.props.editing ? this.props.label : "",
  };

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({ value: target.value });
  };

  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.label}>{`${this.props.label}:`}</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          name={this.props.label}
        />
      </div>
    );
  }
}

export default Input;
