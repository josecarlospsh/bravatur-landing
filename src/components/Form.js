import React, { Component } from "react";
import arrowSend from "../arrow-long-right.svg";


class Form extends Component {
  render() {
    return (
      <div className="App-form">
        <input type="email" placeholder="Suscribe" />
        <button>
          <img src={arrowSend} alt="" />
        </button>
      </div>
    );
  }
}

export default Form;
