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
      value: 100,
      density: {
        enable: true,
        value_area: 800

       }
  
      }
    }
  }
class App extends Component{
  constructor(){
    super();
    this.state = {
      // creating state for ImageLinkForm
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }
// onButtonSubmit function for detect button and click event handle
  render() {

  return (
    <div className="App">
    <Particles className='particles'
        params={particlesOptions}
        />
      <Navigation/>
       <Logo/>
       <Rank/>
       <ImageLinkForm 
       onInputChange={this.onInputChange} 
       onButtonSubmit={this.onButtonSubmit}/>
       {/*
      <FaceRecognition/>*/}
    </div>
    );
  }
}

export default App;
