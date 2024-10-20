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
import { Link } from 'react-router-dom';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='Header'>
      <Navbar color="faded" light expand='lg'>
        <NavbarBrand href="/" className="me-auto logo">
          <img className='logoimg' src='logo6.png ' alt='LabQMS'/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='navbar'>
            <NavItem>
             <Link to="/"><NavLink className='navlink'>Free Course</NavLink></Link> 
            </NavItem>
            <NavItem>
             <Link to="/templates"><NavLink className='navlink' href="#">Books</NavLink></Link> 
            </NavItem>
            <NavItem>
            <Link to="/templates"><NavLink className='navlink'>Templates </NavLink></Link>  
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