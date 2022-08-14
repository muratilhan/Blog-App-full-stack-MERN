import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './single.css'
import SinglePost from '../singlePost/SinglePost'
function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single