import React from 'react';
import { Link } from 'react-router-dom';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';

const Hooks = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <User styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
            <LoggedIn styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
        </>
    )
}

export default Hooks