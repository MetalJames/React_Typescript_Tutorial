import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserUseContext = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        userContext.setUser({
            name: 'Volodymyr',
            email: 'volodymyr@example.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }
    return (
        <div>
            <br />
            <button onClick={handleLogin}>Login</button>&nbsp;&#160;
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}