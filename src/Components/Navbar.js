import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import AdminScreen from "../Screens/admin";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
  color: #fff;
  z-index: 1000;
`;

const Logo = styled.div`
  img {
    width: 75px;
    height: 75px;
  }
`;

const Menu = styled.div`
  position: relative;
  padding-right: 40px;
`;

const MenuToggle = styled.button`
  background: white;
  border: none;
  color: black;
  cursor: pointer;
  padding: 8px 10px;
  &:hover {
    background: #cccccc;
    color: black;
  }
`;

const fadeInDiagonal = keyframes`
  from {
    opacity: 0;
    transform: translate(10%, -10%);
  }
  to {
    opacity: 1;
    transform: translate(-33%, 0%);
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 32px;
  background-color: white;
  list-style-type: none;
  padding: 10px;
  margin: 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s;
  animation: ${({ visible }) => (visible ? fadeInDiagonal : "none")} 0.5s ease
    forwards;
`;

const MenuItemButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  color: black;
  position: relative;
  width: 100%;
  text-align: left;
  text-decoration: none;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 75px;
    height: 1px;
    background-color: black;
  }
`;

const CircleCursor = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: black;
  opacity: 50%;
  pointer-events: none;
  z-index: 1000;
  transform: translate(30%, -50%);
`;

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const circleCursorRef = useRef(null);
  const [activeLink, setActiveLink] = useState("#aboutme");
  const [adminVisible, setAdminVisible] = useState(false); // État local pour gérer l'affichage du composant Admin

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });

    if (circleCursorRef.current) {
      circleCursorRef.current.style.left = `${clientX}px`;
      circleCursorRef.current.style.top = `${clientY}px`;
    }
  };

  const toggleAdmin = () => {
    setAdminVisible(!adminVisible);
  };

  return (
    <>
      {adminVisible ? (
        <AdminScreen />
      ) : (
        <NavbarContainer>
          <Logo>
            <img src="logo.png" alt="Logo" />
          </Logo>
          <Menu
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu}
            onMouseMove={handleMouseMove}
          >
            <MenuToggle>Menu</MenuToggle>
            <DropdownMenu visible={menuVisible}>
              <MenuItemButton
                href="#home"
                onClick={() => handleLinkClick("#home")}
              >
                HOME
              </MenuItemButton>
              <MenuItemButton
                href="#heritage"
                onClick={() => handleLinkClick("#heritage")}
              >
                HERITAGE
              </MenuItemButton>
              <MenuItemButton
                href="#palmares"
                onClick={() => handleLinkClick("#palmares")}
              >
                PALMARES
              </MenuItemButton>
              <MenuItemButton
                href="#legendes"
                onClick={() => handleLinkClick("#legendes")}
              >
                LEGENDES
              </MenuItemButton>
              {/* Bouton Admin */}
              <MenuItemButton href="#" onClick={toggleAdmin}>
                ADMIN
              </MenuItemButton>
            </DropdownMenu>
          </Menu>
          {menuVisible && <CircleCursor ref={circleCursorRef} />}
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;
