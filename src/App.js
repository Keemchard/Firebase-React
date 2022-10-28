import logo from "./logo.svg";
import "./App.css";

import { collection, addDoc, where, query, getDocs } from "firebase/firestore";
import { db, provider, auth } from "./firebase-config/firebase";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [name, setName] = useState("");

  const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(provider);
      const user = res.user;
      const userRef = collection(db, "users");
      const result = await getDocs(
        query(userRef, where("uid", "==", user.uid))
      );
      if (result.empty) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });

        setName(user.displayName);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign-in with google</button>
      {name !== "" && <WelcomePage user={name} />}
    </div>
  );
}

export default App;
