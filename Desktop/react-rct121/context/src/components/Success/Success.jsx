
import { useContext } from "react";
import { Createauth } from "../Context/Authcontext";

export const Success = () => {

    const [auth,token] = useContext(Createauth);

    
    return (
        <>
        {auth?<div>{token}</div>:''}
        </>
    )
}