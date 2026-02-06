import Button from './Button';

export default function SquareSection({ 
  sectionClass, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  children 
}) {
  return (
    <section className={sectionClass} id="ScrollSection">
      <div className="SquareSectionRow">
        <div className="column" id="LeftPhoto">
          <div className="SectionTitles">
            {title}
          </div>
          
          <div className="Sectionsub-paragraphs">
            {subtitle}
          </div>
          <Button text={buttonText} link={buttonLink} />
        </div>
        
        <div className="column">
          <p></p>
        </div>
      </div>

      {children && <div>{children}</div>}
    </section>
  );
}