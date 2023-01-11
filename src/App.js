import React, { Component } from "react";
import Button from "./Button";
import ButtonClicker from "./ButtonClicker";
import Game from "./Game";
import Hello from "./Hello";
import Randomizer from "./Randomizer";
import { Route, Routes, Link, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        {/* <Hello to="Ringo" from="John" />
        <Hello to="Ringo" from="John" />
        <Hello to="Ringo" from="John" />
        <Hello /> */}
        {/* <Game /> */}
        {/* <Randomizer maxNum={10} /> */}
        {/* <ButtonClicker />
        <h1>Hello</h1> */}

        <nav>
          <NavLink
            className={(navData) =>
              navData.isActive ? console.log("Hello") : ""
            } //This form of 'className' replaces activeClassName => see https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m
            to="/dog"
          >
            Dog
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/reactplayground" element={<Button />} />
          <Route path="/reactplayground/dog" element={<Game />} />
          <Route path="/reactplayground/contact" element={<Hello />} />
        </Routes>
      </>
    );
  }
}
