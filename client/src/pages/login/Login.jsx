import axios from 'axios';
import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {user, dispatch, isFetching} = useContext(Context)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post('http://localhost:3003/auth/login', {
        username: username,
        password: password,
        })
        dispatch({ type:"LOGIN_SUCCES",payload:res.data });
        navigate('/')
    }catch(err){
        alert("hatali giriş yaptınız.. !")
        dispatch({ type:"FAILURE"});
    }
    console.log(user)

  }
  return (
    <div className='login'>
        <form className="loginForm" onSubmit={handleSubmit}>
            <h1 className='loginFormItems h1'>Login</h1>
            <span className='loginFormItems'>Username</span>
            <input 
                className='loginFormItems' 
                type="text" 
                placeholder='Username giriniz..' 
                onChange={(e)=>setUsername(e.target.value)}

            />
           
            <span className='loginFormItems'>Password</span>
            <input 
                className='loginFormItems' 
                placeholder='Şifrenizi giriniz..' 
                type="password"  
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="buttons">
              <button className='buttonLogin' type='submit' >Login</button>
              <button className='buttonLogin' ><Link className='buttonLoginLink' to='/register'>Register</Link></button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Login