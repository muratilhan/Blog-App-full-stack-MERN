import React,{useContext, useState} from 'react'
import './write.css'
import axios from 'axios';
import { Context } from '../../context/Context';
function Write() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        username:user.username,
        title:title,
        description:description,
        
      };
      if( file ){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name",filename);
        data.append("file",file)
        newPost.photo = filename;
        try{
          await axios.post("http://localhost:3003/upload",data)

        }catch(err){
        }
        try{
          const res = await axios.post("http://localhost:3003/posts/", newPost)
          window.location.replace("/")
        }catch(err){}
      }
    }

  return (
    <div className='write'>
        <div className="writeForm">
               {
                file && <img className='inputImage'  src={URL.createObjectURL(file)} alt="" />
               }
               <form onSubmit={handleSubmit} className="writeForm">
                  <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="uploadIcon fa-solid fa-folder-plus"></i>
                        </label>
                        <input className='fileInput' type="file" name="" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                        <input className='inputTitle' type="text" placeholder='Title' onChange={e => setTitle(e.target.value)}/>
                  </div>
                  <div className="writeText">
                        <textarea className='text-area' placeholder='Tell your story..' name="" id="" cols="80" rows="7" onChange={e => setDescription(e.target.value)}/>
                  </div> 
                  { user ? <button type='submit' className='handleButton'>Publish</button> :(
                    <p className='writeAlert'> You have to log in to publish ! </p>
                  ) }
                  
               </form>
        </div>  
    </div>
  )
}

export default Write