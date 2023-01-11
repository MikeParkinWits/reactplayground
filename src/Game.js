import React, { Component } from "react";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "Lisa",
      score: 12,
    };
  }

  render() {
    // this.setState({ player: "Sandy" });

    return (
      <>
        <h1>Battleships</h1>
        <p>Current Player: {this.state.player}</p>
        <p>Current Score: {this.state.score}</p>
      </>
    );
  }
}
