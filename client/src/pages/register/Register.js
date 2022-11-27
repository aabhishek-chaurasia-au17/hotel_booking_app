import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import "./register.css"

const Register = () => {
    const navigate = useNavigate()
    const [registerInfo, setRegisterInfo] = useState({})
    const [file, setFile] = useState("")

    const handleChange = (e) => {
        setRegisterInfo(prev => ({...prev, [e.target.id]:e.target.value})  )
    }
    
    const handleClick = async (e) => {
      e.preventDefault()
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
        
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/abhishekji/image/upload",
          data
        );

      const {url} = uploadRes.data

      const newRegisterInfo = {
        ...registerInfo, 
        img:url
      }

        const res = await axios.post("/auth/register", newRegisterInfo)

        navigate("/login")
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="login">
        <div className="lContainer">
            <div className="formInput">
            <img className='imgfile' src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>
                <label htmlFor='file'> Upload Profile Image: <FontAwesomeIcon icon={faUpload} /></label>
                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display: 'none'}}/>
              </div>

            <input type="text" placeholder='username' 
            id="username"
            onChange={handleChange}
            class="lInput"/>
            <input type="text" placeholder='email' 
            id="email"
            onChange={handleChange}
            class="lInput"/>
            <input type="number" placeholder='phone' 
            id="phone"
            onChange={handleChange}
            class="lInput"/>
            <input type="text" placeholder='city' 
            id="city"
            onChange={handleChange}
            class="lInput"/>
            <input type="text" placeholder='country' 
            id="country"
            onChange={handleChange}
            class="lInput"/>
            <input type="password" placeholder='password' 
            id="password"
            onChange={handleChange}
            class="lInput"/>
            <button onClick={handleClick} className='lButton'>Register</button>
            <button onClick={() => navigate("/login")} className='lButton'>Login</button>
        </div>
    </div>
  )
}

export default Register