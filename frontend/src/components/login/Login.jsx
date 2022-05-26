import React,{useState} from 'react'
import "./login.css"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate()

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
    axios.post("http://localhost:5000/login", user).then(res => alert(`${res.data.user.name} login successfully`))
    
  }

  return (
    <div className='login'>
      {console.log("user", user)}
      <h1>Login</h1>
      <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder="Enter your Password" onChange={handleChange} />
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={()=> navigate('/register')}>Register</div>
    </div>
    
  )
}
