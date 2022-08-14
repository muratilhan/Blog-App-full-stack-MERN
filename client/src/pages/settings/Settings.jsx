import React,{useContext,useState} from 'react'
import './settings.css'
import axios from 'axios'
import { Context } from '../../context/Context'
function Settings() {

    const {user} = useContext(Context)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
          userId:user._id,
          username,
          email,
          password
        };
        if( file ){
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name",filename);
          data.append("file",file)
          updatedUser.photo = filename;
          try{
            await axios.post("/upload", data);
          }catch(err){
            console.log(err)
          }
        }
        try{
            await axios.put(`http://localhost:3003/users/${user._id}`, updatedUser)
            console.log("başarılı")
          }catch(err){
            console.log(err)
        }
      }
  return (
    <form onSubmit={handleSubmit} className='settings'>
        <div className="header">
            <span><h2>Update your Account</h2></span>
            <span>Delete Account</span>
        </div>
        <div className="imgContainer">
            <img className='' src={user.photo} alt="" />
            <label htmlFor="userPP">
                 <i className="img-icon fa-solid fa-user-pen"></i>
            </label>
            <input type="file" id='userPP' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} />
        </div>
        <div className="userInfos">
            <div className='userInfosForm'>
                <h2>Username</h2>
                <input className='settingsInput' placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                <h2>E-mail</h2>
                <input className='settingsInput' placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <h2>Password</h2>
                <input className='settingsInput'  onChange={(e)=>setPassword(e.target.value)} type="password" />
                
            </div>
        </div>
            <button type='submit' className='settingsButton'>Update Account</button>
        
    </form>
  )
}

export default Settings