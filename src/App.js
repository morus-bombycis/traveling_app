// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Cities from './components/Cities';
import Menu from './components/Menu'
import { AppBar, Toolbar, Button, LogoIcon } from 'react95';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Itineraries from "./components/Itinerary";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ paddingTop: '50px' }}>
          <AppBar>
            <Toolbar>
              <Menu />
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/cities' component={Cities} />
            <Route exact path='/itineraries/:cityId' component={Itineraries} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}