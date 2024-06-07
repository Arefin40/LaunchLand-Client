import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   GithubAuthProvider,
   GoogleAuthProvider,
   FacebookAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
   updateProfile,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "@hooks/axios";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => {
   return useContext(AuthContext);
};

const formattedErrorMessage = (errorMessage) => {
   const regEx = /auth\/([a-z-]+)/;
   const message = errorMessage.match(regEx)?.[1];
   return message
      ? message.charAt(0).toUpperCase() + message.slice(1).split("-").join(" ")
      : errorMessage;
};

const providers = {
   google: new GoogleAuthProvider(),
   github: new GithubAuthProvider(),
   facebook: new FacebookAuthProvider(),
};

const saveUserInfo = async (user) => {
   try {
      await axios.post("/users", {
         name: user?.displayName,
         email: user?.email,
         photoUrl: user?.photoURL,
      });
   } catch (error) {
      return;
   }
};

const issueToken = async (user) => {
   const response = await axios.post("/jwt", { email: user?.email });
   if (response?.data.token) {
      localStorage.setItem("access-token", response.data.token);
   }
};

const clearToken = async () => {
   localStorage.removeItem("access-token");
};

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isAuthenticating, setIsAuthenticating] = useState(true);

   const createAccount = async ({ displayName, photoURL, email, password }, callbackFunction) => {
      setIsAuthenticating(true);
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         await updateProfile(userCredential.user, { displayName, photoURL });
         await saveUserInfo(userCredential?.user);
         if (callbackFunction) callbackFunction();
         toast.success("Account created successfully");
         setUser({ ...userCredential.user, displayName, photoURL });
      } catch (error) {
         setIsAuthenticating(false);
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const signInWithProvider = (authProvider, callbackFunction) => async (e) => {
      e.preventDefault();
      setIsAuthenticating(true);
      try {
         const userCredential = await signInWithPopup(auth, providers[authProvider]);
         await saveUserInfo(userCredential?.user);
         if (callbackFunction) callbackFunction();
         toast.success("Signed in successfully");
      } catch (error) {
         setIsAuthenticating(false);
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const logIn = async ({ email, password }, callbackFunction) => {
      setIsAuthenticating(true);
      try {
         await signInWithEmailAndPassword(auth, email, password);
         if (callbackFunction) callbackFunction();
         toast.success("Signed-in successfully");
      } catch (error) {
         setIsAuthenticating(false);
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const logOut = async () => {
      setIsAuthenticating(true);
      try {
         await signOut(auth);
      } catch (error) {
         setIsAuthenticating(false);
      }
   };

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
         currentUser ? await issueToken(currentUser) : await clearToken();
         setUser(currentUser);
         setIsAuthenticating(false);
      });
      return unsubscribe;
   }, []);

   const values = {
      user,
      isAuthenticating,
      createAccount,
      signInWithProvider,
      signInWithEmail: logIn,
      signOut: logOut,
   };

   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
