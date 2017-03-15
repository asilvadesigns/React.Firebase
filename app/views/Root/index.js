import React, { Component } from 'react';
import Nav from 'Components/Nav';
import Home from 'Views/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Route path="/" component={Home}/>
        </div>
      </BrowserRouter>
    )
  }
};

export default Root;

