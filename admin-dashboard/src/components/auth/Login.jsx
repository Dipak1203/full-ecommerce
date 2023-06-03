import React from "react";
import "./Login.css";
import styled from "styled-components";

const Login = () => {
  return (
   <Container>
     <div className="login">
      <div className="login_box shadow-lg">
        <h3>Hello !</h3>
        <p>Sign into your account</p>
        <input type="email" className="input" placeholder="example@gmail.com" />
        <input type="password" className="input" placeholder="your password" />
        <button className="button">Submit</button>
        <div className="login_content">
          <div>
            <input type="checkbox" />
            <span> Remember me</span>
          </div>
          <a href="">Forgot password?</a>
        </div>
      </div>
    </div>
   </Container>
  );
};


const Container = styled.section`
  

.login{
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #e0dede;
    border: 2px solid #00ab55;
}

.login_box{
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    border-radius: 10px;
}

.login_box h1,p,h3,h2,a,h4{
    color: #000 !important;
    font-weight: 900 !important;
}

.input{
    padding: 7px 27px;
    margin-bottom: 10px;
    border-bottom: 2px solid;
    border: none;
    border: 2px solid #00ab55;
    border-radius: 4px;
}
.button{
    background: #3cc3be;
    padding: 10px 86px;
    cursor: pointer;
    border-radius: 50px;
    font-weight: 700;
}

.button:hover{
    background: #2fd397 !important;
}

.login_content{
    width: 300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
`

export default Login;
