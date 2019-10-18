/**
 * `src/index.js`
 */

import _ from "lodash";
import './style.css';
import Logo from './logo.png';

import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement("div");
  const btn = document.createElement('button');

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');

  // Add the image to our existing div.
  const myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

/* EOF */
