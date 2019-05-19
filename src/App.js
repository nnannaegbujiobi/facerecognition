import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './FaceRecognition.js'
import Navigation from './Navigation.js';
import Signin from './Signin.js'
import Register from './Register.js'
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }
  calculateFaceLocaton = (data) => {
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputImage');
     const width = Number(image.width);
     const height = Number(image.height);
     
     return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}
displayFaceBox = (box) => {
  this.setState({box: box});
}
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // onButtonSubmit function for detect button and click event handle
    app.models.predict(
     "a403429f2ddf4b49b307e318f00e528b",
    this.state.input)
    // model-id 
  .then(response => this.displayFaceBox(this.calculateFaceLocaton(response))) 
    .catch(err => console.log(err));

  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }
  render() {
    const {isSignedIn, imageUrl, route, box} = this.state;
    // destructuring so we dont have to use this.state on properties 
  return (
    <div className="App">
    <Particles className='particles'
        params={particlesOptions}
        />
      <Navigation isSignedIn={isSignedIn}onRouteChange={this.onRouteChange}/>
      { route === 'home'
        ? <div>
         <Logo/>
           <Rank/>
           <ImageLinkForm 
           onInputChange={this.onInputChange} 
           onButtonSubmit={this.onButtonSubmit}/>  
          <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
          :(
              route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
            )
          /* ternery js allows you to do conditionals insise jsx ex= ? :*/
        }
    </div>
    );
  }
}

export default App;
