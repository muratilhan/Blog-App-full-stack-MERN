import React from 'react'
import './sidebar.css'
import myPhoto from '../murat-artvin.jpeg'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebar-title'>About me</span>
            <img className='sidebar-img' src={myPhoto} alt="me" />
            <p className='sidebar-text'> My name is Murat, my job is web developer.i improve myself on this way and keeping build project to be better
            </p>
            <span className='sidebar-title'>Categories</span>
            <ul className='categories-ul'>
              <li className='categorie-li li-left'>life</li>
              <li className='categorie-li li-left'>music</li>
              <li className='categorie-li li-left'>sport</li>
              <li className='categorie-li li-right'>tech</li>
            </ul>
            <span className='sidebar-title'>Contact us</span>
            
            <ul className='sidebar-icons'>
              <i className="fa-brands fa-square-instagram sidebar-icon"></i>
              <i className="fa-brands fa-square-facebook sidebar-icon"></i>
              <i className="fa-brands fa-twitter sidebar-icon"></i>
              <i className="fa-brands fa-twitch sidebar-icon"></i>
            </ul>
            

        </div>
    </div>
  )
}

export default Sidebar