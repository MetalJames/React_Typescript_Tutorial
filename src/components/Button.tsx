import React from 'react';

type ButtonProps = {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleclick(event, 1)}>Click</button>
    )
}

export default Button