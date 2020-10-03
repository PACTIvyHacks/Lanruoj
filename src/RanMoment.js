import React, { Component } from "react";

class RanMoment extends Component {
  constructor(props) {
    super(props);
    this.state = {listMoment:null};
    this.createRanMoment = this.createRanMoment.bind(this);
  }
    createRanMoment(moments) {
      const ranMom=moments[Math.floor(Math.random()*moments.length)];
      this.setState(state => ({
        listMoment: ranMom
      }));
  }


 
  render() {
    if(this.props.isEmpty){
      return null;
    }
    if(this.state.listMoment === null){
        return (<button onClick={() => {this.createRanMoment(this.props.entries)}}> 
                  Grab a Cookie
                </button>);
    }

    return (
      <div>
        <ul className="theList">
          <li key={this.state.listMoment.key}>{this.state.listMoment.text}</li>
        </ul>
        <button onClick={() => {this.createRanMoment(this.props.entries)}}> 
          Grab a Cookie
        </button>
      </div>
    );
  }
};
 
export default RanMoment;
