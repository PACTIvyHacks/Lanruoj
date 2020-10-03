import React, { Component } from "react";
 
class Lanrouj extends Component {
  render() {
    return (
      <div className="lanroujMain">
        <div className="header">
          <form>
            <input placeholder="enter motivating moment">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Lanrouj;
