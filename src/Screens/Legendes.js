import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 85%;
  margin-top: 8vh;
  margin-bottom: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Couleur blanche avec une opacité de 0.8 */

  div {
    padding: 15px;
  }
`;

const PlayerCard = styled.div`
  display: flex;
  flex-direction: column; /* Positionner les éléments les uns au-dessus des autres */
  align-items: center;
  margin-right: 20px; /* Espacement entre les Player Cards */
  margin-top: 20px;

  li {
    list-style-type: none;
    max-width: 200px;
  }
`;

const PlayerImage = styled.img`
  width: 150px; /* Ajustez la taille de l'image selon vos besoins */
  height: auto;
`;

const Legendes = () => {
  return (
    <ContainerDiv id="legendes">
      <h2>Légendes de l'Équipe Française de Basketball</h2>
      <div>
        L'équipe française de basketball a été le foyer de nombreuses légendes
        au fil des années, des joueurs dont les exploits sur le terrain ont
        captivé les fans du monde entier. Voici quelques-unes des grandes
        figures qui ont marqué l'histoire de l'équipe :
      </div>
      <div style={{ display: "flex" }}>
        <PlayerCard>
          <PlayerImage src="tony_parker.png" alt="Tony Parker" />
          <ul>
            <h3>Tony Parker :</h3>
            <li>
              Considéré comme l'un des plus grands meneurs de jeu de tous les
              temps, Parker a mené l'équipe nationale à de nombreux succès, y
              compris une médaille d'or aux championnats d'Europe et une
              médaille d'argent aux Jeux Olympiques.
            </li>
          </ul>
        </PlayerCard>
        <PlayerCard>
          <PlayerImage src="boris_diaw.webp" alt="Boris Diaw" />
          <ul>
            <h3>Boris Diaw :</h3>

            <li>
              Un joueur polyvalent et visionnaire, Diaw était un pilier de
              l'équipe nationale pendant de nombreuses années, apportant son
              intelligence de jeu et son leadership sur le terrain.
            </li>
          </ul>
        </PlayerCard>
        <PlayerCard>
          <PlayerImage src="rudy_gobert.avif" alt="Rudy Gobert" />
          <ul>
            <h3>Rudy Gobert :</h3>

            <li>
              Avec son envergure impressionnante et sa présence défensive
              dominante, Gobert est devenu l'un des meilleurs défenseurs de la
              NBA et un joueur clé pour l'équipe nationale française.
            </li>
          </ul>
        </PlayerCard>
        <PlayerCard>
          <PlayerImage src="wemby.avif" alt="Wembanyama" />
          <ul>
            <h3>Wembanyama :</h3>

            <li>
              La jeune star montante du basketball français, Wembanyama, a
              attiré l'attention du monde entier avec son talent exceptionnel et
              son potentiel illimité. À seulement X ans, il est déjà considéré
              comme l'un des futurs grands du basketball international.
            </li>
          </ul>
        </PlayerCard>
        <PlayerCard>
          <PlayerImage src="nicolas_batum.png" alt="Nicolas Batum" />
          <ul>
            <h3>Nicolas Batum :</h3>

            <li>
              Batum a été un élément clé de l'équipe nationale française pendant
              de nombreuses années, apportant sa polyvalence et son adresse au
              jeu.
            </li>
          </ul>
        </PlayerCard>
      </div>
    </ContainerDiv>
  );
};

export default Legendes;
