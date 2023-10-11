import React, { createContext, useState } from "react"

const initalUserContextValue = {
    user: null,
    token: null,
    login: (email: string) => { },
    logout: () => { },
    setToken: (token: string) => { }
}
const UserContext = createContext<{
    user: null | object;
    token: null | string
    login: (email: string, token: string) => void;
    logout: () => void;
    setToken: (token: string) => void
}>(initalUserContextValue);

type Props = {
    children: React.ReactNode
}

function UserProvider({ children }: Props) {
    const [user, setUser] = useState<null | object>(null);
    const [token, setToken] = useState<null | string>(null);
    const logout = () => {
        setUser(null)
    }
    const login = (email: string, token: string) => {
        console.log(email, token)
        setUser({ email })
        setToken(token)
    }

    return (
            <UserContext.Provider value={{ user, token, logout, login, setToken }}>
                {children}
            </UserContext.Provider>
    )
}

export { UserContext, UserProvider };