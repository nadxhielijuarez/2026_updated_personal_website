import {FaBars} from "react-icons/fa";
import { useRef } from "react";
import {Link} from "react-router-dom"

export default function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");  
  }

  return <div className="topnav" id="myTopnav" ref={navRef}>

    <Link to="/home"> Home</Link>    
      <Link to="/Resume">Resume</Link> 
      <Link to="/Projects" > My Projects</Link>
      <Link to="/ProgrammingLanguage">Programming Languages</Link> 
      <Link to="/LearningBlog">Learning Blog</Link>
      <button  className = 'icon' onClick={showNavbar}>
        <FaBars />
      </button>   
  </div> 
}

