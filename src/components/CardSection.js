import ShowCaseCard from './ShowCaseCard';
import Background1 from '../images/bg1.jpg';
import Background2 from '../images/bg2.jpg';
import Background3 from '../images/bg3.jpg';
import Background4 from '../images/bg4.jpg';




export default function CardRow() {
    return <div className="Row-container">

        <ShowCaseCard
            image={Background1}
            title="Projects"
            routeLink="/Projects"
        />

        <ShowCaseCard
            image={Background3}
            title="Resume"
            routeLink="/Resume"
        />


        <ShowCaseCard
            image={Background4}
            title="Learning"
            routeLink="/LearningBlog"
        />

        </div>
}