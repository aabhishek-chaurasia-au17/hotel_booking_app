import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import './newHotel.scss'

const NewHotel = ({inputs, title}) => {
  
  const [file, setFile] = useState("")
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""/>
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display: 'none'}}/>
              </div>

              {inputs.map(({id, label, type, placeholder}) => (
                <div className="formInput" key={id}>
                  <label>{label}</label>
                  <input type={type} placeholder={placeholder} />
                </div>
              ))}
              
              
              <button>Send</button>    
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHotel