import React from 'react';
import { data } from './Data';
import { useState } from 'react';
import './Search.css'

function Search() {

    const [search, setSearch] = useState('')
    return (
        <div>

            <form action="">
                <input  className='form'type="text" placeholder='Search' onChange={(event) => setSearch(event.target.value)} />
            </form>
            <h1>Overcoming Challenges</h1>
            <div >

                {data.filter((item) => {
                    return search.toLowerCase() === '' ? item
                        : item.body.toLowerCase().includes(search)

                })


                    .map((item) => (
                        <div key={item} className='bigdiv'>
                            <h2>{item.name}</h2>
                            <p>{item.body}</p>
                            <p className='smallp'>{item.state}</p>
                        </div>
                    ))}
            </div>

        </div>
    );
}

export default Search;
