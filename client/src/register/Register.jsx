import React,{useState} from 'react'
import './register.css'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3003/auth/register",{
      username,
      email,
      password
    })
    navigate("/login")

  }

  return (
    <div className='register'>
        <form onSubmit={handleSubmit} className="registerForm">
            <h1 className='registerFormItems h1'>Register</h1>
            <span className='registerFormItems'>Username</span>
            <input className='registerFormItems' type="text" placeholder='Username giriniz.' onChange={e=>setUsername(e.target.value)} />
            <span className='registerFormItems'>E-mail</span>
            <input className='registerFormItems' type="email" placeholder='E-mail giriniz..' onChange={e=>setEmail(e.target.value)}/>
            <span className='registerFormItems'>Password</span>
            <input className='registerFormItems' placeholder='Şifrenizi giriniz..' type="password" onChange={e=>setPassword(e.target.value)}/>
            <div className="buttons">
                <button className='buttonRegister' type='submit'>Register</button>
                <button className='buttonRegister'><Link className='registerLink' to='/login'>Login</Link></button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Register