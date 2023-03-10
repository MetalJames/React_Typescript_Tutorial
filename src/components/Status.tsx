import React from 'react';

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Data fetched successfully!'
    }
    return (
        <>
            <h2>Status - {message}</h2>
        </>
    )
}

export default Status