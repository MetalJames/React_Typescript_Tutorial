import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from './html/Button';
import { CustomInput } from './html/Input';
import { Toast } from './templateliterals/Toast';
import { CustomComponent } from './html/CustomComponent';
import { Text } from './polymorphic/Text';

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
            <br />
            <br />
            <CustomComponent name='Volodymyr' isLoggedIn moneyCount={50} />
            <br />
            <br />
            <Text as='h1' size='lg'>Heading</Text>
            <Text as='h4' size='md'>Paragraph</Text>
            <Text as='label' size='sm' color='secondary'>Label</Text>
        </>
    )
}

export default EverythingElse