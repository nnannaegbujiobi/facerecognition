import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Navigation.js';
import Logo from './Logo.js';
import ImageLinkForm from './ImageLinkForm.js';
import Rank from './Rank.js';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800

       }
  
      }
    }
  }
class App extends Component{

  render() {

  return (
    <div className="App">
    <Particles className='particles'
        params={particlesOptions}
        />
      <Navigation/>
       <Logo/>
       <Rank/>
       <ImageLinkForm/>
       {/*
    
      <FaceRecognition/>*/}
    </div>
    );
  }
}

export default App;
