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
  { name: "PROMO", url: "https://www.instagram.com/BravaturViajes" },
  { name: "Whatsapp", url: "https://wa.me/051996898900" }
];
const title = "¡Bienvenidos! <br> Tu próximo viaje <br> comienza aquí";

function App() {
  return (
    <div className="App">
      <Header logo={logo} menu={menu} />
      <Main title={title} img={imgcover} />
    </div>
  );
}

export default App;
