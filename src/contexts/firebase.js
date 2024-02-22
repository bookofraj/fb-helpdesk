import { createContext , useContext } from "react";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword } from 'firebase/auth'

const FirebaseContext = createContext();

const firebaseConfig = {
    apiKey: "AIzaSyDFxq57RT7acCT95WwEgveEWSJj6ve4ptE",
    authDomain: "rituraj-fb-helpdesk-for-rp.firebaseapp.com",
    projectId: "rituraj-fb-helpdesk-for-rp",
    storageBucket: "rituraj-fb-helpdesk-for-rp.appspot.com",
    messagingSenderId: "949941190955",
    appId: "1:949941190955:web:4c7dfd7c43fdc71e99456e"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);



  export const useFirebase = () => useContext(FirebaseContext)

  export const FirebaseProvider = (props) => {

    const signUp = (email, password) => {
      createUserWithEmailAndPassword(firebaseAuth,email,password);
    }

    const signIn = (email,password) => {
      signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    return ( <FirebaseContext.Provider value={{
      signUp, signIn
    }}>{props.children}</FirebaseContext.Provider>
  )}