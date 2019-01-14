
// react component library import
import React, { Component } from 'react';

// import bootstrap component; image
import { Image } from 'react-bootstrap'

// import footer component style sheet
import './Footer.css';

// Footer react component
class Footer extends Component {
  render() {
    return (
      <div className="Footer">

        <div id="foot">
          <Image src="./assets/imgs/footer.png" alt="page footer" />
        </div>

      </div>
    );
  }
}

export default Footer;

//          <img src="./assets/imgs/footer.png" alt="page footer" responsive="true" />
