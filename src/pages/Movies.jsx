import './Movies.css'
import gt1 from "../films/good times/gt1.png"
import gt2 from "../films/good times/gt2.png"
import gt3 from "../films/good times/gt3.png"
import ltdesign1 from "../films/LT/LT PROD DES 1.png"
import ltdesign2 from "../films/LT/LT PROD DES 2.png"
import ltstill from "../films/LT/LT STILL1.png"
import stlfstoryboard from "../films/something to look for/STLF SB2.png"
import stlfstill1 from "../films/something to look for/stlfstill1.png"
import stlfstill2 from "../films/something to look for/stlfstill2.png"
import vmjstill1 from "../films/vmj/vmjstill1.png"
import vmjstill2 from "../films/vmj/vmjstill2.png"
import vmjstill3 from "../films/vmj/vmjstill3.png"
import lb1 from "../films/lemonboy/lb1.png"
import lb2 from "../films/lemonboy/lb2.png"
import lb3 from "../films/lemonboy/lb3.png"

function Movies(){
    return(
        <>
        <div id = "maincontainer">
        
        <div>
            <p id = "vmj">virgin mary jane</p>
            <p id = "vmjintro">short film, 2024; co-assistant director</p>
            <p id = "vmjplot">choir kids august and elsie ditch their final christmas concert to get high and eat taco bell. but when they accidentally pick up the wrong person's order, they have to go on a mission to find the person it belongs to.</p>
        </div>

        <div class="flexbox-container7">
            <img src={vmjstill1} alt="vmj1" id = "vmj1"></img>
            <img src={vmjstill2} alt="vmj2" id="vmj2"></img>
            <img src={vmjstill3} alt="vmj3" id="vmj3"></img>
        </div>

        <div>
            <p id = "lb">lemon boy</p>
            <p id = "lbintro">short film, 2024; storyboard artist</p>
            <p id = "lbplot">a college student meets her supposed soulmate at a party and forgets what he looks like the morning after, ensuing a reverse cinderella search and meeting a girl who she finds an undeniable connection to along the way.</p>
        </div>

        <div class="flexbox-container8">
            <img src={lb1} alt="lb1" id="lb1"></img>
            <img src={lb2} alt="lb2" id="lb2"></img>
            <img src={lb3} alt="lb3" id="lb3"></img>
        </div>

        <div>
            <p id = "gt">good times</p>
            <p id = "gtintro">short film, 2023; assistant director</p>
            <p id = "gtplot">a study of “simpler” moments in our pasts and how they reverberate through our memory in elusive and disconnected ways. </p>
        </div>
        
        <div class="flexbox-container4">
        <img src={gt1} alt="gt1" id = "gt1" />
        <img src={gt2} alt="gt2" id = "gt2" />
        <img src={gt3} alt="gt3" id = "gt3" />
        </div>

        <div>
            <p id = "lt">lilahi ta'ala</p>
            <p id = "ltintro">music video, 2023; production designer, storyboard artist</p>
        </div>

        <div class="flexbox-container5">
        <img src={ltdesign1} alt="ltdesign1" id = "lt1" />
        <img src={ltstill} alt="ltstill" id = "lt2" />
        <img src={ltdesign2} alt="ltdesign2" id = "lt3" />
        </div>
        
        <div>
            <p id = "stlf">something to look for</p>
            <p id = "stlfintro">short film, 2023; storyboard artist, script supervisor</p>
            <p id="stlfplot">rani wants to go back in time to convince her boyfriend evan to stay instead of breaking up as he is going to japan for a job.</p>
        </div>

        <div class="flexbox-container6">
        <img src={stlfstill1} alt="stlfstill1" id = "stlf1" />
        <img src={stlfstoryboard} alt="stlfstoryboard" id = "stlf2" />
        <img src={stlfstill2} alt="stlfstill2" id = "stlf3" />
        </div>
        </div>
        </>
    )
}

export default Movies