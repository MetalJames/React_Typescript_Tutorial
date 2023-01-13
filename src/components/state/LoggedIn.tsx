// trying shortened the code

import { useState } from "react";

type ContainerProps = {
    styles: React.CSSProperties
}

export const LoggedIn = (props: ContainerProps) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div style={props.styles}>
            <div>
                <button onClick={handleLogin}>Login</button>&nbsp;&#160;
                <button onClick={handleLogout}>Logout</button>
            </div>
            <br />
            <div>User is { isLoggedIn ? 'logged in' : 'logged out' }</div>
        </div>
    )
}