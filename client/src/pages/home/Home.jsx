import React,{useState, useEffect} from 'react'
import Posts from '../../posts/Posts'
import axios from 'axios'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'
function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3003/posts");
      console.log(res.data)
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className='home'>
        <div className="header">
            <span className='blogSpan'>-<i className='italic '>Blog</i>-</span>
        </div>
        <div className="main">
            <Posts posts={posts} />
            <Sidebar/>
        </div>
       
    </div>
  )
}

export default Home