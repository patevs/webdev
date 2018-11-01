
/*
  src/app/App/App.js
  app react component
*/

// import react component lib
import React, { Component } from 'react';
// import evergreen-ui components libs
import { Paragraph, Pre, majorScale, Pane, Button, Heading } from 'evergreen-ui';
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

        <Pane>
          <Heading size={900} marginTop={24}>--- 03 : M_ui ---</Heading>
          <Heading size={500} marginTop={12}>-- sub-title --</Heading>
          <Pre marginTop={16}
               marginLeft={majorScale(16)}
               marginRight={majorScale(16)}
          >
            Preformatted text.
          </Pre>
          <Paragraph marginTop={8} color="muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Pane>

      </div>
    );
  }
}

export default App;
