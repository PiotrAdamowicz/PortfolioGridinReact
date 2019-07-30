import React, { Component } from "react";

import Project from "../components/ProjectModal";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "TicTacToe",
        description:
          "Classic offline 2 players Tic Tac Toe Game written in vanilla JS. My first baby written just to see if I can",
        url: ""
      }
    ],
    active: ""
  };

  clickHandler() {
    console.log("Działa");
  }

  render() {
    return (
      <section>
        <Project id="ticTacToe" />
        <Project id="ticTacToe" />
        <Project id="ticTacToe" />
        <Project id="ticTacToe" />
        <Project id="ticTacToe" />
      </section>
    );
  }
}

export default Projects;
