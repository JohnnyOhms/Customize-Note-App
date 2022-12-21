import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Auth } from "../firebase/firebase";

const AuthContex = createContext();
export function useAuth() {
  return useContext(AuthContex);
}

export default function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState("");

  const singup = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const signout = () => {
    return signOut(Auth);
  };

  //   useEffect(() => {
  //     const unsubscribe = Auth.onAuthStateChanged((user) => {
  //       setCurrentUser(user.email);
  //     });
  //     return unsubscribe;
  //   }, []);

  const values = {
    currentUser,
    setCurrentUser,
    singup,
    login,
    signout,
  };
  return (
    <AuthContex.Provider value={values}>{props.children}</AuthContex.Provider>
  );
}
