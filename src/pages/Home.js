import HobbiesSection from '../components/HobbiesSection';
import Carousel from '../components/CardSection';

import Intro  from '../components/Intro';

export default function Home() {
    return   <div className = "home" >

        <Intro/>

        <Carousel/>

        <HobbiesSection/>
     </div>

}