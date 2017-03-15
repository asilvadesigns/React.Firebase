import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/">Home</NavLink>
      </nav>
    )
  }
};

//TODO: you'll have to add this to the nav, create a new route
//and then later create a template and or root view.. something
//like that...

export default Nav;
