// AdminScreen.js
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebase";
import Palmares from "./Palmares"; // Importez le composant Palmares
import LoginScreen from "./LoginForm";
import BackOffice from "./BackOffice";

const AdminScreen = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Met à jour l'état de l'utilisateur lorsqu'il y a un changement d'état d'authentification
    });
    return () => unsubscribe(); // Nettoie l'effet lors du démontage du composant
  }, [auth]); // Déclenche l'effet lorsque l'objet d'authentification Firebase change

  return (
    <div>
      {user ? ( // Vérifie si un utilisateur est connecté
        <BackOffice /> // Passez true pour indiquer que l'utilisateur est connecté
      ) : (
        <LoginScreen /> // Affiche le composant de connexion si aucun utilisateur n'est connecté
      )}
    </div>
  );
};

export default AdminScreen;
