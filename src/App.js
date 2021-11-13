import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import Entertainment from "./components/Entertainment";
import ConsumerElectronics from "./components/ConsumerElectronics";
import Environmental from "./components/Environmental";
import Cleaning from "./components/Cleaning";
import Kitchen from "./components/Kitchen";
import Hygenic from "./components/Hygenic";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Results from "./components/Results";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
          
            <Route path="/" component={Welcome} exact />
            <Route path="/cleaning" component={Cleaning} exact />
            <Route path="entertainment" component={Entertainment} exact />
            <Route path="/consumerElectronics" component={ConsumerElectronics} exact />
            <Route path="/environmental" component={Environmental} exact />
            <Route path="/hygenic" component={Hygenic} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/results" component={Results} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
