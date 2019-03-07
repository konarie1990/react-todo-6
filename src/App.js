import React, { Component } from "react";
import List from "./List";
import { Button, Input } from "reactstrap";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    key: "",
    items: []
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    this.setState({
      text: "",
      key: Date.now(),
      items: [...this.state.items, this.state.text]
    });
    e.preventDefault();
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems
    });
  };
  render() {
    console.log(this.state.key);
    return (
      <div className="App">
        <form className="App" onSubmit={this.onSubmit}>
          <Input
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="type here"
          />
          <Button color="danger" block>
            add
          </Button>
        </form>
        <List delete={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}

export default App;
