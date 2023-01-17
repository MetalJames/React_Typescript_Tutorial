import React from 'react';
import { Link } from 'react-router-dom';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile'
import { List, ListStriktedWithID } from './generics/List';
import { RandomNumber } from './restriction/RandomNumber';

const CompGenRestrProp = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <Private isLoggedIn={true} component={Profile}/>
            <button></button>
            <List 
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => alert(item)}
            />
            <button></button>
            <List 
                items={[1, 2, 3]}
                onClick={(item) => alert(item)}
            />
            <button></button>
            <ListStriktedWithID 
                items={[
                    {
                        id: 1,
                        first: 'Bruce',
                        last: 'Wayne',
                    },
                    {
                        id: 2,
                        first: 'Clark',
                        last: 'Kent',
                    },
                    {
                        id: 3,
                        first: 'Princess',
                        last: 'Diana',
                    },
                ]}
                onClick={(item) => alert(`${item.first} ${item.last}`)}
            />
            <button></button>
            <RandomNumber value={10} isPositive />
        </>
    )
}

export default CompGenRestrProp