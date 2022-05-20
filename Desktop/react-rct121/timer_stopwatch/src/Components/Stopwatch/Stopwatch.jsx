


import { useRef, useEffect, useState } from "react"


export const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [check, setCheck] = useState(true);
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(null)
    const [hou, setHou] = useState(null)
    const timeref = useRef()


const startTime = () => {
    setCheck(false)
    timeref.current = setInterval(() => {
        setTime(prev => prev + 1)
    }, 40)
}

if(time === 60) {
    setSec(sec+1);
    setTime(0);
}

if(sec === 60) {
    setMin(min+1);
    setSec(0);
}

if(min === 60) {
    setHou(hou+1);
    setMin(0)
}

const stopCurr = () => {
     clearInterval(timeref.current);
     setCheck(true)
    //  timeref.current = 0
}

const resetCurr = () => {
    clearInterval(timeref.current);
    setTime(0);
    setSec(0);
    setMin(null);
    setHou(null);

    setCheck(true)
}

    return (
        <>
        <div className="timerui">
        <div className="alltime">
        {hou != null?<div className="ttime"><span>{hou}</span>h</div>:''}
        {min != null?<div className="ttime"><span>{min}</span>m</div>:''}
        {sec != null?<div className="ttime"><span>{sec}</span>s</div>:''}
        <div className="ttime"><span className="mltime">{time}</span></div>
        </div>
        </div>
        <div className="namebutton">
            {check?<button onClick={startTime}>START</button>:<button onClick={stopCurr}>STOP</button>}
            <button onClick={resetCurr}>RESET</button>
        </div>
        </>
    )
}