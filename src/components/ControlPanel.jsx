import React, { Component } from "react";
import Form from "./Form";

export class ControlPanel extends Component {
  render() {
    return (
      <div className="control-panel">
        <button onClick={this.props.setCreate}>Add Shoe</button>
        {(this.props.isCreating || this.props.editing) && (
          <Form
            onCreate={this.props.onCreate}
            onSubmit={this.props.onSubmit}
            isCreating={this.props.isCreating}
            editing={this.props.editing}
          />
        )}
      </div>
    );
  }
}

export default ControlPanel;
