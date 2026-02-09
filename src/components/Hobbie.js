export default function Hobbie({
    title,
    subtitle,
    thumbnail
}){
    return <div className="HobbySection">
        <img className= "HobbyImg" id="Books"src= {thumbnail}/>
        <h3>{title} </h3>
        <div className= "HobbySection-paragraphs"> {subtitle}</div>
                    
    </div>
}