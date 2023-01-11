import React, { Component } from "react";

export default class ButtonClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1,
    };

    this.genRandom = this.genRandom.bind(this);
  }

  genRandom(e) {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ num: rand });
  }

  render() {
    return (
      <>
        <h1>Your Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>YOU WIN!!</h2>
        ) : (
          <button onClick={this.genRandom}>Click Me!</button>
        )}
      </>
    );
  }
}
