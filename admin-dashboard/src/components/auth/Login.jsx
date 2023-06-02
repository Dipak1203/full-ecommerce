import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login_box shadow-lg" >
          <h3>Hello !</h3>
          <p>Sign into your account</p>
          <input type="email" className="input" placeholder="example@gmail.com" />
          <input type="password" className="input" placeholder="your password" />
          <button className="button">Submit</button>
          <div className="login_content">
              <input type="checkbox"  /> Remember me
              <a href="">Forgot password?</a>
          </div>
      </div>
    </div>
  );
};

export default Login;
