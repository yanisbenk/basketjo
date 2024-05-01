import React from "react";
import styled from "styled-components";
import Home from "./Screens/Home";
import Heritage from "./Screens/Heritage";
import Navbar from "./Components/Navbar";
import Category from "./Screens/Category";
import Palmares from "./Screens/Palmares";
import Legendes from "./Screens/Legendes";
import { Router, Route } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://image.noelshack.com/fichiers/2024/18/2/1714497672-firefly-20240430191543-2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; /* Centrer l'image de fond horizontalement et verticalement */
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Home />
      <Category />
      <Heritage />
      <Palmares />
      <Legendes />
    </AppContainer>
  );
}

export default App;
