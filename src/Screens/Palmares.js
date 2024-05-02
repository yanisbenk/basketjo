// Palmares.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebase";
import BackOffice from "./BackOffice"; // Import du composant BackOffice

const ContainerDiv = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column; /* Positionner les éléments les uns au-dessus des autres */
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 1;
  opacity: 80%;
  background-color: #fa8320;
  margin-top: 8vh;
  font-family: monaco, Consolas, Lucida Console, monospace;

  div {
    padding: 15px;
  }

  li {
    list-style-type: none;
  }
`;

const Palmares = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté
  const [medal, setMedal] = useState("Médaille d'Argent"); // Initialisation de la médaille

  // Fonction pour mettre à jour la médaille
  const updateMedal = (newMedal) => {
    setMedal(newMedal);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Met à jour l'état de l'utilisateur lorsqu'il y a un changement d'état d'authentification
    });
    return () => unsubscribe(); // Nettoie l'effet lors du démontage du composant
  }, [auth]); // Déclenche l'effet lorsque l'objet d'authentification Firebase change

  return (
    <ContainerDiv id="palmares">
      <h2>
        Palmarès de l'Équipe Française de Basketball aux Jeux Olympiques depuis
        2000
      </h2>
      <div>
        Depuis ses premières participations aux Jeux Olympiques, l'équipe
        française de basketball a inscrit son nom dans l'histoire du sport en
        remportant des médailles et en réalisant des performances remarquables.
        Découvrez ci-dessous les résultats marquants de l'équipe française de
        basketball aux Jeux Olympiques :
      </div>
      <div>
        <ul>
          <li>2024: {medal}</li>
          <li>2020: Médaille d'argent</li>
          <li>2016: Pas de médaille</li>
          <li>2012: Médaille d'argent</li>
          <li>2008: Pas de médaille</li>
          <li>2004: Pas de médaille</li>
          <li>2000: Médaille d'argent</li>
        </ul>
      </div>
      {user ? <BackOffice updateMedal={updateMedal}></BackOffice> : null}{" "}
    </ContainerDiv>
  );
};

export default Palmares;
