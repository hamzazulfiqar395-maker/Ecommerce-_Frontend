import React from 'react';
import { Container, Table, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <Container className="py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <FaShoppingCart size={64} className="text-muted mb-4" />
                <h2 className="mb-3">Your Cart is Empty</h2>
                <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
                <Button as={Link} to="/products" variant="primary" size="lg" className="px-5 rounded-pill shadow-sm">
                    Start Shopping
                </Button>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <h2 className="mb-4 fw-bold d-flex align-items-center gap-2">
                <FaShoppingCart /> Shopping Cart
            </h2>
            <Row className="g-4">
                <Col lg={8}>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-0 table-responsive">
                            <Table hover className="mb-0 align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-4">Product</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-end pe-4">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td className="ps-4 py-3">
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                                    <div>
                                                        <h6 className="mb-1 text-truncate" style={{ maxWidth: '200px' }}>{item.name}</h6>
                                                        <Button variant="link" size="sm" className="text-danger p-0 d-flex align-items-center gap-1 text-decoration-none" onClick={() => removeFromCart(item.id)}>
                                                            <FaTrash size={12} /> Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center fw-semibold text-muted">${item.price.toFixed(2)}</td>
                                            <td>
                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1} className="d-flex align-items-center p-1 rounded-circle">
                                                        <FaMinus size={10} />
                                                    </Button>
                                                    <span className="fw-bold" style={{ width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, 1)} className="d-flex align-items-center p-1 rounded-circle">
                                                        <FaPlus size={10} />
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="text-end fw-bold pe-4 text-primary">${(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                        <Card.Body className="p-4">
                            <h5 className="fw-bold mb-4">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3 text-muted">
                                <span>Subtotal ({cart.length} items)</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 text-muted">
                                <span>Shipping</span>
                                <span className="text-success">Free</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 text-muted">
                                <span>Estimated Tax</span>
                                <span>${(cartTotal * 0.08).toFixed(2)}</span>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold fs-5">Total</span>
                                <span className="fw-bold fs-5 text-primary">${(cartTotal * 1.08).toFixed(2)}</span>
                            </div>
                            <Button variant="primary" size="lg" className="w-100 shadow-sm rounded-3 fw-bold">
                                Proceed to Checkout
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
