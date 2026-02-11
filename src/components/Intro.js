import ArrowImage from './ArrowImage';
import PersonalWebsite from '../images/Personal_Website1.png';

export default function Intro() {
    return  <div className = "Intro-section">
        <div className="column">
            <div id="HeadingContain" className="vertical-line">
                <h1>About</h1><br/>
                <h1 className="MeTxt"> Me </h1>
            </div>

            <div className = "intro" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences.<br/> <br/>	
            </div>
            <ArrowImage/>
        </div>

        <div className="column">
            <div className = "IntroImgContainer">
                <img className="IntroImg" src={PersonalWebsite} alt="Personal Website" />
            </div>
            
        </div>


    </div> 
    

       
}