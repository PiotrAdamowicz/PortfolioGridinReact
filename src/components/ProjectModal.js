import React, { Component } from "react";
import dragon from "../img/dragon800x600.jpg";

class ProjectModal extends Component {
  state = {
    showDetails: false
  };
  render() {
    return (
      <div>
        {this.state.showDetails ? (
          <>
            <h3>Project Name</h3>
            <p>Something about given project</p>
            <button>To Projects</button>
          </>
        ) : (
          false
        )}
        <img
          onClick={() => {
            this.setState(prevState => ({
              showDetails: !prevState.showDetails
            }));
          }}
          src={dragon}
          alt="argh responsivenes"
        />
      </div>
    );
  }
}

export default ProjectModal;
