
/*
  src/app/components/Signin/Signin.js
  Signin component
*/

// react component library import
import React, { Component } from 'react';
// evergreen ui library import
import { Badge, Heading, majorScale, Pane, Text,TextInput, Button } from 'evergreen-ui';

// import Signin style sheet
import './Signin.css';

// Signin react component class
class Signin extends Component {
  render() {
    return (
      <div className="Signin">
        <Pane>
          <Heading size={700} marginTop={24} marginBottom={12} >Welcome, please signin:</Heading>
          <Badge color="neutral" marginRight={8}>Signin</Badge>
          <Badge color="blue">In progress</Badge>
        </Pane>
        <Pane marginTop={majorScale(2)}>
          <Text size={300} marginRight={majorScale(4)}>Name:</Text>
          <TextInput
                    name="text-input-name"
                    placeholder="Enter name"
          />
        </Pane>
        <Pane marginTop={majorScale(1)}>
          <Text size={300} marginRight={majorScale(4)}>Email: </Text>
          <TextInput
                      name="text-input-email"
                      placeholder="Enter email"
          />
        </Pane>
        <Pane>
          <Button height={40} marginTop={majorScale(2)} marginRight={majorScale(1)} appearance="primary" intent="success">Signup</Button>
          <Button height={40} marginTop={majorScale(2)} marginRight={majorScale(2)}>Login</Button>
        </Pane>
      </div>
    );
  }
}

export default Signin;
