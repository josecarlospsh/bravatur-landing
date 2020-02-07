import React, { Component } from "react";

import FormSuscribe from "./FormSuscribe";

class Main extends Component {
  render() {
    return (
      <main className="App-main">
        <div className="App-sideleft">
          <h1 className="App-title" dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
          <FormSuscribe />
        </div>
        <div className="App-sideright"></div>
      </main>
    );
  }
}

export default Main;
