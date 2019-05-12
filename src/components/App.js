import React, { Component } from "react";
import "../styles/App.css";
import dragon from "../img/person1.jpg";

import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../components/Card";

class App extends Component {
  state = {
    card: {
      home: {
        id: "home",
        title: "Welcome My Ass",
        paragraph:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate"
      },
      resume: {
        id: "resume",
        title: "My work expirience",
        paragraph: "Not much casue I suuuck"
      },
      projects: {
        id: "projects",
        title:
          "All of those count as work in progres that I'm proud enough to show",
        paragraph: "Yeah Tic Tac Toe and this portfolio"
      },
      contact: {
        id: "contact",
        title: "Write me Please",
        paragraph: "Hmmm will see"
      }
    },
    isActive: {
      home: true,
      resume: false,
      projects: false,
      contact: false
    }
  };

  clickHandler(id) {
    console.log(id);
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
              <button
                className="menuButton Home"
                id={home.id}
                key={home.id}
                onClick={this.clickHandler.bind(this, home.id)}
              >
                Home
              </button>
              <button
                className="menuButton Resume"
                id={resume.id}
                key={resume.id}
                onClick={this.clickHandler.bind(this, resume.id)}
              >
                Resume
              </button>
              <button
                className="menuButton Projects"
                onClick={this.clickHandler.bind(this, projects.id)}
                id={projects.id}
                key={projects.id}
              >
                Projects
              </button>
              <button
                className="menuButton Contact"
                id={contact.id}
                key={contact.id}
                onClick={this.clickHandler.bind(this, contact.id)}
              >
                Contact
              </button>
            </nav>
          </div>
        </header>
        <main>
          {isActive.home ? (
            <Card
              cardID={home.id}
              title={home.title}
              paragraph={home.paragraph}
            />
          ) : (
            false
          )}
          {isActive.resume ? (
            <Card
              cardID={resume.id}
              title={resume.title}
              paragraph={resume.paragraph}
              click={this.clickHandler}
            />
          ) : (
            false
          )}
          {isActive.projects ? (
            <Card
              cardID={projects.id}
              title={projects.title}
              paragraph={projects.paragraph}
            />
          ) : (
            false
          )}
          {isActive.contact ? (
            <Card
              cardID={contact.id}
              title={contact.title}
              paragraph={contact.paragraph}
            />
          ) : (
            false
          )}
        </main>
        <footer>
          <p>Something</p>
        </footer>
      </div>
    );
  }
}

export default App;
