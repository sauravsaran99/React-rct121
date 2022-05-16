import axios from "axios"
import { useEffect, useState } from "react"
import  user from '../Components/user.module.css'
// import { Number } from "./Number"
export const User = () => {
    
    const [valueid, setValueid] = useState(null)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/data').then((res) => setData(res.data))
    }, [])

    const changeClass = (id) => {
        setValueid(id)
    }

    console.log('id', valueid)

    return (
        <div className={user.mainbox}>
        {data.map((e) => {
            return(
                    <div key={e.id} onClick={()=> changeClass(e.id)} className={user.secmainbox}>
                    <div className={user.mainsec}>
                        <img src={e.avatar} alt={e.name} width="60px" height="60px"/>
                    </div>

                    <div>
                        <h3>{e.name}</h3>
                        <div>{e.email}</div>
                        {e.id === valueid?<div>{e.phone}</div>:''}
                    </div>
                </div>
            )
        })}
        </div>
        
    )
}