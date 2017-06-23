import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//<Navbar.Brand>
var divStyle = {
  color: "#000"
};
var linkStyle = {
  margin:"10px",
  display: "inline-block"
};

const AppBar = ({
  isAuthorized,
  onToShare,
  onLogout,
}) => (
  <Navbar >
    <Navbar.Header >
        <Link to="/" style={linkStyle}>
            <img src="/static/images/logo3.png" width="55" height="50" alt="React" />
        </Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {
        isAuthorized === false ?
        (
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/login' }}><NavItem eventKey={2} href="#">登入</NavItem></LinkContainer>
          </Nav>
        ) :
        (
          <Nav pullRight>
            <NavItem eventKey={1} onClick={onToShare} href="/share">發文</NavItem>
            <NavItem eventKey={2} onClick={onLogout} href="#">登出</NavItem>
          </Nav>
        )        
      }
    </Navbar.Collapse>
  </Navbar>
);

export default AppBar;