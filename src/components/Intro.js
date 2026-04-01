import PersonalWebsite from '../images/Personal_Website1.png';

export default function Intro() {
    return <div>
        <div className = "Intro-section">
                <div className="Intro-column">
                    <div id="HeadingContainer" className="vertical-line">
                        <div classname = "HeadingContainText">   
                            <h1>About</h1><br/>
                            <h1> Me </h1>                    
                        </div>
                    </div>    
                    <div className = "intro-row" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences.<br/> <br/>	
                </div>          
                </div>

                <div className="Intro-column">
                    <div className = "IntroImgContainer">
                        <img className="IntroImg" src={PersonalWebsite} alt="Personal Website" />
                    </div>
                    
                </div>
            </div> 

                <div className = "intro-row-650" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences.<br/> <br/>	
                </div>        
    </div> 
    

       
}