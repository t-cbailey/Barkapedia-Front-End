import { initializeApp } from "firebase/app";
import { FirebaseConfig } from "../src/types/CustomTypes";

import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  signOut,
} from "firebase/auth";

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDiKtuX-0xusTCMUEO7cEkuhujQ4oUn2Dg",
  authDomain: "barkapedia.firebaseapp.com",
  databaseURL:
    "https://barkapedia-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "barkapedia",
  storageBucket: "barkapedia.appspot.com",
  messagingSenderId: "739316678884",
  appId: "1:739316678884:web:cb71037d6584e1f985ecf1",
};

initializeApp(firebaseConfig);

const auth = getAuth();

if (process.env.NODE_ENV !== "production") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export const firebaseSignIn = (
  email: string,
  password: string
): Promise<string | null> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`signed in ${user.uid}`);
      return user.uid;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const firebaseSignOut = (): Promise<void> => {
  return signOut(auth)
    .then(() => {
      console.log(`signed out`);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Example usage
// const auth = getAuth();
// firebaseSignIn("test@example.com", "password1234")
//   .then((result) => {
//     if (result) {
//       console.log("Sign-in successful");
//       // Check if the current user object is not null
//       if (auth.currentUser) {
//         console.log("Current user before sign-out:", auth.currentUser.uid);
//         // Sign out the user
//         firebaseSignOut().then(() => {
//           console.log("Sign-out successful");
//           // Check if the current user object is null
//           if (!auth.currentUser) {
//             console.log("Current user after sign-out: null");
//           } else {
//             console.log("Current user after sign-out:", auth.currentUser.uid);
//           }
//         });
//       } else {
//         console.log("Current user before sign-out: null");
//       }
//     } else {
//       console.log("Sign-in failed");
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
