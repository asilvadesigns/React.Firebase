import React, { Component } from 'react';
import Nav from 'Components/Nav';
import About from 'Views/About';
import Home from 'Views/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    )
  }
};

export default Root;

