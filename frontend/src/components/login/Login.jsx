import React,{useState} from 'react'
import "./login.css"


export default function Login() {

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

  return (
    <div className='login'>
      {console.log("user", user)}
      <h1>Login</h1>
      <input type="text" name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder="Enter your Password"  onChange={handleChange}/>
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
    
  )
}
