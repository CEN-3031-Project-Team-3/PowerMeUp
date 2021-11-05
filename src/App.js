import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import Welcome from "./components/Welcome";
import Entertainment from "./components/Entertainment";
import Kitchen from "./components/Kitchen";
import Personal from "./components/Personal";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Results from "./components/Results";

function App() {
  const [inputs, setInputs] = React.useState([
    {
      device: 'Oven'
    },
    
  ])

  const addInputs = (newInputs) => {
    setInputs([...inputs, newInputs])
    console.log(inputs)
  }

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/entertainment" component={Entertainment}  exact />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/personal" component={Personal} />
            <Route path="/results" component={Results} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

export default App;
