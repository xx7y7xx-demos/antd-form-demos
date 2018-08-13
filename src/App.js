import React, { Component } from "react";
import debugModule from "debug";

import logo from "./logo.svg";
import "./App.css";
import EditForm from "./EditForm";

const debug = debugModule("antd-form-demos:App");

class App extends Component {
  state = {
    parent: ''
  }
  handleChange = event => this.setState({ parent: event.target.value })
  render() {
    debug('render()', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={this.state.parent} onChange={this.handleChange} />
        <EditForm />
      </div>
    );
  }
}

export default App;
