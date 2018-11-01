
/*
  src/app/components/UI/UI.js
  UI component styles
*/

// react component library import
import React, { Component } from 'react';
// evergreen ui library import
import { Pane, Text, Button } from 'evergreen-ui';

// import UI style sheet
import './UI.css';

// UI react component
class UI extends Component {
  render() {
    return (
      <div className="UI">
        <h3> --- UI --- </h3>
        <Pane id="panes" clearfix>
          <Pane
            elevation={1}
            height={80}
            width={190}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            border="default"
            margin={5}
            float="left"
          >
            <Text>Text Pane</Text>
            <Text size={300}>Elevation 1</Text>
          </Pane>
          <Pane
            elevation={2}
            height={80}
            width={190}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            border="default"
            margin={5}
            float="left"
          >
            <Button>Button Pane</Button>
            <Text size={300}>Elevation 2</Text>
          </Pane>
        </Pane>
      </div>
    );
  }
}

export default UI;
