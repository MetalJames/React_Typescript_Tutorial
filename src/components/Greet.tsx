import React from 'react';

type GreetProps = {
    name: string
    moneyCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    // here we destructuring messageCount - if money passed we have the number if not by default its 0
    const { moneyCount = 0 } = props
    return (
        <h2>
            {props.isLoggedIn ? `Welcome ${props.name}! You have $${moneyCount} left!` : `Welcome Guest`}
        </h2>
    )
}

export default Greet