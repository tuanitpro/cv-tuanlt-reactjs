import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loading />      
        <Navigation />
        <Header />
      </div>
    );
  }
}

export default App;
