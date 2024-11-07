import { h } from "preact";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1em;
  background: #f8f9fa;
  position: sticky;
  top: 0;
`;

const NavItem = styled.a`
  color: #333;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

export const Navbar = () => (
  <NavbarContainer>
    <NavItem href="#about">About</NavItem>
    <NavItem href="#work">Work</NavItem>
    <NavItem href="#experience">Experience</NavItem>
    <NavItem href="#contact">Contact</NavItem>
  </NavbarContainer>
);
