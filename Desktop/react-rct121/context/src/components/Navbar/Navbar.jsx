
import { useContext } from "react"
import { Createauth } from "../Context/Authcontext"
import "../Navbar/Navbar.css"
export const  Navbar = () => {

    const [auth, token, isAuth, isToken]  = useContext(Createauth);

    const edit = () => {
        isAuth(false);
        isToken('')
    }
    return (
        <>
        <div className="flexdesign">
        <div className="child">Login</div>
        <div className="child" onClick={() => edit()}>Logout</div>
        </div>
        </>
    )
}