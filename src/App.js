import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
class App extends Component {
  render() {
    return (
      <div id="page-top" className="index">
        <Loading />      
        <Navigation />
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
