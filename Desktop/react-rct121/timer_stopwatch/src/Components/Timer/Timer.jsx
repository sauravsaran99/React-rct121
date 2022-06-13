
import { useState, useEffect, useRef } from "react";

export const Timer = () => {
    
    const hrRef = useRef();
    const minRef = useRef();
    const secRef = useRef();
//    const timerRef = useRef();

   const [hrData, sethr] = useState("")
   const [minData, setmin] = useState("")
   const [secData, setsec] = useState("")


   const saveData  = () => {
    console.log('kritu', secData)
       sethr(hrRef.current.value);
       setmin(minRef.current.value);
       setsec(secRef.current.value);

    //    if(Number(hrData) == 0 && Number(minData) == 0 && Number(secData) == 0) {
    //        clearInterval(hrRef.current)
    //        clearInterval(minRef.current)
    //        clearInterval(secRef.current)
    //    }

    //    if(Number(secData) === 0 && Number(minData) !== 0) {
    //        setmin(prev => Number(prev) - 1);
    //        setsec(60)
    //    } 
       
    //    if(Number(minData) === 0 && hrData > 0) {
    //        setmin(Number(hrData)*60)
    //    }
        secRef.current = setInterval(() => {
            setsec(prev => Number(prev) - 1)
           }, 800)
       }


   
    return (
        <>
        <div className="timerui">
        <div className="alltime">
       {hrData === ''? <input ref={hrRef}  placeholder="OOh" type="number" name="" id="" />:<div>{hrData}h</div>}
       {minData == ''?<input ref={minRef} placeholder="OOm" type="number" name="" id="" />:<div>{minData}m</div>}
       {secData == ""?<input  ref={secRef} placeholder="OOs" type="number" name= "" id="" />:<div>{secData}s</div>}
        </div>
        </div>
        <div className="namebutton">
            {/* {check?<button onClick={startTime}>START</button>:<button onClick={stopCurr}>false</button>}
            <button onClick={resetCurr}>RESET</button> */}
            <button onClick={saveData}>START</button>
            <button>RESET</button>
        </div>
        </>
    )
}