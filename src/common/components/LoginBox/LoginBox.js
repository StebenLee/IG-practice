import React from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap';
const LoginBox = ({
  email,
  password,
  onChangeEmailInput,
  onChangePasswordInput,
  onLoginSubmit,
}) => (
  <div style = {{backgroundColor:"#ffffff"}}>
    <Form horizontal>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入您的 Email</ControlLabel>
        <FormControl
          type="text"
          onChange={onChangeEmailInput}
          placeholder="Enter Email"
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入您的密碼</ControlLabel>
        <FormControl
          type="password"
          onChange={onChangePasswordInput}
          placeholder="Enter Password"
        />
        <FormControl.Feedback />
      </FormGroup>
      <Button 
        onClick={onLoginSubmit} 
        style={{background:"#17a56f"}}
        bsSize="large" 
        block>
        Submit
      </Button>

    </Form>
  </div>
);

export default LoginBox;