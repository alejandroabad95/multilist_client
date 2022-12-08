import { createContext, useEffect, useState } from 'react'
import authService from '../services/auth.service'

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        authService
            .verify(token)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(err => console.error('algo malo paso aw :3', err)) //cambiar
    }

    const logoutUser = () => {

        setUser(null)
        localStorage.removeItem('authToken')

    }

    useEffect(() => {
        authenticateUser()
    }, []) //cuando se monta autentica el usuario


    return (
        <AuthContext.Provider value={{ storeToken, authenticateUser, user, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }