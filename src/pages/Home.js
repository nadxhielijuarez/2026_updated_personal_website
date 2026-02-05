export default function Home() {
    return   <div className = "home" >
        
        <div className = "intro" >I am Software Developer with experience building scalable systems, modernizing codebases, and improving user experiences. Previously at Paycom, I delivered codebase-wide UI updates, fixed critical bugs, and enhanced reporting pipelines to improve performance and maintainability. I’ve also worked in QA automation, system optimization, device automation, sensor simulation, firmware-driven data collection, and system validation using ESP32, Arduino, Raspberry Pi, and Python.Passionate about clean code, problem-solving, and continuous learning.<br/> <br/>	
        Life Philosophy: Life is about making the best of the time and place you find yourself in to continue to progress forward.<br/>
        My interests and hobbies can be summed with: being involved in my community, carpentry, art (painting), web-development, entrepreneurship, self-development. </div>

        <div> 
            <img  className= "downArrow" src="2026_updated_personal_website/images/Arrow.png"/>
        </div>

        <div className= "parentDiv">
            <section className="SquareTitle-1 " id= "ScrollSection">


                <div className="row">
                    <div className="column" id= "LeftPhoto">
                        <div className = "SectionTitles">
                        My Projects
                        </div>
                        <div className= "Sectionsub-paragraphs">
                            
                                What I'm up to, and what I'll do next.
                            
                        </div>
                        <button onclick="window.location = './Projects/Projects.html'"> View</button>
                    </div>
                    
                    <div className="column">
                        <p>
                        
                        </p>
                    </div>
            </div>


            </section>

            <section ClassName="SquareTitle" id= "ScrollSection">


                
                <div className="CenteredTitles" id= "Hobbie">
                    
                    Activities/Hobbies
                </div>
                
                <h3>
                    Click on image to view completed projects or related links
                </h3>
                <div className="ItemsRow">
                    <div className="HobbySection">
                        <img className= "HobbyImg" id="Books"src= "https://img.icons8.com/ios/2x/book-shelf.png"/>
                        <h3>Reading </h3>
                        <div className= "Sectionsub-paragraphs"> I like to read self-development, should be able to add a feature where I can display these titles, and take suggestions soon! </div>
                    </div>
                    
                    <div className="HobbySection">
                        <img className="HobbyImg" id="Writing" src="https://img.icons8.com/pastel-glyph/2x/typewriter-with-paper.png"/>
                        <h3>Writing </h3>
                        <div className= "Sectionsub-paragraphs"> Just like basic journaling </div>
                    </div>
                    
                    <div className="HobbySection">
                        <img className="HobbyImg" id="Cooking" src="https://img.icons8.com/pastel-glyph/2x/kitchenwares.png"/>
                        <h3>Cooking/baking </h3>
                        <div className= "Sectionsub-paragraphs"> Another super fun hobby, of mine.</div>
                    </div>

                    
                    <div className="HobbySection">
                        <img className="HobbyImg" id="Carpentry" src="https://img.icons8.com/dotty/2x/circular-saw.png"/>
                        <h3>Carpentry/DIYs </h3>
                        <div className= "Sectionsub-paragraphs"> I love carpentry, its like putting together a puzzle, with pieces that just kind of unfold themselves along the way. I genuinely enjoy the freedom of crafting something tangible and functional.</div>
                    </div>
                </div>
                <div className="ItemsRow">
                    <div className="HobbySection">
                        <img className ="HobbyImg" id="Code" src="https://img.icons8.com/pastel-glyph/2x/code.png"/>
                        <h3>Code </h3>
                        <div className= "Sectionsub-paragraphs">I have so much left to learn, but its so gratifying to create something functional that improves either my life or the lives of my friends, with just lines of code. 
                        I hope to get better and to continue to create things that are useful and functional to me and the people around me.</div>
                    </div>
                    <div className="HobbySection">
                        <img className = "HobbyImg" id="Art" src="https://img.icons8.com/ios/2x/easel.png"/>
                        <h3>Art (Medium - Oil on Canvas) </h3>
                        <div className= "Sectionsub-paragraphs"> A super fun hobby, of mine.</div>
                    </div> 
            
                </div>
            
            </section>
            <section className="SquareTitle-2 " id= "ScrollSection">


                <div className="row">
                    <div className="column" id = "LeftPhoto" >
                        <div className = "SectionTitles">
                        Time Line
                        </div>
                        
                        <div className= "Sectionsub-paragraphs">
                            
                                Exactly what I've been up to, and some personal goals.
                            
                        </div>
                        <button  onclick= "window.location.href = './TimeLine/TimeLine.html'"> View</button>
                        
                        
                    </div>
                    <div className="column">
                        <p>
                        
                        </p>
                    </div>
                </div>


            </section>
            
            <section className="SquareTitle-3 " id= "ScrollSection">
                    <div className="row">
                    <div className="column" id = "LeftPhoto" >
                        <div className = "SectionTitles">
                        Programming Languages
                        </div>
                        
                        <div className= "Sectionsub-paragraphs">
                            
                                The languages I have learned thus far
                            
                        </div>
                        <button  onclick= "window.location.href = '/ProgrammingLanguages/proglan.html'"> View</button>
                    </div>
                    
                    <div className="column">
                        <p>
                        
                        </p>
                    </div>
                </div>
            
            </section>
        </div>

     </div>

}