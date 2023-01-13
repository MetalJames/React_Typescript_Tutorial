import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <br />
            <Link to='/basictypeprops'><button>Basic Type Props</button></Link>
        </>
    )
}

export default Home