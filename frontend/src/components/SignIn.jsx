import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import GoogleIcon from '@mui/icons-material/Google';

const SignIn = () => {
  return (
    <div className='signin-main-div'>
    <h4>
        Sign  in
    </h4>
    <div className="sigin-sub-div">
    
        
        <div className='signin-input-div'>
            <span className='signin-icon'><EmailIcon/></span>
            <input type="text" placeholder='Enter your Email' />
        </div>
        <div className='signin-input-div'>
            <span className='signin-icon'><PasswordIcon/></span>
            <input type="text" placeholder='Enter your Password' />
        </div>
      
    
    </div>
    <Button variant='outlined'>Login</Button>
    <div className="signin-login-main">
    <NavLink to='/login' className='signin-login'>login with <GoogleIcon></GoogleIcon> </NavLink>
    </div>
    
    
    </div>
  )
}

export default SignIn