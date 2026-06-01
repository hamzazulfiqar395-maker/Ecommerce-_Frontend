import React from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { FaBoxOpen, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { products } from '../data/products';

// Sub-components for Admin
const DashboardHome = () => {
    return (
        <div>
            <h2 className="mb-4 fw-bold text-dark">Dashboard Overview</h2>
            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="shadow-sm border-0 border-start border-primary border-4 rounded-3 h-100">
                        <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted text-uppercase fw-bold mb-2">Total Products</h6>
                                    <h3 className="fw-bold mb-0 text-dark">{products.length}</h3>
                                </div>
                                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                    <FaBoxOpen size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm border-0 border-start border-success border-4 rounded-3 h-100">
                        <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted text-uppercase fw-bold mb-2">Total Orders</h6>
                                    <h3 className="fw-bold mb-0 text-dark">1,245</h3>
                                </div>
                                <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                    <FaShoppingCart size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm border-0 border-start border-warning border-4 rounded-3 h-100">
                        <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-muted text-uppercase fw-bold mb-2">Total Users</h6>
                                    <h3 className="fw-bold mb-0 text-dark">8,930</h3>
                                </div>
                                <div className="bg-warning bg-opacity-10 p-3 rounded-circle text-warning">
                                    <FaUsers size={24} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h4 className="mb-4 fw-bold text-dark">Recent Orders</h4>
            <Card className="shadow-sm border-0 rounded-3">
                <Card.Body className="p-0 table-responsive">
                    <Table hover className="mb-0 text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th className="ps-4">Order ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="pe-4 text-end">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ps-4 fw-semibold">#ORD-001</td>
                                <td>John Doe</td>
                                <td className="text-muted">Oct 24, 2023</td>
                                <td><span className="badge bg-success bg-opacity-10 text-success px-2 py-1">Completed</span></td>
                                <td className="pe-4 text-end fw-bold">$120.00</td>
                            </tr>
                            <tr>
                                <td className="ps-4 fw-semibold">#ORD-002</td>
                                <td>Jane Smith</td>
                                <td className="text-muted">Oct 23, 2023</td>
                                <td><span className="badge bg-warning bg-opacity-10 text-warning px-2 py-1">Pending</span></td>
                                <td className="pe-4 text-end fw-bold">$340.50</td>
                            </tr>
                            <tr>
                                <td className="ps-4 fw-semibold">#ORD-003</td>
                                <td>Mike Johnson</td>
                                <td className="text-muted">Oct 22, 2023</td>
                                <td><span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1">Processing</span></td>
                                <td className="pe-4 text-end fw-bold">$89.99</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

const ProductTable = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="m-0 fw-bold text-dark">Product Management</h2>
                <Button variant="primary" className="fw-semibold px-4 shadow-sm">Add New Product</Button>
            </div>
            <Card className="shadow-sm border-0 rounded-3">
                <Card.Body className="p-0 table-responsive">
                    <Table hover className="mb-0 align-middle text-nowrap">
                        <thead className="table-light">
                            <tr>
                                <th className="ps-4">Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th className="pe-4 text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="ps-4">
                                        <img src={product.image} alt={product.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} />
                                    </td>
                                    <td className="fw-semibold text-truncate" style={{ maxWidth: '250px' }}>{product.name}</td>
                                    <td><span className="badge bg-secondary bg-opacity-10 text-secondary px-2 py-1">{product.category}</span></td>
                                    <td className="fw-bold">${product.price.toFixed(2)}</td>
                                    <td className="pe-4 text-end">
                                        <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                                        <Button variant="outline-danger" size="sm">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="dashboard-container d-flex bg-light min-vh-100">
            <div style={{ width: '250px', flexShrink: 0 }}>
                <Sidebar />
            </div>
            <div className="flex-grow-1 p-4 p-md-5 overflow-auto">
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/products" element={<ProductTable />} />
                    <Route path="*" element={<h4 className="text-muted">Page under construction</h4>} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
