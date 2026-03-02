import NavBar from "./NavBar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Account from "./assets/Pages/Account";
import Framework from "./assets/Pages/Framework";
import Play from "./assets/Pages/Play";
import "./Styles.css"

import { useEffect, useState } from "react";


function App() {

  let Component
  switch(window.location.pathname){
    case "/":
      Component= Home
      break
    case "/Framework":
      Component= Framework
      break
    case "/Play":
      Component= Play
      break
    case "/Account":
      Component= Accoun
      break
    case "/About":
      Component=About
      break

  }
  return (
    <>
    <NavBar/>
    <Component/>
    </>
    
  );
}

export default App;
