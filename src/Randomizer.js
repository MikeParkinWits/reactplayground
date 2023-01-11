import React, { Component } from "react";

export default class Randomizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }

  makeTimer() {
    setInterval(() => {
      //generate a number
      let rand = Math.floor(Math.random() * this.props.maxNum);

      //setState of that number
      this.setState({ num: rand });
    }, 1000);
  }

  render() {
    return <>{this.state.num}</>;
  }
}
