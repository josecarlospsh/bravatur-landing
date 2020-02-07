import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="App-menu">
          {this.props.menu.map((m, i) => {
            return (
              <li key={i}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {m.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
