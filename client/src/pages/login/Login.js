import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"

const Login = () => {
    const [credentials, setDestination] = useState({
        username: "",
        password:""
    })

    const {loading, error, dispatch} = useContext(AuthContext)

    const handleChange = () => {
        
    }

  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder='username' 
            id="username"
            onChange={handleChange}
            class="lInput"/>
            <input type="password" placeholder='password' 
            id="password"
            onChange={handleChange}
            class="lInput"/>
            <button className='lButton'>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login