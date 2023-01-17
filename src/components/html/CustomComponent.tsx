//extracting type from Greet component
// we are able to extractthe prop types from one componentand use the as prop types on another component

import React from 'react';
import Greet from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>CustomComponent {props.isLoggedIn} have only ${props.moneyCount} the customer{props.name}</div>
    )
}