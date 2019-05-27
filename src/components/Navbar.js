import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function NavbarApp() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">tarragon</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>{/* <NavLink href="/todo/">Share</NavLink> */}</NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            New Recipe
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Blank Template</DropdownItem>
            <DropdownItem>Image Upload</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
}
