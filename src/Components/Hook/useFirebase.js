import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [authError, setAuthError] = useState('');
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);




    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)

            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                // setAuthError('');
                // const destination = location?.state?.from || '/';
                // navigate(destination);

            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // user register 
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // user login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        signInWithGoogle,
        logOut,
        isLoading,
        error,
        setError,
        loginUser,
        authError,
        registerUser, admin


    }
}

export default useFirebase;