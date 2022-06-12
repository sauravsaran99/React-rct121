
import style from './Signin.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Signin = () => {

    const navigate = useNavigate()
    const [userData, setData] = useState({
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
        axios.post('http://localhost:8080/signin', userData).then((res) => {
           if(res.data.messa) {
                setError(res.data.messa);
                setData({
                    email: '',
                    password: '',
                })
           } else if(res.data.mess) {
            setError(res.data.mess)
            setData({
                email: '',
                password: '',
            })
           } else {
            setData({
                email: '',
                password: '',
            })
            console.log(res.data)
            sessionStorage.setItem('encrypted_id_mon_get', res.data.id)
            navigate('/')
           }
        }).catch(err => console.log(err.msg))
    }

    return (
        <>
        <div className={style.deskaltext}>Deskala - Assignment</div>
        <div className={style.signupform}>
            <div className={style.signuptext}>Sign In</div>
            <form onSubmit={handleSubmit}>
                <label className={style.signupbold}>Email id</label>
                <br />
                <input onClick={() => setError('')}  value={userData.email} onChange={(e) => handleChange(e)} type="email" name="email" id="" placeholder='enter your email id'/>
                <br />
                <label className={style.signupbold}>Password</label>
                <br />
                <input onClick={() => setError('')} value={userData.password} onChange={(e) => handleChange(e)} type="password" name="password" id="" placeholder='enter your password' />
                <br />
                {error !== ""? <div className={style.error}>*{error}</div> : null}
                <button>Sign In</button>
            </form>
        </div>
        </>
    )
}