import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
export const Header = () => {
  return (
    <>
    <div className="container-fluid text-bg-light">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <h1 className="ms-2 display-6">Med World</h1>
        </a>

       {/* ul className="nav nav-pills">
          <li className="nav-item"><Link to="/home" className="nav-link active" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
          <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
        </ul> */}
        <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/home">MedWorld</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </header>
    </div>
    </>
  );
}

export default Header;
