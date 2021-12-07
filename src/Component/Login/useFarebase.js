import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";
import initializeFarebase from './firebase.init';
import { useEffect } from 'react';
initializeFarebase()
const useFarebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const regiseruser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //saveUser Dataabase
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')

            })
            .catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLoading(false))
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/' || ''
                history.replace(destination)
                setError('')


            })
            .catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLoading(false))

    }

    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')

                setError('')
                const destination = location?.state?.from || '/'
                history.replace(destination)
            }).catch((error) => {
                setError(error.message)

            })
            .finally(() => setIsLoading(false))

    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;

                setUser(user)
            } else {

                setUser(user)
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])



    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    return {
        user,
        regiseruser,
        loginUser,
        logOut,
        isLoading,
        error,
        admin,
        googleSignIn
    }
};

export default useFarebase;