import axios from "axios";
import { useState } from "react";
import newData from '../db.json'

export const Form = ({oneFun}) => {

    // console.log('prps', oneFun.Allrestro)

    const oldData = newData;

    const [formData, getForm] = useState({
        id:null,
        restroName: "",
        card: false,
        cash:false,
        votes: "",
        reviews:"",
        cost: "",
        rating: "",
        image: "",
    })

    const setForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        getForm({...formData, [name] : value})
    }

    const sendForm = (e) => {
        e.preventDefault();
        oneFun.setRestro([...oneFun.Allrestro,formData]);
        getForm(
            {
                id:'',
                restroName: "",
                card: false,
                cash:false,
                votes: "",
                reviews:"",
                cost: "",
                rating: "",
                image: "",
            }
        )
    }
  return (
    <>
      <div className="formsfirst">
        <form onSubmit={sendForm}>
          <label>ID</label>
          <br />
          <input value={formData.id} onChange={setForm} type="number" name="id" id="id" />
          <br />
          <label>Restaurent Name</label>
          <br />
          <input value={formData.restroName} onChange={setForm} type="text" name="restroName" id="restroName" />
          <br />
          <label>Card</label>
          <br/>
          <select value={formData.card} onChange={setForm} name="card" id="cars">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <br />
          <label>Cash</label>
          <br/>
          <select value={formData.cash} onChange={setForm} name="cash" id="cash">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <br />
          <label>Votes</label>
          <br />
          <input value={formData.votes} onChange={setForm} type="text" name="votes" id="votes" />
          <br />
          <label>Reviews</label>
          <br />
          <input value={formData.reviews} onChange={setForm} type="text" name="reviews" id="reviews" />
          <br />
          <label>Cost</label>
          <br />
          <input value={formData.cost} onChange={setForm} type="text" name="cost" id="cost" />
          <br />
          <label>Rating</label>
          <br />
          <input value={formData.rating} onChange={setForm} type="text" name="rating" id="rating" />
          <br />
          <label>Image url</label>
          <br />
          <input value={formData.image}  onChange={setForm} type="text" name="image" id="image" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
