
/*
  src/app/App/App.js
  app react component
*/

// import react component lib
import React, { Component } from 'react';
// import evergreen-ui components libs
import { majorScale, Pane, Button, Heading } from 'evergreen-ui';
// import app component styles
import './App.css';

// App component class
class App extends Component {
  render() {
    return (
      <div className="App">

        <Pane display="flex" padding={16} background="overlay" borderRadius={8}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading color="muted" size={700}>M_UI</Heading>
          </Pane>
          <Pane>
            <Button height={majorScale(4)} marginRight={24}>Button</Button>
            <Button height={majorScale(6)} appearance="primary">Primary Button</Button>
          </Pane>
        </Pane>

      </div>
    );
  }
}

export default App;
