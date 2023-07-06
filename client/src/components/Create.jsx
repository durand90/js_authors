import React, { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export const Create = () => {


    const history = useHistory();

    const [name, setName] = useState('');

    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')

        const newAuthor = {
        name: name
    }

        
        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then(res => {
            console.log(res.data)
            console.log('CLIENT SUCCESS!!!')
            history.push('/')
        })
        .catch(err => {
            console.log('CLIENT ERROR!!!')
            console.log(err.response.data)


            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
    }


    return (
        <div>
            <h1>Favorite authors</h1>
            <h3><Link to='/'>Home</Link></h3>
            <p>Add author</p>
            <p>
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input onChange={(e) => setName(e.target.value)} value={name}/>
                </label>
                <div>
                <button>Submit</button>
                </div>
            </form>
                <button><Link to='/'>Cancel</Link></button>
        </div>
    )
}

export default Create;