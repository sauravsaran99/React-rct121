
import style from './Home.module.css'
import { useEffect, useState } from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faPlus } from '@fortawesome/free-solid-svg-icons'
  import { faPen } from '@fortawesome/free-solid-svg-icons'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
  import { useNavigate } from 'react-router-dom'

  import axios from 'axios'

export const Home = () => {

    const navigate = useNavigate();
    const idStorage = sessionStorage.getItem('encrypted_id_mon_get');

   useEffect(() => {
         if(idStorage == null) {
              navigate('/signin')
         }
   }, [idStorage, navigate])

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        result: 'Shortlist',
        birth: '',
        userid: sessionStorage.getItem('encrypted_id_mon_get')
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/student', formData).then((res) => {
            setFormData({
                name: '',
                email: '',
                result: 'Shortlist',
                birth: '',
                userid: sessionStorage.getItem('encrypted_id_mon_get')
            });
            console.log(res.data)
    }).catch((err) => {
        console.log(err.msg)
    })
    }
    
    return (
        <>
        <div className={style.mainhomebox}>
            <div className={style.totalstudent}>Candidates List</div>
                <div className={style.datamap}>
                <label><FontAwesomeIcon color='rgb(67,176,239)' icon={faPen} /></label>
  <label><FontAwesomeIcon color='rgb(67,176,239)' icon={faTrashCan} /></label>
                </div>
                <div className={style.addstudent} onClick={() => setShow(true)}><FontAwesomeIcon icon={faPlus} color="rgb(67,176,239)"/> Add new Candidate</div>

                {show?<div className={style.form}>
                    {/* here we will make a from of adding new candidate */}

                    <div className={style.formtwo}>
                        <form onSubmit={handleSubmit}>

                            <label className={style.signupbold}>Enter Your Name</label>
                            <br />
                            <input value={formData.name} onChange={(e) => handleChange(e)} type="text" name="name" />
                            <br />
                            <label className={style.signupbold}>Date of Birth</label>
                            <br />
                            <input value={formData.birth} onChange={(e) => handleChange(e)} type="date" name="birth" />
                            <br />
                            <label className={style.signupbold}>Enter Your Email</label>
                            <br />
                            <input value={formData.email} onChange={(e) => handleChange(e)} type="email" name="email" />
                            <br />
                            <select value={formData.result} onChange={(e) => handleChange(e)} name="result">
  <option value="Shortlist">Shortlist</option>
  <option value="Rejected">Rejected</option>
  </select>
  <button className={style.signupbold}>Submit</button>
                          </form>
                    </div>
                    
                    
                    
                    <svg onClick={() => setShow(false)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className={style.cross} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg></div>:null}
        </div>
        </>
    )
}