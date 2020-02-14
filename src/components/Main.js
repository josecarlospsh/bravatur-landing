import React, { Component } from "react";

import FormSuscribe from "./FormSuscribe";

class Main extends Component {
  render() {
    return (
      <main className="App-main">
        <div className="App-sideleft">
          <div className="App-title" dangerouslySetInnerHTML={{__html: this.props.title}}></div>
          <FormSuscribe />
        </div>
        <div className="App-sideright"></div>
      </main>
    );
  }
}

export default Main;
