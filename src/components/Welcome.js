import logo from "../light-bulb.svg";
import "../App.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap/";
import React, { useState, useEffect } from "react";
import db from "../utils/firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
function App() {
  const [cities, setCities] = useState([]);

  async function getCities(db) {
    console.log("beginngin async call");
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(citySnapshot);
    return cityList;
  }
  getCities(db)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <p>
          Welcome to <code>Power Me Up</code>. Click below to get started!
        </p>
        <br></br>
        <NavLink to="/entertainment">
          <Button>GET STARTED</Button>
        </NavLink>
      </header>
    </div>
  );
}

export default App;
