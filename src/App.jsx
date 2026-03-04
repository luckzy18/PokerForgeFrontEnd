import NavBar from "./NavBar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Account from "./assets/Pages/Account";
import Framework from "./assets/Pages/Framework";
import Play from "./assets/Pages/Play";
import "./Styles.css"
import {Route,Routes} from "react-router-dom";

import { useEffect, useState } from "react";


function App() {

  
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/Play" element={<Play></Play>}/>
      <Route path="/Framework" element={<Framework></Framework>}/>
      <Route path="/About" element={<About></About>}/>
      <Route path="/Account" element={<Account></Account>}/>
    </Routes>
    </>
    
  );
}

export default App;
