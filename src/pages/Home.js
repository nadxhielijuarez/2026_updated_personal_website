import SquareSection from '../components/SquareSection';
import HobbiesSection from '../components/HobbiesSection';

import Intro  from '../components/Intro';

export default function Home() {
    return   <div className = "home" >

        <Intro/>
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