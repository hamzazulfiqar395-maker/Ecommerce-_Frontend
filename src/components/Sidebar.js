import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="sidebar text-white shadow">
            <div className="px-3 mb-4 text-center">
                <h5 className="text-uppercase text-muted fw-bold" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>Admin Menu</h5>
            </div>
            <Nav className="flex-column px-2">
                <Nav.Link
                    as={Link}
                    to="/admin"
                    className={currentPath === '/admin' ? 'active' : ''}
                >
                    <FaTachometerAlt /> Dashboard
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/admin/products"
                    className={currentPath === '/admin/products' ? 'active' : ''}
                >
                    <FaBoxOpen /> Products Mgmt
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/admin/orders"
                    className={currentPath === '/admin/orders' ? 'active' : ''}
                >
                    <FaShoppingCart /> Orders
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/admin/users"
                    className={currentPath === '/admin/users' ? 'active' : ''}
                >
                    <FaUsers /> Customers
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
