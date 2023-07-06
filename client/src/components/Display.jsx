import React, { useState, useEffect } from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom';



export const Display = () => {


    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)

            })
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (deleteIdx) => {
        console.log('delete working')

        axios.delete('http://localhost:8000/api/authors/' + deleteIdx)
            .then(res => {
                console.log(res.data)
                setAuthors(authors.filter((author) => author._id !== deleteIdx));
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>Favorite authors</h1>
            <p><Link to='/author/create'>Add an author</Link></p>
            <p>We have quotes by:</p>
            {/* <p>
                {JSON.stringify(authors)}
            </p> */}

            <table>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            {
                authors.map((author, index) => {
                    return (
                        <div key={author._id}>
                            <span>{author.name}</span>{'  '}
                            <button><Link to={'/author/update/'+ author._id}>edit</Link></button>
                            <button onClick={() => deleteAuthor(author._id)}>delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Display;