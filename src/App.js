import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipMove from 'react-flip-move';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Client from './components/Client';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div id="page-top" className="index">
        <Loading />      
        <Navigation />
        <FlipMove duration={250} easing="ease-out">
        <Header />
        </FlipMove>
        <FlipMove duration={250} easing="ease-out">
        <About />
        </FlipMove>
        <FlipMove duration={250} easing="ease-out">
        <Client />
        </FlipMove>
        <FlipMove duration={250} easing="ease-out">
        <Contact />
        </FlipMove>
        <FlipMove duration={250} easing="ease-out">
        <Footer />
        </FlipMove>
      </div>
    );
  }
}

export default App;
