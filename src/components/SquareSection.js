import {Link} from "react-router-dom"

export default function SquareSection({ 
  sectionClass, 
  title, 
  linkPage
}) {
  return (
    <section className={sectionClass} id="ScrollSection">
        <Link to={linkPage}>
            <div className="SquareSectionRow">
                <div className="column" id="LeftPhoto">
                    <div className="SectionTitles">
                    {title}
                    </div>
            
                </div>
        
                <div className="column">
                <p></p>
                </div>
            </div>

    </Link>
    </section>
  );
}