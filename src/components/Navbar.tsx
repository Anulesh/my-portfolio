import { h } from 'preact';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1em;
  background: #f8f9fa;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavItem = styled.a`
  color: #333;
  font-weight: bold;
  margin: 0 1.5em;
  text-decoration: none;
  font-size: 1.2em;
  & span {
    padding: 0.5em;
  }
  &:hover {
    color: #007bff;
  }
`;

export const Navbar = () => (
  <NavbarContainer>
    <NavItem class="x" href="#about"><span>About</span></NavItem>
    <NavItem class="x" href="#work"><span>Work</span></NavItem>
    <NavItem class="x" href="#contact"><span>Contact</span></NavItem>
  </NavbarContainer>
);
