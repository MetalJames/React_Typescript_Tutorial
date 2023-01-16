import React from 'react';
import { Link } from 'react-router-dom';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile'

const CompGenRestrProp = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <Private isLoggedIn={false} component={Profile}/>
        </>
    )
}

export default CompGenRestrProp