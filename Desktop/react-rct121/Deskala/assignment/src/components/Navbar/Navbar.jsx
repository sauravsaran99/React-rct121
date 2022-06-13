

import style from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

    const navigate = useNavigate();

    const deleteSession = () => {
        sessionStorage.removeItem('encrypted_id_mon_get');
        navigate('/signin');
    }

    return (
        <>
        <div className={style.navbar}>
            <div className={style.logout} onClick={() => deleteSession()}>Logout</div>
        </div>
        </>
    )

}