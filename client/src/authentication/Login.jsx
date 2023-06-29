import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const Login = () => {
    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self");
      };
    
  return (
    <div className='container-fluid m-0 p-0'>
        <Container>
               <div className='login'>
               <h3 className='text-center'>Choose a method to sign</h3>
               <button className='google' onClick={google}>
                    <GoogleIcon className='icon'/> Login With Google
                </button>
                <button className='facebook'>
                    <FacebookIcon className='icon'/> Login With Facebook
                </button>
                <button className='gmail'>
                    Sign up with Email
                </button>
               </div>
        </Container>
    </div>
  )
}

const Container = styled.section`

        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        background: #D2D2D2;
        
        .login{
            padding: 40px 70px;
            background: #fff;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
        }
        .facebook{
            background: #3b5998;
            color: #fff;
            outline: none;
            border: none;
            margin: 10px 0px;
            display: flex;
            justify-content: center;
            padding: 10px 15px;
            font-size: 20px;
            align-items: center;
            gap: 10px;
        }
        .google{
            background: #DB4437;
            color: #fff;
            outline: none;
            border: none;
            margin: 10px 0px;
            display: flex;
            justify-content: center;
            padding: 10px 15px;
            font-size: 20px;
            align-items: center;
            gap: 10px;
        }
        .gmail{
            background: #9dc932;
            color: #fff;
            outline: none;
            border: none;
            margin: 20px 0px;
            display: flex;
            justify-content: center;
            padding: 10px 15px;
            font-size: 20px;
            align-items: center;
            gap: 10px;
        }
        .icon{
            font-size: 40px;
        }
        h3{
            color:#9b0332;
            margin-bottom: 40px;
        }

`


export default Login