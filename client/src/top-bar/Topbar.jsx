import React from 'react'
import './topBarCSS.css'
import { Context } from '../context/Context'
import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Topbar() {
  const navigate = useNavigate();
  const { user, dispatch} = useContext(Context)
  
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
    navigate('/login')
  }
 
  return (
    <div className='topContainer'>
        <div className="top-left">
              <i className="fa-brands fa-square-instagram icon-left"></i>
              <i className="fa-brands fa-square-facebook icon-left"></i>
              <i className="fa-brands fa-twitter icon-left"></i>
              <i className="fa-brands fa-twitch icon-left"></i>
        </div>
        <div className="top-center">
            <ul className='ul-container'>
              <li className='li-items'> <Link  className='link' to='/'>Home</Link> </li>
              <li className='li-items'> <Link  className='link' to='/about'>About</Link> </li>
             
              <li className='li-items'> <Link  className='link' to='/contact'>Contact</Link> </li>
              <li className='li-items'> <Link  className='link' to='/write'>Write</Link> </li>
              <li className='li-items logout' onClick={handleLogout}> { user && 'LOGOUT' } </li>
            </ul>
        </div>
        <div className="top-right">
            <Link style={{textDecoration:"none",color:"black"}}  to={'/settings'}>
              <span className='usernameTopRight'> { user?.username } </span>
            </Link>
             { user ? (
                <img className='topbarImage' src="https://p.kindpng.com/picc/s/286-2866285_im-sure-though-for-many-of-you-as.png" alt="none" />
             ):(
              <div className='topRightLog'>
                <Link className='topRightLink' to='/login'>Login</Link>
                <Link className='topRightLink' to='/register'>Register</Link>
              </div>
             )
            }
        </div>

    </div>
  )
}

export default Topbar