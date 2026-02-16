import { Link } from "react-router-dom";



export default function ShowCaseCard({
    image,
    title,
    routeLink
}) {
    return <div className="ShowCaseCard-container">

        <Link to={routeLink}>
            <img className="ShowCaseCardImage" src={image} alt={title} />
            <div className="ShowCaseCard-overlay">
                {title}
            </div>
        </Link>
    </div>
}