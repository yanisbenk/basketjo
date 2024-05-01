import React, { useState } from "react";
import { FIREBASE_AUTH } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Connexion d'un utilisateur
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button id="loginBtn" onClick={signIn} disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default LoginScreen;
