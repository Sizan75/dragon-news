import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
const [user, setUser] = useState(null)

const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
}, [])
 const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
 }
const providerLogIn = (provider) =>{
    return signInWithPopup(auth,provider)
}

const logOut = () =>{
    return signOut(auth);
}
    const authInfo = {user,providerLogIn ,logOut,createUser,signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;