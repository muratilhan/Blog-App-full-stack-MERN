import React from 'react'
import Post from '../post/Post'
import {Link} from 'react-router-dom'
import './posts.css'
function Posts({posts}) {
  return (
    <div className='posts'>

        { posts.map((post)=>{
          return <div key={post.id}> <Post post={post}/> </div>
        })}

    </div>
  )
}

export default Posts