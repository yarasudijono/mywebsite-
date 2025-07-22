import './MainHome.css'
import lazycat from "../events/Lazy Cat.png"
import lazycat2 from "../events/Lazy Cat2.png"

function Home(){
    return(
        <>
        <div>
            <p id = "subtitle">welcome!</p>
        </div>

        <div>
            {<img id="lazycat2" src={lazycat2}></img>}
        </div>

        <div>
            <p id="intro1">i'm yara, and i'm currently a junior at barnard college of columbia university intending to study economics and film studies. i was born and raised in jakarta, indonesia, and if i'm not getting lost in transit trying to get to a new restaurant spot, i'm probably in bed binging video essays.</p>
        </div>    
        <div>
            <p id="intro2">before college, i spent a gap year in jakarta furthering my advocacy for sustainable fashion through hosting city-wide Apparel Swaps with my non-profit organization, Your Clothes, as well as exploring film and media as a freelance production designer and storyboard artist. i hope to keep pursuing projects at the intersection of the arts, sustainability, and technology through entrepreneurship and consulting.</p>
        </div>

        <div>
            {<img id="lazycat" src={lazycat}></img>}
        </div>

        <div>
            <a id="instagram" href="https://www.instagram.com/yarasudijono/" target="_blank">find me on instagram!</a>
        </div>
        </>
    )
}
export default Home