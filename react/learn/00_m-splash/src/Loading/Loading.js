
// react component library import
import React, { Component } from 'react';

// import bootstrap component; image
import { Image } from 'react-bootstrap'

// import loading component style sheet
import './Loading.css';

// Loading react component
class Loading extends Component {

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    setTimeout(function () {
      var elem = document.querySelector('#load');
      elem.style.display = 'none';
      elem.parentNode.removeChild(elem);
    }, 2000);
  }

  render() {
    return (
      <div className="Loading">

        <div id="load">
          <Image id="load-img" src="./assets/imgs/loading.png" alt="page loading animation" />
        </div>

      </div>
    );
  }

}

export default Loading;
