
import axios from "axios";
export const STUDENT_GET = 'STUDENT_GET';

export const studentGet = (payload) => {
    return {type: STUDENT_GET, payload}
}

export const studentGetThunk = () => {
    return (dispatch) => {

        axios.get(`http://localhost:8080/student?id=${sessionStorage.getItem('encrypted_id_mon_get')}`).then((res) => {
            
            return dispatch(studentGet(res.data))
    });
    };
};