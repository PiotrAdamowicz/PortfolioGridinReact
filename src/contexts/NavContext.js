import React, { createContext, Component } from "react";

export const NavContext = createContext();

class NavContextProvider extends Component {
  state = {
    card: {
      home: {
        id: "home",
        title: "Hi my name is Peter...",
        paragraphs: [
          "I'm an aspiring front-end developer. Currently I'm working full time in unrelated industry. This portfolio is a story of me learning the craft, trying to manage time and all the other activities. But... the biggest struggle is trying to sort myself.",
          `Gosh that sound serious. If you want to know more about me...`,
          "I welcome you..."
        ]
        // TODO: Maybe Jonny Cash and animation after Welcome!
      },
      resume: {
        id: "resume",
        title: "My work expirience",
        paragraphs: [
          "At present I work full time at MSWiA Hospital in Białystok as paramedic. Because it’s unrelated to IT industry I’ve tried to add other activities that may interest potential employers."
        ]
      },
      projects: {
        id: "projects",
        title: "My learning experience",
        paragraphs: [
          "Below you can find selection of my works, mostly unfinished. Those works are in progress. The main goal here is to learn. The more I learn, more skills I have, the closer I get to finished projects."
        ]
      },
      contact: {
        id: "contact",
        title: "If you want to:",
        paragraphs: [
          "contact me with any questions, ",
          "work offers, ",
          "or just want to checkout my facebook, github go ahead."
        ]
      }
    },
    isActive: {
      home: true,
      resume: false,
      projects: false,
      contact: false
    }
  };
  render() {
    return (
      <NavContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </NavContext.Provider>
    );
  }
}

export default NavContextProvider;
