import React, { Component } from "react";
import "./App.css";
import CalcButton from "./CalcButton";
import Calculator from "./Calculator";
class App extends Component {
  state = {
    clicked: false
  };

  handleChange = () => {
    this.setState(state => ({ clicked: !state.clicked }));
    console.log(this.state.clicked);
  };
  render() {
    return (
      <div id="calcLite">
        <Calculator clicked={this.state.clicked} />
        <CalcButton click={this.handleChange} />
      </div>
    );
  }
}

export default App;
