import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  padding-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  z-index: 1;
`;

const VideoContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
`;

const Home = () => {
  return (
    <ContainerDiv id="home">
      <VideoContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/1IMAiJZQRK8?si=amzLD_m9zzwnJbC7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </VideoContainer>
    </ContainerDiv>
  );
};

export default Home;
