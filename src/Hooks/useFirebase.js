import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {

    //declaring states
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [controlSystem, setControlSystem] = useState(false);
    const [admin, setAdmin] = useState(false);

    //firebase provider and auth
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    //register new user by google firebase
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to the database
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                    setAuthError(error)
                });
                history.replace('/')

                //instant logout for prevent automatic login after register
                logOut();
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    //login new user by google firebase
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state
    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    //signIn user automatically by google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                //send user to server
                saveUser(result?.user?.email, result?.user?.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    //logOut method for signOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    };

    // common method using for store user info in database
    const saveUser = (email, displayName, method) => {
        setIsLoading(true);
        const user = { email, displayName };
        fetch('https://immense-mesa-31667.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        // setIsLoading(false)
    }

    // make admin using Email
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://immense-mesa-31667.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data?.admin)
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => { setIsLoading(false) })
    }, [user?.email])


    // call all products from database
    useEffect(() => {
        setIsLoading(true)
        fetch('https://immense-mesa-31667.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [controlSystem])


    //export necessary function and states for use later
    return {
        products,
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        setControlSystem,
        setProducts,
        admin
    };
};

export default useFirebase;