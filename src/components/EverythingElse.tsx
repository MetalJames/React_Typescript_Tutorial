import React from 'react';
import { Link } from 'react-router-dom';
import { Toast } from './templateliterals/Toast';

const EverythingElse = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <Toast position='left-center'/>
        </>
    )
}

export default EverythingElse