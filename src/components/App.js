import React, { Component } from "react";
import "../styles/App.css";
import dragon from "../img/person1.jpg";

import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../components/Card";
import Resume from "../components/Resume";

class App extends Component {
  state = {
    card: {
      home: {
        id: "home",
        title: "Hi my name is Peter...",
        paragraphs: [
          "I'm an aspiring front-end developer. Curently i'm working full time in unrelated industry. This portfolio is a story of me lerning the craft, trying to manage time and all the other activites. But... the bigest struggle is trying to sort myself",
          `Gosh that sound serious. If you want to know more about me...`,
          "I welcome you"
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
        title:
          "All of those count as work in progres that I'm proud enough to show",
        paragraphs: ["Yeah Tic Tac Toe and this portfolio"]
      },
      contact: {
        id: "contact",
        title: "Write me Please",
        paragraphs: ["Hmmm will see"]
      }
    },
    isActive: {
      home: false,
      resume: true,
      projects: false,
      contact: false
    }
  };

  clickHandler(id) {
    //TODO: Need to find a way to refactor this
    let isActive = {};
    switch (id) {
      case "home":
        isActive = {
          home: true,
          resume: false,
          projects: false,
          contact: false
        };
        break;
      case "resume":
        isActive = {
          home: false,
          resume: true,
          projects: false,
          contact: false
        };
        break;
      case "projects":
        isActive = {
          home: false,
          resume: false,
          projects: true,
          contact: false
        };
        break;
      case "contact":
        isActive = {
          home: false,
          resume: false,
          projects: false,
          contact: true
        };
        break;
      default:
        break;
    }
    this.setState({ isActive });
  }

  render() {
    const { home, resume, projects, contact } = this.state.card;
    const { isActive } = this.state;
    return (
      <div className="App">
        <header>
          <div className="photo col1">
            <img src={dragon} alt="dragon" />
          </div>
          <div className="col2">
            <div className="name socialMedia">
              <h1>Piotr Adamowicz</h1>

              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <h2 className="position">Junior Front-End Developer</h2>
            <nav className="menu">
              {/* TODO: CONSIDER REFACTORING TO SINGLE NAV COMPONENT */}
              <button
                className="menuButton Home"
                id={home.id}
                key={home.id}
                onClick={this.clickHandler.bind(this, home.id)}
              >
                <div className="home_button_wrap">
                  <FontAwesomeIcon icon={faHome} />
                  <span>Home</span>
                </div>
              </button>
              <button
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
              </button>
            </nav>
          </div>
        </header>
        <main>
          {isActive.home ? (
            <Card
              cardID={home.id}
              title={home.title}
              paragraphs={home.paragraphs}
            />
          ) : (
            false
          )}
          {isActive.resume ? (
            <>
              <Card
                cardID={resume.id}
                title={resume.title}
                paragraphs={resume.paragraphs}
                click={this.clickHandler}
              />
              <Resume />
            </>
          ) : (
            false
          )}
          {isActive.projects ? (
            <Card
              cardID={projects.id}
              title={projects.title}
              paragraphs={projects.paragraphs}
            />
          ) : (
            false
          )}
          {isActive.contact ? (
            <Card
              cardID={contact.id}
              title={contact.title}
              paragraphs={contact.paragraphs}
            />
          ) : (
            false
          )}
        </main>
        {/* <footer>
          <a href="#">
            <FontAwesomeIcon icon={faCloud} /> Dwonload Resume
          </a>
        </footer> */}
      </div>
    );
  }
}

export default App;
