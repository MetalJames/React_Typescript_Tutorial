import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './html/Button';
import { CustomInput } from './html/Input';
import { Toast } from './templateliterals/Toast';

const EverythingElse = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            < br />
            < br />
            <Toast position='left-center'/>
            <br />
            <CustomButton variant='primary' onClick={() => alert('Clicked')}>Primary Button</CustomButton> 
            <br />
            <br />
            <CustomInput value={'here we come'}/>
        </>
    )
}

export default EverythingElse