import React from 'react'
import {Link} from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul id ="nav-menu">
    <Link to ='/'><li className="title"><BiCameraMovie />Movies</li></Link>
    <form>
    <input type='text' placeholder='Busque um filme' />
    <button type='submit'><BiSearchAlt2 /></button>
    </form>
      </ul>
    </nav>
  )
}

export default Navbar