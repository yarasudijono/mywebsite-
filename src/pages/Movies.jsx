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

function Movies(){
    return(
        <>
        <div id = "maincontainer">
        
        <div>
            <p id = "gt">good times</p>
            <p id = "gtintro">short film, 2022; assistant director</p>
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