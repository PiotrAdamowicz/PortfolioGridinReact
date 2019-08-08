import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import NavButton from "../components/NavButton";
import NavContext from "../contexts/NavContext";
import NavContextProvider from "../contexts/NavContext";

class Navigation extends Component {
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
    const { home, resume, projects, contact } = this.state.card;
    return (
      <nav className="menu">
        <NavContextProvider>
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
        </NavContextProvider>
        {/* <button
          className="menuButton Home"
          id={home.id}
          key={home.id}
          onClick={this.clickHandler.bind(this, home.id)}
        >
          <div className="home_button_wrap">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </div>
        </button> */}
        {/* <button
          className="menuButton Resume"
          id={resume.id}
          key={resume.id}
          onClick={this.clickHandler.bind(this, resume.id)}
        >
          <div className="resume_button_wrap">Resume</div>
        </button>
        <button
          className="menuButton Projects"
          onClick={this.clickHandler.bind(this, projects.id)}
          id={projects.id}
          key={projects.id}
        >
          <div className="projects_button_wrap">Projects</div>
        </button>
        <button
          className="menuButton Contact"
          id={contact.id}
          key={contact.id}
          onClick={this.clickHandler.bind(this, contact.id)}
        >
          <div className="contact_button_wrap">Contact</div>
        </button> */}
      </nav>
    );
  }
}

export default Navigation;
