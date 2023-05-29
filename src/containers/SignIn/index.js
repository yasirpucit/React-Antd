import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import { SignInWrapper } from './style';
import Logo from '../../static/assets/chatgpt.svg';
const { Password } = Input;
function SignIn() {
  useEffect(() => {
    console.log('\n\n\n in sign in \n\n\n\n');
  }, []);

  return (
    <SignInWrapper>
      <div className="signin-container">
        <div className="signin-box">
          <div className="logo">
            <img src={Logo} alt="" width="80" />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <Input placeholder="Enter Email" type="email" id="email" name="email" />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <Password placeholder="Enter Password" id="password" name="password" />
          </div>
          <Button className="submit-button" type="primary">
            Sign In
          </Button>
          <div className="footer-links">
            <a href="#">Sign Up</a>
            <a href="#">Forgot Password</a>
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
