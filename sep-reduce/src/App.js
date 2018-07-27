import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Menu from './components/Menu'
import './index.css'
import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Movie />
        <Footer />
      </div>
    );
  }
}

export default App;
