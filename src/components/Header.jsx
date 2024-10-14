import  { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='Header'>
      <Navbar color="faded" light expand='lg'>
        <NavbarBrand href="/" className="me-auto logo">
          LabQMS
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='navbar'>
            <NavItem>
              <NavLink className='navlink' href="#">Free Course</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink' href="#">
                Books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink' href="#">
                Templates
              </NavLink>
            </NavItem>
            <NavItem className='search-container'>       
              <input type="text"  placeholder="search" className="mr-sm-2 searchbox" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;