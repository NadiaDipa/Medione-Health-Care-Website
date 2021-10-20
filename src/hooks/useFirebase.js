// import {
//     useState,
//     useEffect
// } from 'react';
// import {
//     getAuth,
//     signInWithPopup,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     GithubAuthProvider,
//     signOut
// } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init';

// initializeAuthentication();

// const useFirebase = () => {
//     const [user, setUser] = useState({});

//     const auth = getAuth();




//     const signInUsingGoogle = () => {
//         const googleProvider = new GoogleAuthProvider();
//         signInWithPopup(auth, googleProvider)
//             .then((result) => {
//                 // const user = result.user;
//                 // setUser(user)


//                 // setUser(user)


//             })
//             .catch(error => {
//                 setUser(error.message)
//             })
//     }

//     const signInUsingGit = () => {
//         const gitProvider = new GithubAuthProvider();
//         signInWithPopup(auth, gitProvider)
//             .then(res => {
//                 setUser(res.user)
//             })

//     }


//     const logOut = () => {
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//             })
//     }

//     //observe whether user auth state changed or not
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             }
//         });
//     }, [])

//     return {
//         user,
//         signInUsingGoogle,
//         signInUsingGit,
//         logOut
//     }
// }
// export default useFirebase;



import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {
    useState,
    useEffect
} from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                // setUser(result.user);
            })
    }

    const signInUsingGit = () => {
        const gitProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitProvider)
            .then(res => {
                setUser(res.user)
            })
    }

    // const signInUsingFacebook = () => {
    //     const gitProvider = new GithubAuthProvider();
    //     signInWithPopup(auth, gitProvider)
    //         .then(res => {
    //             setUser(res.user)
    //         })
    // }

    const signInUsingEmailPassword = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)
    }

    const handleUser = e => {
        console.log(e.target.value)
    }


    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingGit,
        signInUsingEmailPassword,
        handleEmail,
        handlePass,
        handleUser
    }
}

export default useFirebase;