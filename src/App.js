import React from "react";

import logo from "./logo-cbt.svg";
import imgcover from "./imgs-grupal.svg";

import "./sass/App.scss";

import Header from "./components/Header";
import Main from "./components/Main";

const menu = [
  { name: "Facebook", url: "https://www.facebook.com/BravaturViajes" },
  { name: "Twitter", url: "https://www.twitter.com/BravaturViajes" },
  { name: "Instagram", url: "https://www.instagram.com/BravaturViajes" },
  { name: "Whatsapp", url: "https://wa.me/051996898900" }
];
//const title = "<h1>¡Bienvenidos!</h1> <br> <h3>Tu próximo viaje <br> comienza aquí</h3>";
const title = "<h1>¡Bienvenido!</h1> <br> <h3>Inscríbete aquí para el sorteo y más novedades.</h3>";

function App() {
  return (
    <div className="App">
      <Header logo={logo} menu={menu} />
      <Main title={title} img={imgcover} />
    </div>
  );
}

export default App;
