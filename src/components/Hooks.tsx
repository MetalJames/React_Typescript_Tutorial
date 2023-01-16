import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './state/Counter';
import CounterStrictAction from './state/CounterStrictAction';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';

//this is for useContext only
import { ThemeContextProvider } from '../components/context/ThemeContext';
import { Box } from '../components/context/Box';

//second part useContext - here we use it with user context
import { UserContextProvide } from './context/UserContext';
import { UserUseContext } from './context/UserUseContext';
import { DomRef } from './ref/DomRef';
import { MutableRef } from './ref/MutableRef';

const Hooks = () => {

    return (
        <>
            <Link to='/'><button>Go Home</button></Link>
            <User styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
            <LoggedIn styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
            <Counter styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
            <CounterStrictAction styles={{ width: '100%', padding: '1rem', display: 'flex', 
                            justifyContent: 'space-between', flexDirection: 'column'}}/>
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <UserContextProvide>
                <UserUseContext />
            </UserContextProvide>
            <DomRef />
            <MutableRef />
        </>
    )
}

export default Hooks