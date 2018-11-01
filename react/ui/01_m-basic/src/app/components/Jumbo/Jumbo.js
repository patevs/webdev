
/*
  src/app/components/Jumbo/Jumbo.js
  jumbotron component styles
*/

// react component library import
import React, { Component } from 'react';

// import bootstrap components; jumbotron, image
import { Jumbotron, Image } from 'react-bootstrap'

// import Jumbotron style sheet
import './Jumbo.css';

// Jumbotron Header react component
class Jumbo extends Component {
  render() {
    return (
      <div className="Jumbo">
    		<Jumbotron id="tron">
          <Image src="./assets/imgs/Jumbo.png" alt="jumbo header" />
    		</Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
