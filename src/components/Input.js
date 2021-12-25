import React from "react";

class Input extends React.Component {
  state = {
    value: this.props.data || "",
    label: this.props.label,
  };

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({ value: target.value });
    this.props.onChange(target.label, target.value);
  };

  render() {
    return (
      <div className="input-wrap">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          onChange={this.handleInputChange}
          value={this.state.value}
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default Input;
