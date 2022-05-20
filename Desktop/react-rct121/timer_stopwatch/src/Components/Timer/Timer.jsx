
import { useState, useEffect, useRef } from "react";

export const Timer = () => {
    
    const hrRef = useRef();
    const minRef = useRef();
    const secRef = useRef();
   
   const [data, setData] = useState(
       {
           hr: null,
           min: null,
           sec: null
       }

   )

   const saveData  = () => {
       setData({
        hr: hrRef.current.value,
        min: minRef.current.value,
        sec: secRef.current.value
    });

    setInterval(() => {
        if(data.hr > 0 && data.min > 0) {
            setData({
                hr: hrRef.current.value,
                min: minRef.current.value,
                sec: Number(data.sec) - 1
            });
        }
    }, 1000)
   }

   console.log(data)
    
    return (
        <>
        <div className="timerui">
        <div className="alltime">
       <input value={data.hr} ref={hrRef}  placeholder="OOh" type="number" name="" id="" />
       <input value={data.min} ref={minRef} placeholder="OOm" type="number" name="" id="" />
       <input value={data.sec} ref={secRef} placeholder="OOs" type="number" name= "" id="" />
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