import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`http://localhost:8001/login/AuthAdminActivity`, { username, password });
  
      if (response.status === 200) { // Check the response status code
        const { token } = response.data; // Access the response data directly
        // Set token in localStorage
        localStorage.setItem('token', token);
        // Redirect to dashboard component
        window.location.href = '/dashboard';
      } else {
        const { message } = response.data; // Access the error message from the response data
        toast.error(message);
      }
    } catch (error) {
      toast.error('password not match:', error);
    }
  };
  

  return (
    <Container>
      <div className="login">
        <div className="login_box shadow-lg">
          <h3>Hello!</h3>
          <p>Sign into your account</p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
          <div className="login_content">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="/">Forgot password?</a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.section`
  .login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0dede;
    border: 2px solid #00ab55;
  }

  .login_box {
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    border-radius: 10px;
  }

  .login_box h3,
  .login_box p,
  .login_box h1,
  .login_box h2,
  .login_box a,
  .login_box h4 {
    color: #000 !important;
    font-weight: 900 !important;
  }

  .input {
    padding: 7px 27px;
    margin-bottom: 10px;
    border-bottom: 2px solid;
    border: none;
    border: 2px solid #00ab55;
    border-radius: 4px;
  }

  .button {
    background: #3cc3be;
    padding: 10px 86px;
    cursor: pointer;
    border-radius: 50px;
    font-weight: 700;
  }

  .button:hover {
    background: #2fd397 !important;
  }

  .login_content {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;


export default Login;
