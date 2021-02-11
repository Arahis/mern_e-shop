import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Dropdown,
  NavItem,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleDropdownToggle = () => {
    setDropdownToggle(!dropdownToggle);
  };
  return (
    <header>
      <Navbar variant="dark" bg="primary" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>BookFair</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/cart">
              <i className="bi bi-book"></i>
            </Nav.Link>

            <Dropdown
              id="basic-nav-dropdown"
              show={dropdownToggle}
              // as={NavItem}
              className="e-caret-hide"
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <Dropdown.Toggle as={NavLink}>
                <i className="bi bi-person"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align="right">
                {userData ? (
                  <>
                    <NavDropdown.Divider />
                    <LinkContainer to="/profile">
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Item onClick={logoutHandler}>
                      Logout
                    </Dropdown.Item>
                  </>
                ) : (
                  <LinkContainer to="/login">
                    <Dropdown.Item>Login or Register</Dropdown.Item>
                  </LinkContainer>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
