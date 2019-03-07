import React, { Component } from "react";
import "./List.css";

class List extends Component {
  // delete <li> from <ul>
  delete = key => this.props.delete(key);

  createTasks = item => {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item}
      </li>
    );
  };

  render() {
    const todoEntries = this.props.items;
    const listItems = todoEntries.map(this.createTasks);
    return <ul>{listItems}</ul>;
  }
}

export default List;
