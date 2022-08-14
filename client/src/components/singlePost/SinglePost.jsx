import axios from 'axios';
import React,{useEffect, useState, useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './singlePost.css'
import {Context} from "../../context/Context"

function SinglePost() {

    const { user } = useContext(Context)
    const [updateMode, setUpdateMode] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const PF = "http://localhost:3003/images/"
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({});
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('http://localhost:3003/posts/' + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
        }
        getPost();
    },[path])
    const handleUpdate = async () => {
        try{
            await axios.put(`http://localhost:3003/posts/${post._id}`,{
            username:user.username,
            title,
            description
        })
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }
    const handleDelete = async (e) => {
        await axios.delete(`http://localhost:3003/posts/${post._id}`,{
            data:{username:user.username}
        })
        navigate("/")
    }

  return (
    <div className='single-post'>
        { 
        post.photo && <img className='singlePostImg' 
        src={PF + post.photo} alt="" />
        }
        <div className="single-post-title">
            { updateMode ? <div className='updateModeInputContainer'> <span className='updateModeSpan' >Title: </span> <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className='updateModeInput' /> </div>
            :
            (
                <h1 className='singlePosth1'> {post.title}
                    { post.username === user?.username && 
                    <div>
                        <i onClick={() => setUpdateMode(true)} className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i onClick={(e) => handleDelete(e)} className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div> }
                </h1>
            )}
            
        </div>
        <div className="singlePostInfos">
            <span><b>Author:</b><span > {post.username} </span></span>
            <span className='timestamps'> { new Date(post.createdAt).toDateString() } </span>
        </div>
        <p className='singlePostText'>
           { updateMode ? 
                <div className="descriptionContainer">
                        <span className='updateModeSpanDesc' >Description: </span> 
                        <input className='descriptionInput' value={description} onChange={(e)=>setDescription(e.target.value)} type="textarea" />
                </div> : (
              <div>{post.description}</div> 
           )}
        </p>
        {
             updateMode && <button onClick={handleUpdate} className='updateButton'>Update</button>
        }
    </div>
  )
}

export default SinglePost