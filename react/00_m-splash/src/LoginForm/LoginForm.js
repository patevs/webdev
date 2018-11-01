
// react component library import
import React, { Component } from 'react';

// import bootstrap components; ButtonToolbar, Button
import { Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, ButtonToolbar, Button } from 'react-bootstrap'

// import Login style sheet
import './LoginForm.css';

// LoginForm react component
class LoginForm extends Component {

  //* TODO: button click handle *//
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    setTimeout(function () {
      var elem = document.querySelector('.LoginForm');
      elem.style.opacity = 1;
    }, 2000);
  }

  handleSubmit() { }

  handleChange() { }

  // display the login form
  displayLogin(){  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="LoginForm">

        <div id="login-form">
          <Form horizontal>

            <div id="form-groups">
              <FormGroup controlId="formHorizontalEmail">

                <Col componentClass={ControlLabel} sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl type="username" value={this.state.username} placeholder="Username" onChange={this.handleChange} />
                </Col>

              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <ButtonToolbar id="load-btns">
                    <Button bsStyle="success" bsSize="large" type="submit">
                      Login
                    </Button>
                    <Button bsSize="large">
                      Signup
                    </Button>
                  </ButtonToolbar>
                </Col>
              </FormGroup>
            </div>

          </Form>
        </div>

      </div>
    );
  }
}

export default LoginForm;

/*



*/

/*
<div class="container">

  <form class="form-signin">
    <h2 class="form-signin-heading">Please sign in</h2>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="checkbox">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>

</div> <!-- /container -->
*/
