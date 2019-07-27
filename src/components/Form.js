import React, { Component } from "react";

class Form extends Component {
  state = { form: "" };
  render() {
    return (
      <form>
        <div class="form-group">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text bg-danger text-white">
                <i class="fas fa-user" />
              </span>
            </div>
            <input
              type="text"
              class="form-control bg-dark text-white"
              placeholder="Name"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text bg-danger text-white">
                <i class="fas fa-envelope" />
              </span>
            </div>
            <input
              type="email"
              class="form-control bg-dark text-white"
              placeholder="Email"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text bg-danger text-white">
                <i class="fas fa-pencil-alt" />
              </span>
            </div>
            <textarea
              class="form-control bg-dark text-white"
              placeholder="Name"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Submit"
          class="btn btn-danger btn-block btn-lg"
        />
      </form>
    );
  }
}

export default Form;
