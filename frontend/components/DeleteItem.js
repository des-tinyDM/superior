import React, { Component } from "react";

class DeleteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button>{this.props.children}</button>;
  }
}

export default DeleteItem;
