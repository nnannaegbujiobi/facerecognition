import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Navigation.js';
import Logo from './Logo.js';
import ImageLinkForm from './ImageLinkForm.js';
import FaceRecognition from './FaceRecognition.js'
import Rank from './Rank.js';
import './App.css';


const app = new Clarifai.App({
  apiKey: "a95a500e042e4f0ab8e6cb17dde1bc1f"
});
// setting up the API 

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
    // onButtonSubmit function for detect button and click event handl
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",
    "https://samples.clarifai.com/face-det.jpg")
    // model-id with url 
  .then(function(response) {
    console.log(response)
    // do something with responseconsole.log(response);
    },
    function(err) {/*// there was an error*/}
);

  }
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
      <FaceRecognition/>
    </div>
    );
  }
}

export default App;
