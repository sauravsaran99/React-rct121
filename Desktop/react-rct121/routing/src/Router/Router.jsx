import { Routes, Route } from "react-router-dom"
import { Home } from "../Components/Home"
import { Productitem } from "../Components/Productitem"
import { Product } from "../Components/Products"


export const Router = () => {

    return (
        <>
        <Routes>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/product' element={<Product></Product>}></Route>
            <Route path="/product/:id" element={<Productitem></Productitem>}></Route>
        </Routes>
        </>
    )
}