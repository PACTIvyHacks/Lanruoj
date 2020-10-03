import React, { Component } from "react";
import Momookies from "./Momookies"
import "./Lanrouj.css";
 
class Lanrouj extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      moments: []
    };

    this.addMoment = this.addMoment.bind(this);
  }

  addMoment(e) {
    if (this._inputElement.value !== "") {
      var newMoment = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          moments: prevState.moments.concat(newMoment) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.moments);
       
    e.preventDefault();
  }

  render() {
    return (
      <div className="lanroujMain">
        <div className="header">
          <form onSubmit={this.addMoment}>
            <input ref={(a) => this._inputElement = a} 
                  placeholder="enter motivating moment">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <Momookies entries={this.state.moments}/>
      </div>
    );
  }
}
 
export default Lanrouj;
