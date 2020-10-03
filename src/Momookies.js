import React, { Component } from "react";
 
class Momookies extends Component {
    createMoments(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createMoments);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default Momookies;