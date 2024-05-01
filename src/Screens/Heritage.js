// Heritage.js
import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 85%;
  margin-top: 8vh;
  display: flex;
  flex-direction: column; /* Positionner les éléments les uns au-dessus des autres */
  justify-content: center;
  align-items: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);

  div {
    padding: 15px;
  }
`;

const Heritage = () => {
  return (
    <ContainerDiv id="heritage">
      <h2>Héritage de l'Équipe Française de Basketball</h2>
      <div>
        L'histoire de l'équipe française de basketball est riche en exploits et
        en moments mémorables qui ont marqué le sport et inspiré des générations
        entières. Depuis ses débuts sur la scène internationale, l'équipe
        française a laissé un héritage indélébile qui continue d'influencer et
        de façonner le paysage du basketball français.
      </div>

      <h3>Parcours historique</h3>
      <div>
        Du premier match de basketball joué en France à la participation aux
        Jeux Olympiques, l'équipe française a connu de nombreux moments forts. À
        travers les décennies, les joueurs emblématiques, les victoires épiques
        et les performances remarquables ont contribué à construire l'histoire
        glorieuse du basketball français.
      </div>

      <h3>Légendes du basketball français</h3>
      <div>
        Des légendes telles que Tony Parker, Boris Diaw, et d'autres encore, ont
        marqué l'histoire du basketball français par leurs compétences
        exceptionnelles, leur dévouement et leur leadership. Leur influence
        dépasse le terrain de jeu et se ressent dans chaque aspect de la culture
        basketball en France.
      </div>

      <h3>L'héritage continue</h3>
      <div>
        Aujourd'hui, l'équipe française de basketball continue de perpétuer cet
        héritage en inspirant de nouveaux talents, en repoussant les limites et
        en représentant fièrement la France sur la scène internationale. En
        explorant notre héritage, nous célébrons le passé, le présent et
        l'avenir du basketball français.
      </div>
    </ContainerDiv>
  );
};

export default Heritage;
