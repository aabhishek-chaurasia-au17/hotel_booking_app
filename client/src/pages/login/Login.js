import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password:""
    })

    const {user, loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value})  )
    }

    const handleClick = async (e) => {
      e.preventDefault()
      dispatch({type: "LOGIN_START"})
      try {
        const res = await axios.post("/auth/login", credentials)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        navigate("/")
      } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
      }
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
            <button disabled={loading} onClick={handleClick} className='lButton'>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}

export default Login