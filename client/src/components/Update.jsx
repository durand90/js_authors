import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';





export const Update = () => {
    
    const {someId} = useParams();
    //console.log(someId);

    const history = useHistory();
    
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + someId)
            .then(res => {
                //console.log(res.data)
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [someId])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('button pushed')

        
        const updateAuthor = {
            name: name
        }

        axios.put('http://localhost:8000/api/authors/' + someId, updateAuthor)
            .then(res => {
                console.log(res.data)
                history.push('/')
            }) 
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h1>Favorite author</h1>
            <h3><Link to='/'>Home</Link></h3>
            <form onSubmit={handleSubmit}>
            <p>Edit this author</p>
            <label>
                Name:
                <input onChange={(e) => setName(e.target.value)} value={name}/>
                <button>Submit</button>
            </label>
            </form>
            <button><Link to='/'>Cancel</Link></button>
                <p>{JSON.stringify(name)}</p>
        </div>
    )
}

export default Update;