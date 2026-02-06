import Hobbie from '../components/Hobbie';

export default function HobbiesSection(){
    return <section id="SquareTitle" id= "ScrollSection">
    
            <div className="CenteredTitles" id= "Hobbie">
            
                Activities/Hobbies
            </div>
            
            <h3>
                
            </h3>
            <div className="HobbiesRow">
                <Hobbie
                    title="Reformer Pilates"
                    subtitle="I appreciate the challenge and I really enjoy the community aspect of it as well."
                    thumbnail="https://img.icons8.com/ios-glyphs/90/pilates.png"
                />

                <Hobbie
                    title="Strength Training"
                    subtitle="I really enjoy working out, its a great way to de-stress after a long day."
                    thumbnail="https://img.icons8.com/ios-glyphs/90/dumbbell.png"
                />
                

                <Hobbie
                    title="Hiking"
                    subtitle="I love nature! I try to explore new trails and enjoy the peacefulness of the outdoors."
                    thumbnail="https://img.icons8.com/ios-filled/100/trekking.png"
                />
                
                <Hobbie
                    title="Code"
                    subtitle="I really enjoy the problem-solving aspect of programming, and the way it allows me to bring my ideas to life."
                    thumbnail="https://img.icons8.com/pastel-glyph/2x/code.png"
                />

            </div>

            <div className="HobbiesRow">
                <Hobbie
                    title="Art (Medium - Oil on Canvas)"
                    subtitle="I hardly have the time to paint lately, but its a lot of fun to get imersed into a new project here and there."
                    thumbnail="https://img.icons8.com/ios/2x/easel.png"
                />

                <Hobbie
                    title="Carpentry/DIYs"
                    subtitle="I love carpentry, its like putting together a puzzle, with pieces that just kind of unfold themselves along the way. I genuinely enjoy the freedom of crafting something tangible."
                    thumbnail="https://img.icons8.com/dotty/2x/circular-saw.png"
                />

            </div>
        
    </section>
}