import React, { Component } from "react";

export default class Hello extends Component {
  static defaultProps = {
    to: "Anonymous",
    from: "John",
  };

  render() {
    const { to, from } = this.props;
    return <h1>Hello {to}!</h1>;
  }
}
