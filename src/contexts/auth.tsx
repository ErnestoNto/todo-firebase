'use client'
import React from "react"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {setDoc, doc, query, getDoc} from 'firebase/firestore'
import { auth, db } from "@/services/firebase_conection"
import { useRouter } from 'next/navigation'

type ContextProps = {
    user: any
    loading: boolean
    handleLogin: (data: LoginProps) => void
    handleRegister: (data: RegisterProps) => void
    logout: () => void
}

type LoginProps = {
    email: string
    password: string
}
type RegisterProps = {
    name: string
    email: string
    password: string
}

const AuthContext = React.createContext<ContextProps | null>(null)

const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = React.useState({})
    const [loading, setLoading] = React.useState(false)

    const {push} = useRouter()

    React.useEffect(() => {
        const loadUser = () => {
            const data =localStorage.getItem('user')

            if(data){
                setUser(JSON.parse(data))
            }
        }

        loadUser()
    }, [])

    const handleLogin = async ({email, password}: LoginProps) => {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then( async (snapshot) => {
            const uid = snapshot.user.uid

            const docRef = doc(db, "users", uid)
            await getDoc(docRef)
            .then((res) => {
                let data = {
                    name: res.data()!.name,
                    email,
                    uid
                }

                setUser(data)
                saveInLocalStorage(data)
                setLoading(false)
                push('/dashboard')
            })
        })
    }

    const handleRegister = async ({name, email, password}: RegisterProps) => {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password)
        .then( async (snapshot) => {
            const uid = snapshot.user.uid

            const docRef = doc(db, "users", uid)
            await setDoc(docRef, {
                name: name,
                email: snapshot.user.email
            })
            .then(() => {
                let data = {
                    name,
                    email,
                    uid
                }

                setUser(data)
                saveInLocalStorage(data)
                setLoading(false)
                push('/dashboard')
            })
        })        
    }

    const logout = async () => {
        await signOut(auth)
        .then(() => {
            push('/')
        })
    }

    const saveInLocalStorage = (data: {name: string, email: string}) => {
        localStorage.setItem('user', JSON.stringify(data))
    }

    return(
        <AuthContext.Provider value={{handleLogin, handleRegister, logout, user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    const data: ContextProps | null = React.useContext(AuthContext)

    return data
}