
import style from './Signup.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Signup = () => {

    const navigate = useNavigate()
    const [userData, setData] = useState({
        phone: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({...userData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( userData.phone.length !== 10) {
            return setError('Phone number should be 10 digits')
        } else {
        axios.post('http://localhost:8080/signup', userData).then((res) => {
            if(res.data.errors) {
                setError(res.data.errors[0].msg)
                setData({
                    username: '',
                    email: '',
                    password: '',
                })
            } else if(res.data.msg) {
                setError(res.data.msg)
                setData({
                    username: '',
                    email: '',
                    password: '',
                })
            } else {
                setData({
                    username: '',
                    email: '',
                    password: '',
                })
                navigate('/signin')
            }
        }).catch(err => console.log(err.msg))
        } 
    }

    return (
        <>
        <div className={style.deskaltext}>Deskala - Assignment</div>
        <div className={style.signupform}>
            <div className={style.signuptext}>Sign Up</div>
            <form onSubmit={handleSubmit}>
                <label className={style.signupbold}>Email id</label>
                <br />
                <input onClick={() => setError('')}  value={userData.email} onChange={(e) => handleChange(e)} type="email" name="email" id="" placeholder='enter your email id'/>
                <br />
                <label className={style.signupbold}>Phone Number</label>
                <br />
                <input onClick={() => setError('')} value={userData.phone} onChange={(e) => handleChange(e)} type="number" name="phone" id="" placeholder='enter your phone number' required={userData.phone.length === 10}/>
                <br />
                <label className={style.signupbold}>Password</label>
                <br />
                <input onClick={() => setError('')} value={userData.password} onChange={(e) => handleChange(e)} type="password" name="password" id="" placeholder='enter your password' />
                <br />
                {error !== ""? <div className={style.error}>*{error}</div> : null}
                <button>Sign up</button>
            </form>
        </div>
        </>
    )
}