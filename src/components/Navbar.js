import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaStore } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <BNavbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
            <Container fluid={isAdminPage ? true : false} className={isAdminPage ? "px-4" : ""}>
                <BNavbar.Brand as={Link} to="/" className="text-primary d-flex align-items-center gap-2">
                    <FaStore size={24} />
                    <span>ShopReact</span>
                </BNavbar.Brand>
                <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active text-primary fw-bold' : ''}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/products" className={location.pathname === '/products' ? 'active text-primary fw-bold' : ''}>Products</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className={isAdminPage ? 'active text-primary fw-bold' : ''}>Admin</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/cart" className="position-relative d-flex align-items-center text-dark">
                            <FaShoppingCart size={20} />
                            {cartItemCount > 0 && (
                                <Badge bg="danger" pill className="position-absolute" style={{ top: '-5px', right: '-10px', fontSize: '0.65em' }}>
                                    {cartItemCount}
                                </Badge>
                            )}
                            <span className="ms-2 d-lg-none">Cart</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login" className="d-flex align-items-center gap-2 text-dark">
                            <FaUser size={18} />
                            <span>Login / Sign Up</span>
                        </Nav.Link>
                    </Nav>
                </BNavbar.Collapse>
            </Container>
        </BNavbar>
    );
};

export default Navbar;
