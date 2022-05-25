import axios from "axios";
import { useState } from "react"
import { useContext } from "react";
import { Createauth } from "../Context/Authcontext";

export const Login = () => {

    const [auth, token, isAuth, isToken] = useContext(Createauth);

    const [user, getUser] =  useState({
        email:'',
        password:'',
    })

    const setUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        getUser({...user, [name]: value})
    }

    const sendUser = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/login', user).then((res) => {
            if(res.data.token) {
                isToken(res.data.token);
                isAuth(true)
            }
        })

        getUser({
            email:'',
            password:'',
        })
    }


    return (
        <>
        <form onSubmit={sendUser}>
            <label>Email</label>
            <input value={user.email} type="email"  onChange={(e) => setUser(e)} name="email" id="email" />
            <label>Password</label>
            <input onChange={(e) => setUser(e)} value={user.password} type="password" name="password" id="password" />
            <button>Submit</button>
        </form>
        </>
    )
}