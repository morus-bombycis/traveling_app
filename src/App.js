// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}