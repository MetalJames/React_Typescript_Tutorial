import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <br />
            <Link to='/basictypeprops'><button>Basic Type Props</button></Link>&#160;&#160;
            <Link to='/hooks'><button>Hooks</button></Link>
        </>
    )
}

export default Home