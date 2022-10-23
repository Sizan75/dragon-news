import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
const [user, setUser] = useState(null)

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
}, [])

const providerLogIn = (provider) =>{
    return signInWithPopup(auth,provider)
}
    const authInfo = {user,providerLogIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;