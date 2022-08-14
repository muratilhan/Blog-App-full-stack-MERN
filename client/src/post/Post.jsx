import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
function Post({post}) {
  const PF = "http://localhost:3003/images/"
  return (
   <Link style={{textDecoration:"none",color:"black"}} to={`/post/${post._id}`}>
        <div className='post'>
          {
            post.photo && <img className='img' src={PF + post.photo} alt="" />
          }
            <div className="post-infos">
                <ul className='post-ul'>
                    { post.categories.map(category => (
                      <li className='post-li'> {category.name} </li>
                    )) }
                </ul>               
                    <h3> {post.title} </h3>
                <p className='post-text'> {post.description} </p>
                <div className="postFooter">
                    <span style={{marginLeft:"auto"}}>Author: {post.username}</span>
                    <span className='time-text'> {new Date(post.createdAt).toDateString()} </span>
                </div>
                
            </div>
        </div>
    </Link>
  )
}

export default Post