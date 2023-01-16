import React from 'react';
import { Link } from 'react-router-dom';
import { Counter } from './class/Counter';

const ClassComponnent = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <Counter message='The count value is'/>
        </>
    )
}

export default ClassComponnent