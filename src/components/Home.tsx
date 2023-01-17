import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <br />
            <Link to='/basictypeprops'><button>Basic Type Props</button></Link>&#160;&#160;
            <Link to='/hooks'><button>Hooks</button></Link>&#160;&#160;
            <Link to='/classcomponent'><button>Class Component</button></Link>&#160;&#160;
            <Link to='/compgenrestrprop'><button>Component Generic Restricted Props</button></Link>&#160;&#160;
            <Link to='/everythingelse'><button>Everything Else</button></Link>&#160;&#160;
        </>
    )
}

export default Home