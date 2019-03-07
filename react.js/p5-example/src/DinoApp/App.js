
/**
 *  src/App.js
 */

// IMPORTS
import React, { Component } from 'react';
// p5 react wrapper
import P5Wrapper from 'react-p5-wrapper';
// p5 sketches
import dinosketch from './sketches/dino'
//import sketch from './sketches/sketch'
// styles
import './App.css';

// Main app component class
class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
			sketchState: dinosketch,
		};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dino Dash</h1>
        </header>
        <div>  
          <P5Wrapper sketch={this.state.sketchState} />
        </div>
      </div>
    );
  }

}

export default App;


// EOF

/* sketch.js

constructor(props) {
super(props);
this.state = {
rotation: 150,
};
}

rotationChange(e){
this.setState({rotation:e.target.value});
}

<P5Wrapper sketch={sketch} rotation={this.state.rotation}/>        
<input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>

*/