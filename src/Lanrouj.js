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
      var x = document.getElementById("ranMom");
      if (x.style.display === "none") {
        x.style.display = "block";
      }
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

  toggleMomentList(){
    var x = document.getElementById("momentList");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  grabRanMoment(){
    return (
      <ul className="theList">
        <li key={Date.now()}>Fix me</li>
      </ul>
    );
  }
  emptyCookieJar(){

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

          <div id="ranMom" style={{display:"none"}}>
            <button 
              onClick={this.grabRanMoment}
            >
              Grab A Cookie!
            </button>
          </div>

          <button onClick={this.toggleMomentList}>Peep the Cookie Jar ;) UwU</button>
          <div id="momentList" style={{display:"none"}}>
            {<Momookies entries={this.state.moments}/>}
          </div>
          <div id="emptyJar" style={{display:"none"}}>
            <button 
              onClick={this.emptyCookieJar}
            >
              Grab A Cookie!
            </button>
          </div>

        </div>
      </div>
    );
  }
}
 
export default Lanrouj;
