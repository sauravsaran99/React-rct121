import { useEffect, useState } from "react"

export const Resdisplay = ({restro}) => {
    const [data, updataDis] = useState(restro);

useEffect(() => {
    updataDis(restro)
}, [restro])
    console.log('rekr', restro)
    return (
        <div className="datashowfirst">
            {data.map((e) => {
                return (
                    <>
                    <div>
                    <div className="mainBox" key={e.id}>
                    <div className="image">
                        <img src={e.image} alt={e.restroName} width="120px" height="110px"/>
                    </div>
                    <div className="secondmain">
                        <div className="firstratevot">
                        <h3 className="name">{e.restroName}</h3>
                        <div>Cost ₹{e.cost} for one</div>
                        {e.card?<div>Accept Online Payment Only</div>:""}
                        </div>
                        <div className="ratevot">
                            <div className="rating">{e.rating}</div>
                            <div>{e.votes} votes</div>
                            <div>{e.reviews} reviews</div>
                        </div>
                    </div>
                    </div>
                    <div className="buttonorder">
                        <button>Order Online </button>
                    </div>
                    </div>
                    </>
                )
            })}
        </div>
    )
}