import React, { Component } from "react";

import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex justify-content-between"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder="add post"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add post
        </button>
      </form>
    );
  }
}
