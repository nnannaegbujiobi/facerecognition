import React, {Component} from 'react';
import Navigation from './Navigation.js';
import Logo from './Logo.js';
import './App.css';



class App extends Component{

  render() {

  return (
    <div className="App">
      <Navigation/>
       <Logo/>
       {/*
       <ImageLinkForm/>
      <FaceRecognition/>*/}
    </div>
    );
  }
}

export default App;
