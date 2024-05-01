import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  gap: 5rem;
`;

const CircleLink = styled.a`
  text-decoration: none; /* Supprimer le soulignement par défaut */
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white; /* Orange couleur balle de basket */
  margin: 29px 0;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease; /* Ajout de l'animation de transition */

  &:hover {
    transform: scale(1.5); /* Agrandissement du cercle lors du survol */
  }
`;

const CircleText = styled.div`
  color: black;
  white-space: nowrap;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
`;

const Category = () => {
  return (
    <ContainerDiv id="category">
      <CircleContainer>
        {/* Cercle 1 */}
        <CircleLink href="#heritage">
          <Circle>
            <CircleText>HERITAGE</CircleText>
          </Circle>
        </CircleLink>
      </CircleContainer>
      <CircleContainer>
        {/* Cercle 2 */}
        <CircleLink href="#palmares">
          <Circle>
            <CircleText>PALMARES</CircleText>
          </Circle>
        </CircleLink>
      </CircleContainer>
      <CircleContainer>
        {/* Cercle 3 */}
        <CircleLink href="#legendes">
          <Circle>
            <CircleText>LEGENDES</CircleText>
          </Circle>
        </CircleLink>
      </CircleContainer>
    </ContainerDiv>
  );
};

export default Category;
