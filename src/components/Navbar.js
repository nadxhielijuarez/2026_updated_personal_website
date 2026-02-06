import {Link} from "react-router-dom"


export default function Navbar() {
    return <div className="topnav" id="myTopnav">

      <Link to="/home"> Home</Link>    
        <Link to="/Resume">Resume</Link> 
        <Link to="/hobbies">Activities/Hobbies</Link>
        <Link to="/Projects" > My Projects</Link>
        <Link to="/ProgrammingLanguage">Programming Languages</Link> 
        <Link to="/LearningBlog">Learning Blog</Link>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i className="Navbar"></i>  </a>          
    </div> 
}

