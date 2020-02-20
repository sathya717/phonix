import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 40px;
  height: 70px;
  width: 100%;
  background-color: #3730ed;
  /* position: fixed; */
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  justify-content: space-between;
  overflow: hidden;
`;

const Title = styled.h6`
  font-size: 1.6rem;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="nav-title">
        <Title>
          <i class="fas fa-stream"></i> Phonix
        </Title>
      </div>
      <NavLinks className="nav-links">
        <NavItem>
          <Link to="/login" activeStyle={{ color: "pink" }}>
            login
          </Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
}
