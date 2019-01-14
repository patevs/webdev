
/*
  src/app/components/UI/UI.js
  UI component styles
*/

// react component library import
import React, { Component } from 'react';
// evergreen ui library import
import { Heading, Pre, majorScale, Paragraph, Pane, Text, Button } from 'evergreen-ui';

// import UI style sheet
import './UI.css';

// UI react component
class UI extends Component {
  render() {
    return (
      <div className="UI">
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
            <Text>Text Pane 1</Text>
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
            <Button>Button Pane 2</Button>
            <Text size={300}>Elevation 2</Text>
          </Pane>
          <Pane
            elevation={3}
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
            <Text>Text Pane 3</Text>
            <Text size={300}>Elevation 3</Text>
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

export default UI;
