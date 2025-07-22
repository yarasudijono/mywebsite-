import './Projects.css'
import as11 from "../events/AS11 Medium.png"
import as2 from "../events/AS2.png"
import as3 from "../events/AS32 Medium.png"

function Projects(){
    return(
        <>
        <div id = "maincontainer">
         <div>
            <h1 id = "events">your clothes: apparel swap</h1>
            <p id="ycinfo">taken from the saying, “one man’s trash is another man’s treasure,” apparel swap invites participants of all ages within greater jakarta to prolong the lives of their second-hand clothes by presenting them to other interested participants.</p>
        </div>

        <div class="flexbox-container1">
            <div>
            <p id = "as1">apparel swap</p>
            <p id="as1desc1">november 26th, 2022, 3-6pm</p>
            <p id="as1desc2">20 swappers</p>
            </div>
            <img src={as11} alt="as11" id = "swap" />
        </div>

        <div class= "flexbox-container2">
            <div>
            <p id = "as2">apparel swap 2.0</p>
            <p id="as2desc1">february 19th, 2023, 2-7pm</p>
            <p id="as2desc2">90+ swappers</p>
            </div>
            <img src={as2} alt="as2" id = "swap2" />
        </div>

        <div class="flexbox-container3">
            <div>
            <p id = "as3">apparel swap 3.0</p>
            <p id="as3desc1">june 24th-25th, 2023, 12-5pm</p>
            <p id="as3desc2">100+ swappers</p>
            </div>
            <img src={as3} alt="as3" id = "swap3" />
            </div>
        </div>
        </>
    )
}

export default Projects