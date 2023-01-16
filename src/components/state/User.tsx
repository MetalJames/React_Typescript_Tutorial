import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

type ContainerProps = {
    styles: React.CSSProperties
}

export const User = (props: ContainerProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Volodymyr',
            email: 'volodymyr@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div style={props.styles}>
            <div>
                <button onClick={handleLogin}>Login</button>&nbsp;&#160;
                <button onClick={handleLogout}>Logout</button>
            </div>
            <br />
            <div>User name is { user?.name}</div>
            <br />
            <div>User email is {user?.email}</div>
            <button></button>
        </div>
    )
}