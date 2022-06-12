import { Routes, Route } from "react-router-dom"
import { Home } from "../Home/Home"
import { Signup } from "../Signup/Signup"
import { Signin } from '../Signin/Signin'

export const Router = () => {


    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
        </Routes>
        </>
    )
}