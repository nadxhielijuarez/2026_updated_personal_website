import HobbiesSection from '../components/HobbiesSection';

import Intro  from '../components/Intro';

export default function Home() {
    return   <div className = "home" >

        <Intro/>
        <div className= "parentDiv">

            <HobbiesSection/>


        </div>

     </div>

}