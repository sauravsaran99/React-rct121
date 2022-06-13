import { Routes, Route } from "react-router-dom"
import { Home } from "../Components/Home"
import { Form } from './../Components/Form'

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element = {<Home></Home>}></Route>
            <Route path="/form" element = {<Form></Form>}></Route>
        </Routes>
    )
}