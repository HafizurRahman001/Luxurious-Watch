import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile, signInWithEmailAndPassword, getIdToken } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [controlSystem, setControlSystem] = useState(false);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();



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
            })
            .catch((error) => {
                setAuthError(error.message);
            })
        // .finally(() => setIsLoading(false));
    };


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
        // .finally(() => setIsLoading(false));
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
        // .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setAuthError(error.message)
        })
        // .finally(() => setIsLoading(false));
    };


    const saveUser = (email, displayName, method) => {
        setIsLoading(true);
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
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


    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data?.admin)
            })
        setIsLoading(false);
    }, [user?.email])



    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [controlSystem])



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
        admin
    };
};

export default useFirebase;