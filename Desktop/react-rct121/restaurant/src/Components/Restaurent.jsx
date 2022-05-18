

import '../Components/Restaurent.css'
import { Resdisplay } from './Resdisplay';
import data from '../db.json'
import { Form } from './Form';
import { useEffect, useState } from 'react';

export const Restaurent = () => {

    const newData = data.data;

    const [Allrestro, setRestro] = useState([...newData]);
    
    const filterFun = (d) => {

        if(d == 4) {
            setRestro(newData.filter((a) => Number(a.rating) > 4))
        } else if(d == 3) {

            setRestro(newData.filter((a) => Number(a.rating) > 3))
        } else if(d == 2) {

            setRestro(newData.filter((a) => Number(a.rating) > 2))
        } else if(d == 1) {

            setRestro(newData.filter((a) => Number(a.rating) > 1))
        } else if(d == 'card') {
            setRestro(newData.filter((a) => a.card === true))
        } else if(d == 'cash') {
            setRestro(newData.filter((a) => a.cash === true))
        }  else if(d == 'Low') {

            const data3 = [...Allrestro]
            setRestro(data3.sort((a,b) => Number(a.cost) - Number(b.cost)))
        } else if(d == 'High') {
            const data2 = [...Allrestro]
            setRestro(data2.sort((a,b) => Number(b.cost) - Number(a.cost)))
        } else {
            setRestro(newData)
        }
    }
    return (
        <>
        <div className='filter'>
            <button onClick={() => filterFun('0')} className='star'>All Restro</button>
            <button onClick={() => filterFun('card')} className='star'>Card</button>
            <button onClick={() => filterFun('cash')} className='star'>Cash</button>
            <button onClick={() => filterFun(4)} className='star'>+4 Star</button>
            <button onClick={() => filterFun(3)} className='star'>+3 Star</button>
            <button onClick={() => filterFun(2)} className='star'>+2 Star</button>
            <button onClick={() => filterFun(1)} className='star'>+1 Star</button>
            <button onClick={() => filterFun('High')} className='star'>High to Low</button>
            <button onClick={() => filterFun('Low')} className='star'>Low to High</button>
        </div>
        <div className='mainrespage'>
        <Form oneFun={{setRestro, Allrestro}}></Form>
        <Resdisplay restro={Allrestro}></Resdisplay>
        </div>
        </>
    )
}