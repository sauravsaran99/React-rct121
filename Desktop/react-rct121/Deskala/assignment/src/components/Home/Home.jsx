
import style from './Home.module.css'
import { useEffect, useState } from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  import { faPlus } from '@fortawesome/free-solid-svg-icons'
  import { faPen } from '@fortawesome/free-solid-svg-icons'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
  import { useNavigate } from 'react-router-dom'
  import { useDispatch } from 'react-redux/es/exports'
  import { studentGetThunk } from '../Redux/Actions/Student'

  import axios from 'axios'
import { useSelector } from 'react-redux'
import { Navbar } from '../Navbar/Navbar'

export const Home = () => {

    const disptach = useDispatch()
    const navigate = useNavigate();
    const idStorage = sessionStorage.getItem('encrypted_id_mon_get');
    const data = useSelector(store => store.student);
    const [productData, setProductData] = useState([]);
    const [pathchId, setPathchId] = useState('');
    const [pathEmail, setEmail] = useState('');



   useEffect(() => {
         if(idStorage == null) {
              navigate('/signin')
         }
   }, [idStorage, navigate])

   useEffect(() => {
    disptach(studentGetThunk())
   }, [disptach])

   useEffect(() => {
    setProductData([...data.student])
   }, [disptach, data])

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
        if(pathchId == '') {
            axios.post('http://localhost:8080/student', formData).then((res) => {
            disptach(studentGetThunk());
            setFormData({
                name: '',
                email: '',
                result: 'Shortlist',
                birth: '',
                userid: sessionStorage.getItem('encrypted_id_mon_get')
            });
    }).catch((err) => {
        console.log(err.msg)
    })
        } else if(pathEmail !== formData.email && pathchId !== '') {
        axios.patch(`http://localhost:8080/student/${pathchId}`, formData).then((res) => {
            setPathchId('')
        disptach(studentGetThunk());
        setFormData({
            name: '',
            email: '',
            result: 'Shortlist',
            birth: '',
            userid: sessionStorage.getItem('encrypted_id_mon_get')
        })
}
    )
    } else if(pathchId !== '' && pathEmail === formData.email) {
        axios.patch(`http://localhost:8080/student/${pathchId}`, {name:formData.name, result:formData.result, birth: formData.birth}).then((res) => {
            setPathchId('')
        disptach(studentGetThunk());
        setFormData({
            name: '',
            email: '',
            result: 'Shortlist',
            birth: '',
            userid: sessionStorage.getItem('encrypted_id_mon_get')
        })
}
    )
    }
    }

    const handlePatch = (t, i) => {
        axios.patch(`http://localhost:8080/student/${i}`, {result: t}).then((res) => {
            disptach(studentGetThunk());
    }
        )
}

    const handleDelete = (i) => {
        axios.delete(`http://localhost:8080/student/${i}`).then((res) => {
            disptach(studentGetThunk());
    }
        )
    }

    const handleEdit = (i, name, email, result, birth) => {

        setShow(true);
        setFormData({
            name: name,
            email: email,
            result: result,
            birth: birth,
            userid: sessionStorage.getItem('encrypted_id_mon_get')
        });

        setPathchId(i);
        setEmail(email)

    }

    
    return (
        <>
        <Navbar></Navbar>
        <div className={style.mainhomebox}>
            <div className={style.totalstudent}>Candidates List {data.student.length}</div>

            <div className={style.datamap2}>
                        <div className={style.Name}>Name</div>
                        <div className={style.Birth}>Date of Birth</div>
                        <div className={style.Email}>Email</div>
                        <div className={style.Result}>Result</div>
                </div>
            {productData.map((item, index) => {

                return (
                    <div key={item._id}>
                        {index%2 === 0 ? <div className={style.datamap}>
                            <div className={style.index}>{index+1}</div>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.birth}>{item.birth}</div>
                        <div className={style.email}>{item.email}</div>
                        {/* <div className={style.result}>{item.result}</div> */}
                        <select onChange={(e) => handlePatch(e.target.value, item._id)} name="result" id={style.dropdown}>
                            {item.result === 'Shortlist' ?<> <option value="Shortlist">Shortlist</option> 
                            <option value="Rejected">Rejected</option> </>:<> <option value="Rejected">Rejected</option> <option value="Shortlist">Shortlist</option></>}
                        </select>
                <div className={style.designlogo}><FontAwesomeIcon onClick={() => handleEdit(item._id, item.name, item.email, item.result, item.birth)} color='rgb(67,176,239)' icon={faPen} /></div>
  <div  className={style.designlogo}><FontAwesomeIcon color='rgb(67,176,239)' icon={faTrashCan} onClick={() => handleDelete(item._id)} /></div>
                        </div>:<div className={style.datamap2}>
                        <div className={style.index}>{index+1}</div>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.birth}>{item.birth}</div>
                        <div className={style.email}>{item.email}</div>
                        {/* <div className={style.result}>{item.result}</div> */}
                        <select onChange={(e) => handlePatch(e.target.value, item._id)} name="result" id={style.dropdown2}>
                            {item.result === 'Rejected' ?<> <option value="Rejected">Rejected</option> 
                            <option value="Shortlist">Shortlist</option> </>:<> <option value="Shortlist">Shortlist</option> <option value="Rejected">Rejected</option></>}
                        </select>
                <div className={style.designlogo}><FontAwesomeIcon onClick={() => handleEdit(item._id, item.name, item.email, item.result, item.birth)} color='rgb(67,176,239)' icon={faPen} /></div>
  <div  className={style.designlogo}><FontAwesomeIcon color='rgb(67,176,239)' icon={faTrashCan}  onClick={() => handleDelete(item._id)} /></div></div>}
                </div> 
                )
            } )}
                
                <div className={style.addstudent} onClick={() => setShow(true)}><FontAwesomeIcon icon={faPlus} color="rgb(67,176,239)"/> Add new Candidate</div>

                {show?<div className={style.form}>
                    {/* here we will make a from of adding new candidate */}

                    <div className={style.formtwo}>
                        <h3>Create Candidate</h3>
                        <form id={style.formfinal} onSubmit={handleSubmit}>

                           <div className={style.formfirst}> <label className={style.signupbold}>Name</label>
                            <br />
                            <input value={formData.name} onChange={(e) => handleChange(e)} type="text" name="name" required />
                            <br />
                            <label className={style.signupbold}>Date of Birth</label>
                            <br />
                            <input value={formData.birth} onChange={(e) => handleChange(e)} type="date" name="birth" required/>
                            <br />
                            <label>Age</label>
                            <br />
                            <input type="text" name="age" id="" required />
                            <br />
                            <select value={formData.result} onChange={(e) => handleChange(e)} name="result" required>
  <option value="Shortlist">Shortlist</option>
  <option value="Rejected">Rejected</option>
  </select></div>
  <div className={style.formsecond}>
  <label className={style.signupbold}>Address</label>
                            <br />
                            <input placeholder='Enter your address' type="address" name="address" required/>
                            <br />
  <label className={style.signupbold}>Email</label>
                            <br />
                            <input placeholder='Enter your Email' value={formData.email} onChange={(e) => handleChange(e)} type="email" name="email" required/>
                            <br />
  <label className={style.signupbold}>Pincode</label>
                            <br />
                            <input placeholder='Enter your six digit pincode'  required/>
                            <br />
                            <div className={style.buttonflex}>
                            <button onClick={() => setShow(false)} className={style.signupbold1}>Cancel</button>
                            <button className={style.signupbold}>Submit</button>
                            </div>
  </div>
  
                          </form>
                    </div>
                    
                    
                    
                    <svg onClick={() => setShow(false)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className={style.cross} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg></div>:null}
        </div>
        </>
    )
}