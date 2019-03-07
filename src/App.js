import React, { Component } from "react";
import List from "./List";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    items: []
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    this.setState({
      text: "",
      items: [...this.state.items, this.state.text]
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.text}
            onChange={this.onChange}
            placeholder="type here"
          />
          <button>add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
