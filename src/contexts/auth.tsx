'use client'
import React from "react"

type ContextProps = {
    user: any
    handleLogin: () => void
    handleRegister: () => void
}

const AuthContext = React.createContext<ContextProps | null>(null)

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = React.useState({})
    const [loading, setLoading] = React.useState(false)

    const handleLogin = () => {
        
    }

    const handleRegister = () => {

    }

    return(
        <AuthContext.Provider value={{handleLogin, handleRegister, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const data: ContextProps = React.useContext(AuthContext)

    return data
}