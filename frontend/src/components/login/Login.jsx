import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./login.css"
import axios from 'axios';
import { loginToken } from '../../features/login/action';
import { Link, useNavigate } from 'react-router-dom';


export default function Login() {

  const navigate = useNavigate()
  const get_token=useSelector((state)=>state.tokenLogin.token)
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: ""

});

const handleChange = e => {
    console.log(e)
    // name = e.target.name;
    // value = e.target.value.
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  };
  
  const login = () => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      // alert(`${res.data.user.name} successfully login`)
      localStorage.setItem("token",JSON.stringify(res.data.token.split(".")[0]))
  
      dispatch(loginToken(res.data.token.split(".")[0]));
    });
    
  }

  return (
    <div className='login'>
      {console.log("user", user)}
      <h1>Login</h1>
      <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder="Enter your Password"  onChange={handleChange}/>
      {/* <div className="button" onClick={login}>Login</div> */}
      <div className="button-login" >
      <Link to="/">
        <button type='submit' onClick={login}>Login</button>
        </Link>
        </div>
      <div>or</div>
      <div className="button-login"  onClick={()=>navigate('/register')}>
       Register
      </div>
    </div>
    
  )
}
