import React, { Component } from "react";
import "./List.css";

class List extends Component {
  delete = key => this.state.delete(key);

  List = props => {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li onClick={() => this.delete(item.key)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}

export default List;
