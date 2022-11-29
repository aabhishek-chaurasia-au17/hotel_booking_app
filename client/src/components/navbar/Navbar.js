import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleClick = () => [
    dispatch({type: "LOGOUT"}),
    navigate("/")
  ]

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
        <span className="logo">myBooking.com</span>
        </Link>
        
        {user ? ( 
          <div className="navItems">
          {user?.username} <button className="navButton" onClick={() => handleClick() } >Logout</button> 
          </div> ) : (
          <div className="navItems">
            <button className="navButton" onClick={() => navigate("/register")}>Register</button>
            <button className="navButton" onClick={() => navigate("/login")}>Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar