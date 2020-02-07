import React, { Component } from "react";
//import logo from '../logo.svg'

import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <Nav menu={this.props.menu} />
      </header>
    );
  }
}

export default Header;
