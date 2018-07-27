import React, { Component } from 'react'; 

import FlipMove from 'react-flip-move';

import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

import TechnicalSkills from './components/TechnicalSkills';
import Portfolio from './components/Portfolio';
import HireMe from './components/HireMe';
import Resume from './components/Resume';
import TechLove from './components/TechLove';
import Contact from './components/Contact';

import Client from './components/Client';


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
 
        <TechnicalSkills />
        <Portfolio />
        <HireMe />
        <Resume />
        
        </FlipMove>
        <FlipMove duration={250} easing="ease-out">
        <TechLove />
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
