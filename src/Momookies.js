import React, { Component } from "react";
import FlipMove from "react-flip-move"
 
class Momookies extends Component {
    createMoments(item) {
      return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var momentEntries = this.props.entries;
    var listMoments = momentEntries.map(this.createMoments);
 
    return (
      <ul className="theList">
        <FlipMove duration={200} easing="ease-out">
          {listMoments}
        </FlipMove>
      </ul>
    );
  }
};
 
export default Momookies;