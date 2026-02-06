import Arrow from '../images/Arrow.png';
import SquareSection from '../components/SquareSection';

export default function Home() {
    return   <div className = "home" >

        <div id="HeadingContain" class="vertical-line">
	        <h1>About</h1><br/>
	        <h1 class="MeTxt"> Me </h1>
        </div>
        
        <div className = "intro" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences. Previously at Paycom, I delivered codebase-wide UI updates, fixed critical bugs, and enhanced reporting pipelines to improve performance and maintainability. I’ve also worked in QA automation, system optimization, device automation, sensor simulation, firmware-driven data collection, and system validation using ESP32, Arduino, Raspberry Pi, and Python.Passionate about clean code, problem-solving, and continuous learning.<br/> <br/>	
        Life Philosophy: Life is about making the best of the time and place you find yourself in to continue to progress forward.<br/>
        My interests and hobbies can be summed with: being involved in my community, carpentry, art (painting), web-development, entrepreneurship, self-development. </div>

        <div> 
            <img className="downArrow" src={Arrow} alt="down arrow" />
        </div>

        <div className= "parentDiv">
            <SquareSection
              sectionClass="SquareTitle-1"
              title="My Projects"
              subtitle="What I'm up to, and what I'll do next."
              buttonText="View"
              buttonLink="/Projects"
            />

        <section id="SquareTitle" id= "ScrollSection">

                <div class="CenteredTitles" id= "Hobbie">
                    
                    Activities/Hobbies
                </div>
                
                <h3>
                    Click on image to view completed projects or related links
                </h3>
                <div class="ItemsRow">
                    <div class="HobbySection">
                        <img class= "HobbyImg" id="Books"src= "https://img.icons8.com/ios/2x/book-shelf.png"/>
                        <h3>Reading </h3>
                        <div class= "Sectionsub-paragraphs"> I like to read self-development, should be able to add a feature where I can display these titles, and take suggestions soon! </div>
                    </div>
                    
                    <div class="HobbySection">
                        <img class="HobbyImg" id="Writing" src="https://img.icons8.com/pastel-glyph/2x/typewriter-with-paper.png"/>
                        <h3>Writing </h3>
                        <div class= "Sectionsub-paragraphs"> Just like basic journaling </div>
                    </div>
                    
                    <div class="HobbySection">
                        <img class="HobbyImg" id="Cooking" src="https://img.icons8.com/pastel-glyph/2x/kitchenwares.png"/>
                        <h3>Cooking/baking </h3>
                        <div class= "Sectionsub-paragraphs"> Another super fun hobby, of mine.</div>
                    </div>

                    
                    <div class="HobbySection">
                        <img class="HobbyImg" id="Carpentry" src="https://img.icons8.com/dotty/2x/circular-saw.png"/>
                        <h3>Carpentry/DIYs </h3>
                        <div class= "Sectionsub-paragraphs"> I love carpentry, its like putting together a puzzle, with pieces that just kind of unfold themselves along the way. I genuinely enjoy the freedom of crafting something tangible and functional.</div>
                    </div>
                </div>
                <div class="ItemsRow">
                    <div class="HobbySection">
                        <img class ="HobbyImg" id="Code" src="https://img.icons8.com/pastel-glyph/2x/code.png"/>
                        <h3>Code </h3>
                        <div class= "Sectionsub-paragraphs">I have so much left to learn, but its so gratifying to create something functional that improves either my life or the lives of my friends, with just lines of code. 
                        I hope to get better and to continue to create things that are useful and functional to me and the people around me.</div>
                    </div>
                    <div class="HobbySection">
                        <img class = "HobbyImg" id="Art" src="https://img.icons8.com/ios/2x/easel.png"/>
                        <h3>Art (Medium - Oil on Canvas) </h3>
                        <div class= "Sectionsub-paragraphs"> A super fun hobby, of mine.</div>
                    </div> 
                    <div class="HobbySection">
                        <img class="HobbyImg" id="AHIC" src="https://images.squarespace-cdn.com/content/5f2d7ff538045b5471a63a27/1601846691481-76H80FG93RTTO92MEPW1/AHIC+Final+Logo%400.5x.png?content-type=image%2Fpng" href="https://www.ahic-tamu.org/"/>
                        <h3>Aggie Hispanics In Computing </h3>
                        <div class= "Sectionsub-paragraphs"> I really care about being involved and trying to make a difference in my community.As an officer/member of Aggie Hispanics in Computing I genuinely hope to help create a supportive environment where our members
                        feel a little less alone and have the freedom to navigate their way through the tech industry. </div>
                    </div>
                </div>
            
        </section>
            <SquareSection
              sectionClass="SquareTitle-2"
              title="Time Line"
              subtitle="Exactly what I've been up to, and some personal goals."
              buttonText="View"
              buttonLink="/Timeline"
            />
            
            <SquareSection
              sectionClass="SquareTitle-3"
              title="Programming Languages"
              subtitle="The languages I have learned thus far"
              buttonText="View"
              buttonLink="/ProgrammingLanguage"
            />
        </div>

     </div>

}