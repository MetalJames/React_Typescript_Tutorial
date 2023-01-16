import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // we telling type script that we know better than the compiler that the empty object is a type of
    //AuthUser do this only if we confident that user will be initialized soon after setup
    // and will always have the value after - only in this case we can use type assertion and if
    // we not sure its better to leave it the way we have it in User.tsx

    //In Typescript, Type assertion is a technique that informs the compiler about the type of a variable. 
    //Type assertion is similar to typecasting but it doesn't reconstruct code. You can use type assertion 
    //to specify a value's type and tell the compiler not to deduce it.


    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Volodymyr',
            email: 'volodymyr@example.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is { user.name}</div>
            <div>User email is {user.email}</div>
            <button></button>
        </div>
    )
}