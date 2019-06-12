
/* src/App.js */

// import react Component library
import React, { Component } from 'react';

// import react-router-dom library
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import react components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/common/Navigation/Navigation';

// import app styles
import './App.css';

// App Component
class App extends Component {

  // render method
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
      </BrowserRouter>
      </div>
    );
  }

}

export default App;

//            <Navigation />
