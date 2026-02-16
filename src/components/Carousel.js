import ShowCaseCard from './ShowCaseCard';
import Background1 from '../images/bg1.jpg';
import Background2 from '../images/bg2.jpg';
import Background3 from '../images/bg3.jpg';





export default function Carousel() {
    return <div className="Carousel-container">

        <ShowCaseCard
            image={Background3}
            title="Projects"
            routeLink="/Projects"
        />
        <ShowCaseCard
            image={Background1}
            title=" Resume"
            routeLink="/Resume"
        />
        <ShowCaseCard
            image={Background2}
            title="Learning"
            routeLink="/LearningBlog"
        />

        </div>
}