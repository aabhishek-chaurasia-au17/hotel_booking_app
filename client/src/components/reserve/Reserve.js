import React from 'react'
import './reserve.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({setOpen, hotelId}) => {
  return (
    <div className='reserve'>
        <div className="rContainer">
            <FontAwesomeIcon/>
        </div>
    </div>
  )
}

export default Reserve