import '../Googlewatch/Googlewatch.css'
import { useState } from "react"
import { Stopwatch } from '../Stopwatch/Stopwatch'
import { Timer } from '../Timer/Timer'


export const Googlewatch = () => {

    const [display, setDisplay] = useState(true);

    const changeDisplay = (val) => {
        setDisplay(val)
    }
    return (
        <>
        <div className="firstMainbox">
        <div onClick={() => changeDisplay(false)}>TIMER</div>
        <div onClick={() => changeDisplay(true)}>STOPWATCH</div>
        </div>
        <div className="secondMainbox">
            {display?<Stopwatch></Stopwatch>:<Timer></Timer>}
        </div>
        </>
    )
}