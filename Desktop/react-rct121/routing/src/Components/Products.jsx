import axios from "axios"
import { useEffect, useState } from "react"
import { Productitem } from "./Productitem";
import { useNavigate } from "react-router-dom";

export const Product = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/products').then((res) => {
            setProducts(res.data)
        })
    }, []);
    console.log(products)
    return (
        <>
       {products.map((product) => {
           return (
               <>
               
                <Productitem onClick={() => navigate(`/product/${product.id}`)} data={{name: product.name, price: product.price, id: product.id}}>
                
                </Productitem>
               </>
           )
       } )}
        </>
    )
}