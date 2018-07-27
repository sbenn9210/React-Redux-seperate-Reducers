import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class Menu extends Component {
  render() {
    return (
      <div className="menu">

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-movie">Add Movie</Link></li>
          <li><Link to="">Posts</Link></li>
          <li><Link to="">Counter</Link></li>


        </ul>
      </div>
    )
  }
}

export default Menu;
