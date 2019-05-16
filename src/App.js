import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './FaceRecognition.js'
import Navigation from './Navigation.js';
import Logo from './Logo.js';
import ImageLinkForm from './ImageLinkForm.js';
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
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // onButtonSubmit function for detect button and click event handl
    app.models.predict(
     "a403429f2ddf4b49b307e318f00e528b",
    this.state.input)
    // model-id with url 
  .then(function(response) {
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    // parse object to get data from console
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
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
    );
  }
}

export default App;
