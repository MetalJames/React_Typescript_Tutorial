import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Container from './Container';
import Greet from './Greet';
import Heading from './Heading';
import Input from './Input';
import Oscar from './Oscar';
import Person from './Person';
import PersonfromOuterFile from './PersonfromOuterFile';
import PersonList from './PersonList';
import PersonListOuter from './PersonListOuter';
import Status from './Status';

const BasicTypeProps = () => {

    const personName = {
        first: 'Bruce',
        last: 'Wayne'
    }

    const nameList =[
        {
        first: 'Bruce',
        last: 'Wayne'
        },
        {
        first: 'Clark',
        last: 'Kent'
        },
        {
        first: 'Princess',
        last: 'Diana'
        }
    ]

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <Greet name='Volodymyr' moneyCount={20} isLoggedIn={true}/>
            <Greet name='Volodymyr' isLoggedIn={true}/>
            <Greet name='Volodymyr' isLoggedIn={false}/>
            <Button handleclick={(event, id) => {console.log('button clicked', event, id)}}/>
            <Input value='Something here' handleChange={(event) => console.log(event)}/>
            <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Status status='loading'/>
            <PersonfromOuterFile name={personName} />
            <PersonListOuter names={nameList} />
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
        </>
    )
}

export default BasicTypeProps