import React, { createContext, useState } from "react"
interface IUser {
    names: string
    email: string
}
const initalUserContextValue = {
    user: null,
    token: null,
    login: (email: string) => { },
    logout: () => { },
    setToken: (token: string) => { }
}
const UserContext = createContext<{
    user: null | IUser;
    token: null | string
    login: (email: string, name: string, token: string) => void;
    logout: () => void;
    setToken: (token: string) => void
}>(initalUserContextValue);

type Props = {
    children: React.ReactNode
}

function UserProvider({ children }: Props) {
    const [user, setUser] = useState<null | IUser>(null);
    const [token, setToken] = useState<null | string>(null);
    const logout = () => {
        setUser(null)
    }
    const login = (email: string, names: string, token: string) => {
        setUser({ email, names })
        setToken(token)
    }

    return (
            <UserContext.Provider value={{ user, token, logout, login, setToken }}>
                {children}
            </UserContext.Provider>
    )
}

export { UserContext, UserProvider };