import SquareSection from '../components/SquareSection';
import HobbiesSection from '../components/HobbiesSection';
import ArrowImage from '../components/ArrowImage';

export default function Home() {
    return   <div className = "home" >

        <div id="HeadingContain" class="vertical-line">
	        <h1>About</h1><br/>
	        <h1 class="MeTxt"> Me </h1>
        </div>
        
        <div className = "intro" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences. Previously at Paycom, I delivered codebase-wide UI updates, fixed critical bugs, and enhanced reporting pipelines to improve performance and maintainability. I’ve also worked in QA automation, system optimization, device automation, sensor simulation, firmware-driven data collection, and system validation using ESP32, Arduino, Raspberry Pi, and Python.Passionate about clean code, problem-solving, and continuous learning.<br/> <br/>	
        Life Philosophy: Life is about making the best of the time and place you find yourself in to continue to progress forward.<br/>
        My interests and hobbies can be summed with: being involved in my community, carpentry, art (painting), web-development, entrepreneurship, self-development. 
        </div>
       
       
        <ArrowImage/>
        <div className= "parentDiv">
            <SquareSection
              sectionClass="SquareTitle-1"
              title="Resume"
              linkPage="/Resume"
            />

            <HobbiesSection/>
                <SquareSection
                sectionClass="SquareTitle-2"
                title="Projects"
                linkPage="/Projects"
                />
            
            <SquareSection
              sectionClass="SquareTitle-3"
              title="Programming Languages"
                linkPage="/ProgrammingLanguage"
            />
        </div>

     </div>

}