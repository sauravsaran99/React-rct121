
import { useRef } from "react"
import axios from "axios";
export const Form = () => {

    const name = useRef(null);
    const notes = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: name.current.value,
            notes: notes.current.value
        };
console.log(data)
        axios.post('http://localhost:8080/user',data ).then((res) => {
            console.log(res.data)
        }).catch(err => console.log)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>What's your name:</label>
            <input type="text" ref={name} name="name" />
            <label>Notes:</label>
            <textarea type="text" ref={notes} name="notes" />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}