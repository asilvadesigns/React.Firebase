import React, { Component } from 'react';
import Login from 'Components/Login';
import Nav from 'Components/Nav';
import { BrowserRouter } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Login/>
        </div>
      </BrowserRouter>
    )
  }
};

export default Root;
