import HobbiesSection from '../components/HobbiesSection';
import Carousel from '../components/Carousel';

import Intro  from '../components/Intro';

export default function Home() {
    return   <div className = "home" >

        <Intro/>
        <div className= "parentDiv">

            <Carousel/>

            <HobbiesSection/>



        </div>

     </div>

}