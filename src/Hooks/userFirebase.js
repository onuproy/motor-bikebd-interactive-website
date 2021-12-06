import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState({});
    const [admin,setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWith = signInWithEmailAndPassword;
    const signInWithCreateUser = createUserWithEmailAndPassword;
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    useEffect( () => {
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user);
            }
        })
    }, [])
    useEffect(() =>{
        fetch(`https://secret-gorge-46028.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data=> setAdmin(data.admin))
    },[user.email])
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }
    return{
        user,
        error,
        admin,
        signInUsingGoogle,
        logout,
        signInWith,
        signInWithCreateUser
    }
}

export default useFirebase;