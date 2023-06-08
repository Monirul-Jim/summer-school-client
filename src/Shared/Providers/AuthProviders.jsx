import{ createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Components/Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const handleWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,curUser=>{
        setUser(curUser)
        setLoading(false)
          // get and set token
          if(curUser){
            axios.post('http://localhost:5000/jwt', {email: curUser.email})
            .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
        });
        
        return ()=>{
            unsubscribe()
        }
    },[])
    const updatePic=(profile)=>{
       return updateProfile(auth.currentUser,profile)
    }
    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        logOut,
        updatePic,
        handleWithGoogle,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;