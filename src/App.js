import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Enterntainment from './components/Entertainment';
import Kitchen from './components/Kitchen';
import Personal from './components/Personal';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Enterntainment} exact/>
             <Route path="/kitchen" component={Kitchen}/>
             <Route path="/personal" component={Personal}/>
            <Route component={Error}/>
           </Switch>
           <Navigation />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;