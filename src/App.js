import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Welcome from "./components/Welcome";
import ConsumerElectronics from "./components/ConsumerElectronics";
import Environmental from "./components/Environmental";
import Cleaning from "./components/Cleaning";
import Kitchen from "./components/Kitchen";
import Hygenic from "./components/Hygenic";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
          
            <Route path="/" component={Welcome} exact />
            <Route path="/cleaning" component={Cleaning} exact />
            <Route path="/consumerElectronics" component={ConsumerElectronics} exact />
            <Route path="/environmental" component={Cleaning} exact />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/hygenic" component={Hygenic} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
